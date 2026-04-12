export default function InterestCard({ label, icon, active, onClick }) {
  return (
    <button onClick={onClick}
      className={`flex flex-col items-center gap-1.5 py-3 px-2 rounded-xl border text-xs font-semibold text-center transition-all duration-200 cursor-pointer leading-tight
        ${active
          ? "border-blue-600 text-white -translate-y-0.5"
          : "border-slate-200 bg-slate-50 text-slate-500 hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50 hover:-translate-y-0.5 hover:shadow-md"
        }`}
      style={active ? {background:"linear-gradient(135deg,#2563EB,#1D4ED8)",boxShadow:"0 6px 20px rgba(37,99,235,0.32)"} : {}}>
      <span style={{fontSize:22}}>{icon}</span>
      <span>{label}</span>
    </button>
  );
}
