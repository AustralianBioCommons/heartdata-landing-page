import SectionWrapper from "../ui/SectionWrapper";
import MaterialIcon from "../ui/MaterialIcon";

export default function Publications() {
  return (
    <SectionWrapper bg="bg-surface-alt" labelledBy="publications-heading">
      <h2
        id="publications-heading"
        className="font-headline text-2xl sm:text-3xl font-bold text-primary mb-6"
      >
        Publications
      </h2>

      <div className="bg-white border border-outline-light border-l-2 border-l-primary p-6 rounded-sm flex gap-4">
        <MaterialIcon icon="menu_book" className="text-primary text-2xl shrink-0 mt-0.5" />
        <div className="flex-1 min-w-0">
          <p className="text-sm text-on-surface leading-relaxed">
            Giles, C., Meikle, P.J. Building the Australian Cardiovascular disease Data Commons.{" "}
            <span className="italic">Nat Rev Cardiol</span>{" "}
            <span className="font-semibold">22</span>, 837 (2025).
          </p>
          <a
            href="https://doi.org/10.1038/s41569-025-01208-0"
            target="_blank"
            rel="noopener"
            className="inline-block text-primary text-sm font-medium hover:underline mt-3 break-all"
          >
            https://doi.org/10.1038/s41569-025-01208-0
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
