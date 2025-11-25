import { HeroSection as FirstPage } from "@/components/hero-section";
import { FeaturedProductsSection } from "@/components/featured-products-section";
import { CategoriesSection } from "@/components/categories-section";
import { AboutPreviewSection } from "@/components/about-preview-section";
import { StudioPreviewSection } from "@/components/studio-preview-section";
import { SocialProofSection } from "@/components/social-proof-section";
import { ClosingCtaSection } from "@/components/closing-cta-section";
import { HeroSection } from "@/components/hero-section-2";

export default function HomePage() {
  return (
    <>
      {/* <HeroSection /> */}
      <FirstPage />

      <FeaturedProductsSection />
      <CategoriesSection />
      <AboutPreviewSection />
      <StudioPreviewSection />
      <SocialProofSection />
      <ClosingCtaSection />
    </>
  );
}
