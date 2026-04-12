const express = require("express");
const cors    = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app  = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// ─────────────────────────────────────────
// MONGODB CONNECTION
// ─────────────────────────────────────────
mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => { console.error("❌ MongoDB error:", err); process.exit(1); });

// ─────────────────────────────────────────
// SCHEMAS & MODELS
// ─────────────────────────────────────────

// 1. Application submissions (existing)
const submissionSchema = new mongoose.Schema({
  name:        { type: String, required: true },
  whatsapp:    { type: String, required: true },
  semester:    { type: String, required: true },
  interest:    { type: String, required: true },
  builtBefore: { type: Boolean, required: true },
  whatBuilt:   { type: String, default: "" },
  submittedAt: { type: Date,   default: Date.now },
}, { timestamps: true });

const Submission = mongoose.model("Submission", submissionSchema);

// 2. Event notification sign-ups
const eventNotifySchema = new mongoose.Schema({
  email:     { type: String, required: true, lowercase: true, trim: true },
  phone:     { type: String, default: "" },
  eventName: { type: String, required: true },
  signedUpAt:{ type: Date,   default: Date.now },
}, { timestamps: true });

const EventNotify = mongoose.model("EventNotify", eventNotifySchema);

// 3. Blog notification / newsletter sign-ups
const blogNotifySchema = new mongoose.Schema({
  email:     { type: String, required: true, lowercase: true, trim: true },
  phone:     { type: String, default: "" },
  signedUpAt:{ type: Date,   default: Date.now },
}, { timestamps: true });

const BlogNotify = mongoose.model("BlogNotify", blogNotifySchema);

// ─────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────
const isValidEmail = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

function logDivider(title) {
  console.log("\n" + "─".repeat(40));
  console.log(`  ${title}`);
  console.log("─".repeat(40));
}

// ─────────────────────────────────────────
// ROUTES — APPLICATIONS
// ─────────────────────────────────────────

