function badgeClass(kind: "env" | "sha") {
  return kind === "env" ? "bg-emerald-600" : "bg-slate-700";
}

export default function StatusBadge() {
  const env = import.meta.env.VITE_ENV ?? "dev";
  const app = import.meta.env.VITE_APP_NAME ?? "App";
  const sha = (import.meta.env.VITE_BUILD_SHA ?? "dev").slice(0, 7);
  const when = new Date().toLocaleString();

  return (
    <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
      <span className={`text-white px-2 py-1 rounded ${badgeClass("env")}`}>
        {app}:{env}
      </span>
      <span className={`text-white px-2 py-1 rounded ${badgeClass("sha")}`}>
        build {sha}
      </span>
      <span className="text-slate-500">{when}</span>
    </div>
  );
}
