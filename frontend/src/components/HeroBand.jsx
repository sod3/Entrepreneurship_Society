export default function HeroBand() {
  return (
    <div className="relative overflow-hidden rounded-b-[40px]"
      style={{background:"linear-gradient(135deg,#0A0F1E 0%,#1a1f3a 40%,#0c1a3a 100%)",padding:"48px 40px 80px"}}>

      {/* decorative blobs */}
      <div className="absolute top-0 right-0 pointer-events-none" style={{width:500,height:500,background:"radial-gradient(circle,rgba(37,99,235,0.22) 0%,transparent 70%)",transform:"translate(30%,-30%)"}} />
      <div className="absolute bottom-0 left-0 pointer-events-none" style={{width:300,height:300,background:"radial-gradient(circle,rgba(245,158,11,0.12) 0%,transparent 70%)",transform:"translate(-30%,30%)"}} />

      {/* dot grid */}
      <div className="absolute inset-0 pointer-events-none" style={{backgroundImage:"radial-gradient(rgba(255,255,255,0.055) 1px,transparent 1px)",backgroundSize:"28px 28px"}} />

      <div className="relative z-10">
        {/* badge */}
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border" style={{background:"rgba(255,255,255,0.07)",borderColor:"rgba(255,255,255,0.14)"}}>
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" style={{boxShadow:"0 0 8px #F59E0B"}} />
          <span className="text-xs font-medium" style={{color:"rgba(255,255,255,0.82)",letterSpacing:".04em"}}>Applications Open · Spring 2025</span>
        </div>

        {/* headline */}
        <h1 style={{fontFamily:"'Clash Display',sans-serif",fontSize:"clamp(2.2rem,5.5vw,3.4rem)",fontWeight:700,lineHeight:1.08,letterSpacing:"-0.03em",color:"#fff",marginBottom:16}}>
          Build the<br />next{" "}
          <span style={{background:"linear-gradient(90deg,#60A5FA,#93C5FD)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>big thing</span>
          <br />from campus.
        </h1>

        <p className="mb-8" style={{fontSize:15,color:"rgba(255,255,255,0.52)",maxWidth:420,lineHeight:1.75}}>
          Gutech Entrepreneurship Society is building a startup factory inside our university. Apply in under 2 minutes.
        </p>

        {/* stats */}
        <div className="flex gap-7 flex-wrap">
          {[["120+","Members"],["18","Projects Launched"],["6","Startups Active"]].map(([n,l])=>(
            <div key={l} className="flex flex-col gap-0.5">
              <span style={{fontFamily:"'Clash Display',sans-serif",fontSize:22,fontWeight:600,color:"#fff"}}>{n}</span>
              <span style={{fontSize:11,color:"rgba(255,255,255,0.38)",letterSpacing:".07em",textTransform:"uppercase"}}>{l}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
