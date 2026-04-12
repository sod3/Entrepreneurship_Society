const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// MongoDB Schema and Model
const submissionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  whatsapp: {
    type: String,
    required: true,
  },
  semester: {
    type: String,
    required: true,
  },
  interest: {
    type: String,
    required: true,
  },
  builtBefore: {
    type: Boolean,
    required: true,
  },
  whatBuilt: {
    type: String,
    default: "",
  },
  submittedAt: {
    type: Date,
    default: Date.now,
  },
}, {
  timestamps: true,
});

const Submission = mongoose.model("Submission", submissionSchema);

// MongoDB connection
mongoose.connect(process.env.MONGODB_URL)
.then(() => console.log("✅ MongoDB connected successfully"))
.catch((err) => {
  console.error("❌ MongoDB connection error:", err);
  process.exit(1);
});

// POST endpoint to submit application
app.post("/api/apply", async (req, res) => {
  try {
    const { name, whatsapp, semester, interest, builtBefore, whatBuilt } = req.body;

    // Basic validation
    if (!name || !whatsapp || !semester || !interest) {
      return res.status(400).json({ error: "Missing required fields." });
    }

    const submission = new Submission({
      name,
      whatsapp,
      semester,
      interest,
      builtBefore: !!builtBefore,
      whatBuilt: whatBuilt || "",
    });

    await submission.save();

    console.log("\n🚀 New Application Received:");
    console.log("----------------------------");
    console.log(`Name       : ${submission.name}`);
    console.log(`WhatsApp   : ${submission.whatsapp}`);
    console.log(`Semester   : ${submission.semester}`);
    console.log(`Interest   : ${submission.interest}`);
    console.log(`Built Before: ${submission.builtBefore}`);
    if (submission.whatBuilt) console.log(`What Built : ${submission.whatBuilt}`);
    console.log(`Time       : ${submission.submittedAt}`);
    console.log("----------------------------\n");

    res.status(201).json({ success: true, message: "Application received!" });
  } catch (error) {
    console.error("Error saving submission:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET endpoint to view all submissions (admin use)
app.get("/api/submissions", async (req, res) => {
  try {
    const submissions = await Submission.find().sort({ submittedAt: -1 });
    res.json({ count: submissions.length, submissions });
  } catch (error) {
    console.error("Error fetching submissions:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET endpoint to view single submission by ID
app.get("/api/submissions/:id", async (req, res) => {
  try {
    const submission = await Submission.findById(req.params.id);
    if (!submission) {
      return res.status(404).json({ error: "Submission not found" });
    }
    res.json(submission);
  } catch (error) {
    console.error("Error fetching submission:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// DELETE endpoint to remove a submission (admin use)
app.delete("/api/submissions/:id", async (req, res) => {
  try {
    const submission = await Submission.findByIdAndDelete(req.params.id);
    if (!submission) {
      return res.status(404).json({ error: "Submission not found" });
    }
    res.json({ success: true, message: "Submission deleted successfully" });
  } catch (error) {
    console.error("Error deleting submission:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`\n✅ Server running at http://localhost:${PORT}`);
  console.log(`📋 POST /api/apply       - Submit application`);
  console.log(`📊 GET  /api/submissions - View all entries`);
  console.log(`🔍 GET  /api/submissions/:id - View single entry`);
  console.log(`🗑️ DELETE /api/submissions/:id - Delete entry\n`);
});