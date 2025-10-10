type Props = {
  title: string;
  logoSrc?: string;
};

export default function Header({ title, logoSrc }: Props) {
  return (
    <header className="bg-[#0b2545] border-b border-white/10">
      <div className="mx-auto flex flex-col items-center justify-center text-center px-4 py-8">
        {logoSrc ? (
          <img
            src={logoSrc}
            alt="ACDC logo"
            className="h-16 w-auto mb-3"
            loading="eager"
          />
        ) : null}
        <h1 className="text-xl sm:text-2xl font-semibold text-white leading-tight max-w-3xl">
          {title}
        </h1>
      </div>
    </header>
  );
}
