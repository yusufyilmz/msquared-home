import type { Metadata } from "next";
import type { CSSProperties, ReactNode } from "react";
import "./globals.css";
import { siteCopy } from "@/config/siteCopy";
import { activeTheme } from "@/config/themes";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: siteCopy.site.metaTitle,
  description: siteCopy.site.metaDescription,
  keywords: siteCopy.site.keywords as unknown as string[],
  metadataBase: new URL(siteCopy.site.baseUrl),
  openGraph: {
    title: siteCopy.site.metaTitle,
    description: siteCopy.site.metaDescription,
    url: siteCopy.site.baseUrl,
    siteName: siteCopy.site.name,
    type: "website"
  },
  alternates: {
    canonical: siteCopy.site.baseUrl
  }
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  const theme = activeTheme;

  const style = {
    "--color-background": theme.colors.background,
    "--color-surface": theme.colors.surface,
    "--color-accent": theme.colors.accent,
    "--color-accent-soft": theme.colors.accentSoft,
    "--color-ink": theme.colors.ink,
    "--color-muted": theme.colors.muted
  } as CSSProperties;

  return (
    <html lang="en">
      <body style={style} className="min-h-screen bg-background text-ink">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
