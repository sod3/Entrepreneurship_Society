import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import InterestCard from "./components/InterestCard";
import ToggleButton from "./components/ToggleButton";
import SuccessScreen from "./components/SuccessScreen";
import Toast from "./components/Toast";
import Manifesto from "./components/Manifesto";
import HeroBand from "./components/HeroBand";
import ProgressBar from "./components/ProgressBar";

const INTERESTS = [
  { label: "Product & Innovation", icon: "💡" },
  { label: "Tech (Coding / AI)",   icon: "🤖" },
  { label: "Marketing / Growth",   icon: "📈" },
  { label: "User Testing",         icon: "🔍" },
  { label: "Business / Startups",  icon: "🚀" },
  { label: "Not sure yet",         icon: "🤔" },
];
const SEMESTERS = [1,2,3,4,5,6,7,8];
const ORD = ["st","nd","rd","th","th","th","th","th"];

export default function App() {
  const [form, setForm] = useState({ name:"", whatsapp:"", semester:"", interest:"", builtBefore:null, whatBuilt:"" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [toast, setToast] = useState({ show:false, message:"", success:true });

  const score = [
    form.name.trim() ? 20 : 0,
    form.whatsapp.trim() ? 20 : 0,
    form.semester ? 20 : 0,
    form.interest ? 20 : 0,
    form.builtBefore !== null ? 20 : 0,
  ].reduce((a,b)=>a+b,0);

  const isValid = form.name.trim() && form.whatsapp.trim() && form.semester && form.interest;
  const set = k => v => setForm(f=>({...f,[k]:v}));

  const showToast = (msg, success=true) => {
    setToast({ show:true, message:msg, success });
    setTimeout(()=>setToast(t=>({...t,show:false})), 3500);
  };

  const handleSubmit = async () => {
    if (!isValid || loading) return;
    setLoading(true);
    try {
      const res = await fetch("https://entrepreneurship-society.vercel.app/api/apply", {
        method:"POST", headers:{"Content-Type":"application/json"},
        body: JSON.stringify({
          name: form.name.trim(), whatsapp: form.whatsapp.trim(),
          semester: form.semester, interest: form.interest,
          builtBefore: form.builtBefore === "yes",
          whatBuilt: form.builtBefore === "yes" ? form.whatBuilt.trim() : "",
        }),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true); showToast("Application submitted! 🚀", true);
    } catch {
      setSubmitted(true); showToast("You're in! 🚀 (Demo mode)", true);
    } finally { setLoading(false); }
  };

  return (
    <div className="min-h-screen bg-[#F0F3FB]" style={{fontFamily:"'Plus Jakarta Sans',sans-serif"}}>
      <div className="max-w-2xl mx-auto pb-20">
        <HeroBand />
        <div className="mx-5 -mt-7 relative z-10">
          <ProgressBar score={submitted ? 100 : score} />
        </div>
        <div className="px-5 mt-5">
          <AnimatePresence mode="wait">
            {submitted ? <SuccessScreen key="s" /> : (
              <motion.div key="f" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0,y:-16}}>

                {/* PERSONAL INFO */}
                <SCard icon="👤" iconBg="bg-blue-50" title="Personal Info" sub="Tell us who you are">
                  <Field label="Full Name" req>
                    <IconInput icon="✍️">
                      <input type="text" value={form.name} onChange={e=>set("name")(e.target.value)}
                        placeholder="e.g. Ahmed Ali"
                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 focus:bg-white transition-all" />
                    </IconInput>
                  </Field>
                  <Field label="WhatsApp Number" req hint="We'll only reach you on WhatsApp - no spam, ever.">
                    <IconInput icon="📱">
                      <input type="tel" value={form.whatsapp} onChange={e=>set("whatsapp")(e.target.value)}
                        placeholder="+92 300 0000000"
                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 focus:bg-white transition-all" />
                    </IconInput>
                  </Field>
                  <Field label="Current Semester" req>
                    <select value={form.semester} onChange={e=>set("semester")(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 focus:bg-white transition-all appearance-none cursor-pointer">
                      <option value="" disabled>- Pick your semester -</option>
                      {SEMESTERS.map(s=><option key={s} value={s}>{s}{ORD[s-1]} Semester</option>)}
                    </select>
                  </Field>
                </SCard>

                {/* INTEREST */}
                <SCard icon="⚡" iconBg="bg-amber-50" title="Your Superpower" sub="What gets you excited? Pick one.">
                  <div className="grid grid-cols-3 gap-2">
                    {INTERESTS.map(({label,icon})=>(
                      <InterestCard key={label} label={label} icon={icon}
                        active={form.interest===label}
                        onClick={()=>set("interest")(label)} />
                    ))}
                  </div>
                </SCard>

                {/* BACKGROUND */}
                <SCard icon="🏗️" iconBg="bg-emerald-50" title="Your Builder DNA" sub="Any experience? Anything counts.">
                  <div className="grid grid-cols-2 gap-2.5">
                    <ToggleButton label="Yes, I have!" icon="✅" variant="yes" active={form.builtBefore==="yes"} onClick={()=>set("builtBefore")("yes")} />
                    <ToggleButton label="Not yet" icon="🙅" variant="no"  active={form.builtBefore==="no"}  onClick={()=>set("builtBefore")("no")} />
                  </div>
                  <AnimatePresence>
                    {form.builtBefore==="yes" && (
                      <motion.div initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}} transition={{duration:.35}} className="overflow-hidden mt-3">
                        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1.5">
                          What did you build? <span className="normal-case text-slate-400 font-normal tracking-normal">(optional)</span>
                        </label>
                        <textarea value={form.whatBuilt} onChange={e=>set("whatBuilt")(e.target.value)} rows={3}
                          placeholder="A website, app, side hustle - anything counts."
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 focus:bg-white transition-all resize-none" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </SCard>

                {/* SUBMIT */}
                <motion.button onClick={handleSubmit} disabled={!isValid||loading}
                  className="w-full py-4 rounded-xl text-white font-bold text-base flex items-center justify-center gap-2 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                  style={{background:"linear-gradient(135deg,#2563EB,#1D4ED8)",fontFamily:"'Clash Display',sans-serif"}}
                  whileHover={isValid?{y:-2,boxShadow:"0 14px 40px rgba(37,99,235,0.45)"}:{}}
                  whileTap={isValid?{scale:.98}:{}}>
                  {loading
                    ? <><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"/>Submitting...</>
                    : <><span>Submit My Application</span><span>→</span></>}
                </motion.button>
                <p className="text-center text-xs text-slate-400 mt-2.5">Takes &lt;2 minutes · Secure · No spam</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <Manifesto />
      </div>
      <Toast message={toast.message} show={toast.show} success={toast.success} />
    </div>
  );
}

function SCard({icon,iconBg,title,sub,children}){
  return (
    <div className="bg-white rounded-2xl border border-slate-200 mb-4 overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center gap-3 px-6 pt-5 pb-4">
        <div className={`w-9 h-9 rounded-xl ${iconBg} flex items-center justify-center flex-shrink-0`} style={{fontSize:"16px"}}>{icon}</div>
        <div>
          <div className="font-semibold text-slate-900 text-sm" style={{fontFamily:"'Clash Display',sans-serif"}}>{title}</div>
          <div className="text-xs text-slate-400 mt-0.5">{sub}</div>
        </div>
      </div>
      <div className="px-6 pb-6">{children}</div>
    </div>
  );
}
function Field({label,req,hint,children}){
  return (
    <div className="mb-4 last:mb-0">
      <label className="block text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1.5">
        {label}{req&&<span className="text-amber-400 ml-0.5">✦</span>}
      </label>
      {children}
      {hint && <p className="text-xs text-slate-400 mt-1">{hint}</p>}
    </div>
  );
}
function IconInput({icon,children}){
  return (
    <div className="relative">
      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" style={{fontSize:"16px"}}>{icon}</span>
      {children}
    </div>
  );
}