// POST /api/apply — submit membership application
app.post("/api/apply", async (req, res) => {
  try {
    const { name, whatsapp, semester, interest, builtBefore, whatBuilt } = req.body;

    if (!name || !whatsapp || !semester || !interest) {
      return res.status(400).json({ error: "Missing required fields." });
    }

    const doc = await Submission.create({
      name, whatsapp, semester, interest,
      builtBefore: !!builtBefore,
      whatBuilt: whatBuilt || "",
    });

    logDivider("🚀 New Application");
    console.log(`  Name        : ${doc.name}`);
    console.log(`  WhatsApp    : ${doc.whatsapp}`);
    console.log(`  Semester    : ${doc.semester}`);
    console.log(`  Interest    : ${doc.interest}`);
    console.log(`  Built Before: ${doc.builtBefore}`);
    if (doc.whatBuilt) console.log(`  What Built  : ${doc.whatBuilt}`);
    console.log(`  ID          : ${doc._id}`);

    res.status(201).json({ success: true, message: "Application received!", id: doc._id });
  } catch (err) {
    console.error("Apply error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET /api/submissions — all applications (admin)
app.get("/api/submissions", async (req, res) => {
  try {
    const docs = await Submission.find().sort({ submittedAt: -1 });
    res.json({ count: docs.length, submissions: docs });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET /api/submissions/:id
app.get("/api/submissions/:id", async (req, res) => {
  try {
    const doc = await Submission.findById(req.params.id);
    if (!doc) return res.status(404).json({ error: "Not found" });
    res.json(doc);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// DELETE /api/submissions/:id
app.delete("/api/submissions/:id", async (req, res) => {
  try {
    const doc = await Submission.findByIdAndDelete(req.params.id);
    if (!doc) return res.status(404).json({ error: "Not found" });
    res.json({ success: true, message: "Deleted" });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// ─────────────────────────────────────────
// ROUTES — EVENT NOTIFICATIONS
// ─────────────────────────────────────────

// POST /api/notify/event — sign up for event notifications
app.post("/api/notify/event", async (req, res) => {
  try {
    const { email, phone, eventName } = req.body;

    if (!email || !isValidEmail(email)) {
      return res.status(400).json({ error: "Valid email is required." });
    }
    if (!eventName) {
      return res.status(400).json({ error: "eventName is required." });
    }

    // Prevent duplicate sign-ups for same email+event
    const exists = await EventNotify.findOne({ email: email.toLowerCase().trim(), eventName });
    if (exists) {
      return res.status(200).json({ success: true, message: "Already signed up!", duplicate: true });
    }

    const doc = await EventNotify.create({
      email: email.toLowerCase().trim(),
      phone: phone || "",
      eventName,
    });

    logDivider("🔔 Event Notify Sign-up");
    console.log(`  Event  : ${doc.eventName}`);
    console.log(`  Email  : ${doc.email}`);
    if (doc.phone) console.log(`  Phone  : ${doc.phone}`);
    console.log(`  ID     : ${doc._id}`);

    res.status(201).json({ success: true, message: "You'll be notified!" });
  } catch (err) {
    console.error("Event notify error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET /api/notify/event — all event sign-ups (admin)
app.get("/api/notify/event", async (req, res) => {
  try {
    const docs = await EventNotify.find().sort({ signedUpAt: -1 });
    // Group by event name for easier reading
    const grouped = docs.reduce((acc, d) => {
      if (!acc[d.eventName]) acc[d.eventName] = [];
      acc[d.eventName].push(d);
      return acc;
    }, {});
    res.json({ total: docs.length, grouped, all: docs });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET /api/notify/event/:eventName — sign-ups for a specific event
app.get("/api/notify/event/:eventName", async (req, res) => {
  try {
    const docs = await EventNotify.find({ eventName: req.params.eventName }).sort({ signedUpAt: -1 });
    res.json({ event: req.params.eventName, count: docs.length, signups: docs });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// DELETE /api/notify/event/:id
app.delete("/api/notify/event/:id", async (req, res) => {
  try {
    const doc = await EventNotify.findByIdAndDelete(req.params.id);
    if (!doc) return res.status(404).json({ error: "Not found" });
    res.json({ success: true, message: "Deleted" });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// ─────────────────────────────────────────
// ROUTES — BLOG NOTIFICATIONS / NEWSLETTER
// ─────────────────────────────────────────

// POST /api/notify/blog — subscribe to blog notifications
app.post("/api/notify/blog", async (req, res) => {
  try {
    const { email, phone } = req.body;

    if (!email || !isValidEmail(email)) {
      return res.status(400).json({ error: "Valid email is required." });
    }

    // Prevent duplicates
    const exists = await BlogNotify.findOne({ email: email.toLowerCase().trim() });
    if (exists) {
      return res.status(200).json({ success: true, message: "Already subscribed!", duplicate: true });
    }

    const doc = await BlogNotify.create({
      email: email.toLowerCase().trim(),
      phone: phone || "",
    });

    logDivider("📬 Blog Notify Sign-up");
    console.log(`  Email  : ${doc.email}`);
    if (doc.phone) console.log(`  Phone  : ${doc.phone}`);
    console.log(`  ID     : ${doc._id}`);

    res.status(201).json({ success: true, message: "Subscribed! We'll notify you." });
  } catch (err) {
    console.error("Blog notify error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET /api/notify/blog — all blog subscribers (admin)
app.get("/api/notify/blog", async (req, res) => {
  try {
    const docs = await BlogNotify.find().sort({ signedUpAt: -1 });
    res.json({ count: docs.length, subscribers: docs });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// DELETE /api/notify/blog/:id
app.delete("/api/notify/blog/:id", async (req, res) => {
  try {
    const doc = await BlogNotify.findByIdAndDelete(req.params.id);
    if (!doc) return res.status(404).json({ error: "Not found" });
    res.json({ success: true, message: "Deleted" });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// ─────────────────────────────────────────
// START
// ─────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n✅  Server running → http://localhost:${PORT}\n`);
  console.log("── Applications ─────────────────────────");
  console.log("  POST   /api/apply                 Submit application");
  console.log("  GET    /api/submissions            All applications");
  console.log("  GET    /api/submissions/:id        Single application");
  console.log("  DELETE /api/submissions/:id        Delete application");
  console.log("\n── Event Notifications ──────────────────");
  console.log("  POST   /api/notify/event           Sign up for event notify");
  console.log("  GET    /api/notify/event            All event sign-ups (grouped)");
  console.log("  GET    /api/notify/event/:name      Sign-ups for one event");
  console.log("  DELETE /api/notify/event/:id        Delete a sign-up");
  console.log("\n── Blog Notifications ───────────────────");
  console.log("  POST   /api/notify/blog             Subscribe to blog alerts");
  console.log("  GET    /api/notify/blog             All blog subscribers");
  console.log("  DELETE /api/notify/blog/:id         Delete subscriber\n");
});
