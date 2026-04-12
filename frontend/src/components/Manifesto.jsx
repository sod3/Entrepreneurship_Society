import { motion } from "framer-motion";

export default function Manifesto() {
  return (
    <motion.div className="mx-5 mt-6 relative overflow-hidden rounded-[28px] p-11"
      style={{background:"linear-gradient(145deg,#060B18 0%,#0F1B3D 50%,#091428 100%)"}}
      initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{delay:.3,duration:.6}}>

      {/* blobs */}
      <div className="absolute top-0 right-0 pointer-events-none rounded-full" style={{width:320,height:320,background:"radial-gradient(circle,rgba(37,99,235,0.2) 0%,transparent 70%)",transform:"translate(30%,-30%)"}} />
      <div className="absolute bottom-0 left-0 pointer-events-none rounded-full" style={{width:240,height:240,background:"radial-gradient(circle,rgba(245,158,11,0.15) 0%,transparent 70%)",transform:"translate(-30%,30%)"}} />

      {/* grid */}
      <div className="absolute inset-0 pointer-events-none" style={{backgroundImage:"linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)",backgroundSize:"40px 40px"}} />

      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 text-xs font-bold uppercase tracking-widest"
          style={{background:"rgba(245,158,11,0.15)",border:"1px solid rgba(245,158,11,0.3)",color:"#FCD34D"}}>
          ★ Our Mission
        </div>

        <h2 className="mb-5" style={{fontFamily:"'Clash Display',sans-serif",fontSize:"clamp(1.6rem,4vw,2.4rem)",fontWeight:700,lineHeight:1.15,color:"#fff",letterSpacing:"-.02em"}}>
          Not Just a Society.<br />
          <span style={{background:"linear-gradient(90deg,#F59E0B,#FBBF24)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>
            A Startup Factory.
          </span>
        </h2>

        {[
          <>Our goal is to build a <strong style={{color:"rgba(255,255,255,0.85)"}}>Silicon Valley-like ecosystem</strong> inside our university. Here, everyone helps each other grow.</>,
          <>You won't just attend events - you will <strong style={{color:"rgba(255,255,255,0.85)"}}>build real products</strong>, find teammates, and <strong style={{color:"rgba(255,255,255,0.85)"}}>launch with real users.</strong></>,
          <>In just a few months, you can go from:</>,
        ].map((p,i)=>(
          <p key={i} className="mb-3.5" style={{color:"rgba(255,255,255,0.5)",fontSize:14,lineHeight:1.85}}>{p}</p>
        ))}

        <div className="flex items-center gap-3 my-5 flex-wrap">
          {[["Learner","rgba(37,99,235,0.2)","#93C5FD","rgba(37,99,235,0.35)"],
            ["Builder","rgba(245,158,11,0.2)","#FCD34D","rgba(245,158,11,0.35)"],
            ["Founder","rgba(16,185,129,0.2)","#6EE7B7","rgba(16,185,129,0.35)"]].map(([lbl,bg,clr,bdr],i)=>(
            <div key={lbl} className="flex items-center gap-3">
              {i>0 && <span style={{color:"rgba(255,255,255,0.2)",fontSize:20}}>→</span>}
              <span className="px-4 py-2 rounded-full text-xs font-bold" style={{fontFamily:"'Clash Display',sans-serif",background:bg,color:clr,border:`1px solid ${bdr}`}}>{lbl}</span>
            </div>
          ))}
        </div>

        <p className="mb-6" style={{color:"rgba(255,255,255,0.5)",fontSize:14,lineHeight:1.85}}>
          And start earning from something <strong style={{color:"rgba(255,255,255,0.85)"}}>you created</strong>. If you're serious about building - <strong style={{color:"rgba(255,255,255,0.85)"}}>you're in the right place.</strong>
        </p>

        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold"
          style={{background:"rgba(255,255,255,0.08)",border:"1px solid rgba(255,255,255,0.12)",color:"#fff"}}>
          🎯 Applications close soon - don't miss out
        </div>
      </div>
    </motion.div>
  );
}
