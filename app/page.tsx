import { HeroSection } from "@/components/hero-section";
import { ProductsSection } from "@/components/sections/featured-products-section";
import { CategoriesSection } from "@/components/sections/categories-section";
import { AboutPreviewSection } from "@/components/sections/about-preview-section";
import { StudioPreviewSection } from "@/components/sections/studio-preview-section";
import { JournalPreviewSection } from "@/components/sections/social-proof-section";
import { ClosingCtaSection } from "@/components/sections/closing-cta-section";
import { InstagramFeedSection } from "@/components/sections/instagram-feed-section";
import { FunnyReelSection } from "@/components/sections/funny-reels";
import { siteCopy } from "@/config/siteCopy";

export default function HomePage() {
	const instagramFeed = siteCopy.instagramFeed;

	return (
		<>
			<HeroSection />
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
