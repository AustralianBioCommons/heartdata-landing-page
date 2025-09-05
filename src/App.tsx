import Header from "./components/Header";
import StatusBadge from "./components/StatusBadge";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header title="Heartdata" />
      <main className="flex-1">
        <section className="mx-auto max-w-5xl px-4 py-12">
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-800">Welcome 👋</h2>
            <p className="mt-2 text-slate-600">
              This is a placeholder app for heartdata.baker.edu.au. The build
              artifacts in <code>dist/</code> are ready for S3 + CloudFront.
            </p>
            <StatusBadge />
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl border p-4">
                <h3 className="font-semibold mb-1">Next steps</h3>
                <ul className="list-disc ml-5 text-slate-600 text-sm">
                  <li>
                    Edit <code>src/App.tsx</code>
                  </li>
                  <li>
                    Set env vars in <code>.env</code> or CI
                  </li>
                  <li>Push to main to trigger deploy</li>
                </ul>
              </div>
              <div className="rounded-xl border p-4">
                <h3 className="font-semibold mb-1">Config</h3>
                <ul className="text-slate-600 text-sm">
                  <li>
                    <code>VITE_APP_NAME</code>
                  </li>
                  <li>
                    <code>VITE_ENV</code>
                  </li>
                  <li>
                    <code>VITE_BUILD_SHA</code>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-6 text-center text-slate-400 text-sm">
        © {new Date().getFullYear()} — Heartdata
      </footer>
    </div>
  );
}
