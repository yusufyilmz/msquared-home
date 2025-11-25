// components/social-proof-section.tsx

import Link from "next/link";
import Image from "next/image";
import { SectionShell } from "@/components/section-shell";
import { siteCopy } from "@/config/siteCopy";

export function SocialProofSection() {
  const copy = siteCopy.socialProof;

  return (
    <SectionShell
      id="journal"
      eyebrow={copy.sectionTitle}
      heading={copy.heading}
      intro={copy.body}
    >
      <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-center">
        <div className="space-y-3 text-sm text-muted">
          <p>
            Follow{" "}
            <Link
              href={copy.instagramUrl}
              className="font-medium text-ink underline-offset-4 hover:underline"
            >
              {copy.instagramHandle}
            </Link>{" "}
            for new pieces and glimpses into the making process.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {copy.images.map((src, index) => (
            <div
              key={src}
              className="relative aspect-[4/5] overflow-hidden rounded-[1.3rem]"
            >
              <Image
                src={src}
                alt={`Instagram style preview ${index + 1}`}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 160px, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
      <p className="mt-4 text-[0.7rem] text-muted/80">
        Replace these placeholder images with stills from the Instagram feed once assets are chosen.
      </p>
    </SectionShell>
  );
}