export type ThemeId =
	| "cozyMinimal"
	| "warmLuxury"
	| "earthyArtisan"
	| "scandinavianClean";

export type ThemeDefinition = {
	id: ThemeId;
	label: string;
	description: string;
	colors: {
		background: string;
		surface: string;
		accent: string;
		accentSoft: string;
		ink: string;
		muted: string;
	};
};

export const themes: Record<ThemeId, ThemeDefinition> = {
	cozyMinimal: {
		id: "cozyMinimal",
		label: "Cozy minimal",
		description:
			"Soft beige, warm neutrals, and rounded shapes. Calm, airy, very Instagram friendly.",
		colors: {
			background: "#f5efe9",
			surface: "#fdf9f4",
			accent: "#c97a53",
			accentSoft: "#f1c7aa",
			ink: "#2f241f",
			muted: "#7c6a61",
		},
	},
	warmLuxury: {
		id: "warmLuxury",
		label: "Warm luxury",
		description:
			"Cream and champagne tones with a rich brown accent. Feels hotel-like and elevated.",
		colors: {
			background: "#f8f3ea",
			surface: "#fffcf6",
			accent: "#b8905c",
			accentSoft: "#e8cfaa",
			ink: "#2a1d14",
			muted: "#8a7563",
		},
	},
	earthyArtisan: {
		id: "earthyArtisan",
		label: "Earthy artisan",
		description:
			"Terracotta, clay, and warm stone. Feels handcrafted, textured, and grounded.",
		colors: {
			background: "#f4ece5",
			surface: "#fdf8f3",
			accent: "#b15c3b",
			accentSoft: "#e5b197",
			ink: "#2d1c15",
			muted: "#816055",
		},
	},
	scandinavianClean: {
		id: "scandinavianClean",
		label: "Scandinavian clean",
		description:
			"Crisp whites, soft grey, and a muted sand accent. Simple, bright, and spacious.",
		colors: {
			background: "#f6f7f9",
			surface: "#ffffff",
			accent: "#c0a27a",
			accentSoft: "#e6d4b4",
			ink: "#1f232b",
			muted: "#7a808c",
		},
	},
};

export const activeThemeId: ThemeId = "warmLuxury";

export const activeTheme = themes[activeThemeId];
