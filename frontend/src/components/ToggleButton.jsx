export default function ToggleButton({ label, icon, variant, active, onClick }) {
  const activeStyle = variant === "yes"
    ? { background:"linear-gradient(135deg,#10B981,#059669)", boxShadow:"0 6px 20px rgba(16,185,129,0.28)", borderColor:"#059669" }
    : { background:"linear-gradient(135deg,#EF4444,#DC2626)", boxShadow:"0 6px 20px rgba(239,68,68,0.25)", borderColor:"#DC2626" };

  return (
    <button onClick={onClick}
      className={`flex items-center justify-center gap-2 py-3.5 rounded-xl border text-sm font-semibold transition-all duration-200 cursor-pointer
        ${active ? "text-white" : "border-slate-200 bg-slate-50 text-slate-500 hover:border-slate-300 hover:bg-white"}`}
      style={active ? activeStyle : {}}>
      <span style={{fontSize:18}}>{icon}</span>
      {label}
    </button>
  );
}
