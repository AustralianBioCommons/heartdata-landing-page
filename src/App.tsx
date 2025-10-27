import Header from "./components/Header";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      {/* Centered Header */}
      <Header
        title="Australian Cardiovascular disease Data Commons (ACDC)"
        logoSrc="images/acdc-logo.png"
      />

      {/* Main content */}
      <main className="flex-1">
        {/* HERO */}
        <section className="relative bg-[#0b2545] text-white">
          <div className="mx-auto max-w-5xl px-4 pt-6 pb-4">
            <img
              src="images/acdc-hero.png"
              alt="Find, access, and collaborate on the Australian Cardiovascular disease Data Commons"
              className="w-full max-h-[420px] object-contain rounded-2xl shadow-lg ring-1 ring-white/10 mx-auto"
            />
          </div>

          {/* Primary CTA */}
          <div className="text-center pb-10">
            <a
              href="https://commons.heartdata.baker.edu.au"
              target="_blank"
              rel="noopener"
              className="inline-block rounded-full bg-[#c80045] px-8 py-3 text-base sm:text-lg font-semibold text-white shadow-md transition hover:bg-[#a30038] focus:ring-4 focus:ring-[#c80045]/40"
            >
              Enter the ACDC Gen3 Portal
            </a>
          </div>
        </section>

        {/* INTRO */}
        <section className="mx-auto max-w-4xl px-4 py-20 text-center">
          <h2 className="text-3xl font-bold text-[#0b2545]">
            Empowering Cardiovascular Research in Australia
          </h2>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed">
            The Australian Cardiovascular disease Data Commons (ACDC) connects
            researchers, clinicians, and data custodians to share data securely
            and collaboratively under FAIR (Findable, Accessible, Interoperable,
            and Reusable) and ethical principles.
          </p>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-[#f9fafb] py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} · Baker Heart and Diabetes Institute · ACDC
        ·{" "}
        <a
          href="/policies/terms-of-use.html"
          className="underline underline-offset-4 hover:text-[#c80045]"
        >
          Terms of Use
        </a>{" "}
        ·{" "}
        <a
          href="/docs/ACDC_Privacy_Policy.pdf"
          className="underline underline-offset-4 hover:text-[#c80045]"
        >
          Privacy
        </a>
      </footer>
    </div>
  );
}
