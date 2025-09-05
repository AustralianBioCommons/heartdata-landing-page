export default function Header({ title }: { title: string }) {
  return (
    <header className="w-full border-b bg-white/80 backdrop-blur sticky top-0 z-10">
      <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-semibold text-slate-800">{title}</h1>
        <nav className="text-sm text-slate-600">
          <a href="#" className="hover:underline">
            Home
          </a>
        </nav>
      </div>
    </header>
  );
}
