export default function StatusBadge() {
  // Replace with real env/build info if available
  const env = import.meta.env.VITE_ENV || "test";
  const sha = (import.meta.env.VITE_BUILD_SHA || "").slice(0, 7);

  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200">
      <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-500"></span>
      Environment: {env}
      {sha ? <span className="text-slate-400">· {sha}</span> : null}
    </span>
  );
}
