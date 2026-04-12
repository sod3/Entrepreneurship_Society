import { motion } from "framer-motion";

export default function SuccessScreen() {
  return (
    <motion.div
      className="bg-white rounded-2xl border text-center py-16 px-8"
      style={{borderColor:"#6EE7B7",boxShadow:"0 8px 40px rgba(16,185,129,0.12)"}}
      initial={{opacity:0,scale:.88}} animate={{opacity:1,scale:1}}
      transition={{duration:.5,type:"spring",bounce:.35}}>
      <motion.div
        className="mx-auto mb-5 flex items-center justify-center rounded-full"
        style={{width:80,height:80,background:"linear-gradient(135deg,#ECFDF5,#D1FAE5)",border:"2px solid #6EE7B7",fontSize:34}}
        animate={{scale:[1,1.15,1]}} transition={{delay:.4,duration:.5}}>
        🚀
      </motion.div>
      <h2 style={{fontFamily:"'Clash Display',sans-serif",fontSize:28,fontWeight:700,color:"#065F46",marginBottom:8}}>
        You're in!
      </h2>
      <p style={{color:"#059669",fontWeight:600,fontSize:15,marginBottom:8}}>We'll contact you soon.</p>
      <p className="text-slate-500 text-sm max-w-xs mx-auto leading-relaxed">
        Thanks for applying to Gutech Entrepreneurship Society. Keep building - big things are coming your way.
      </p>
      <div className="inline-block mt-5 px-4 py-2 rounded-full text-xs font-semibold"
        style={{background:"#ECFDF5",color:"#065F46",border:"1px solid #A7F3D0"}}>
        Application Received ✓
      </div>
    </motion.div>
  );
}
