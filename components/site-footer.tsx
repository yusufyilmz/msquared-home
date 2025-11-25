import Link from "next/link";
import { siteCopy } from "@/config/siteCopy";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[rgba(0,0,0,0.04)] bg-surface/80">
      <div className="section-inner flex flex-col gap-3 py-8 text-[0.7rem] uppercase tracking-[0.22em] text-muted md:flex-row md:items-center md:justify-between">
        <p>
          © {year} {siteCopy.site.name}
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href={siteCopy.socialProof.instagramUrl}
            className="hover:text-ink"
          >
            Instagram
          </Link>
          <span className="text-muted/80">
            Built with Next 15 · Tailwind · Biome · shadcn-style UI
          </span>
        </div>
      </div>
    </footer>
  );
}
