export default function ProgressBar({ score }) {
  const steps = [20, 40, 60, 80, 100];
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-4" style={{boxShadow:"0 8px 32px rgba(10,15,30,0.1)"}}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Application Progress</span>
        <span className="text-xs font-bold text-blue-600">{Math.round(score)}%</span>
      </div>
      <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden mb-2.5">
        <div className="h-full rounded-full transition-all duration-500 ease-out"
          style={{width:`${score}%`,background:"linear-gradient(90deg,#2563EB,#60A5FA)"}} />
      </div>
      <div className="flex gap-1.5">
        {steps.map(s=>(
          <div key={s} className="flex-1 h-1 rounded-full transition-colors duration-300"
            style={{background: score >= s ? "#2563EB" : "#EEF1FA"}} />
        ))}
      </div>
    </div>
  );
}
