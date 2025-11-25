import { HeroSection as FirstPage } from "@/components/hero-section";
import { ProductsSection } from "@/components/featured-products-section";
import { CategoriesSection } from "@/components/categories-section";
import { AboutPreviewSection } from "@/components/about-preview-section";
import { StudioPreviewSection } from "@/components/studio-preview-section";
import { JournalPreviewSection } from "@/components/social-proof-section";
import { ClosingCtaSection } from "@/components/closing-cta-section";
import { HeroSection } from "@/components/hero-section-2";
import { InstagramFeedSection } from "@/components/instagram-feed-section";
import { siteCopy } from "@/config/siteCopy";
import { FunnyReelSection } from "@/components/funny-reels";

export default function HomePage() {
	const instagramFeed = siteCopy.instagramFeed;

	return (
		<>
			{/* <HeroSection /> */}
			<FirstPage />
			<ProductsSection />
			<CategoriesSection />
			<AboutPreviewSection />
			<InstagramFeedSection
				title={instagramFeed.sectionTitle}
				intro={instagramFeed.heading}
				instagramHandle={instagramFeed.instagramHandle}
				instagramUrl={instagramFeed.instagramUrl}
				postUrls={instagramFeed.posts}
				maxPosts={4}
			/>
			<StudioPreviewSection />
			<FunnyReelSection />
			<JournalPreviewSection />
			<ClosingCtaSection />
		</>
	);
}
