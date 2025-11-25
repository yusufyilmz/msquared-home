"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { siteCopy } from "@/config/siteCopy";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/products", label: "Pieces" },
  { href: "/about", label: "Studio" },
  { href: "/contact", label: "Contact" }
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-30 border-b backdrop-blur-md transition-colors",
        scrolled
          ? "bg-[rgba(255,255,255,0.96)] border-[rgba(0,0,0,0.06)]"
          : "bg-[rgba(248,243,234,0.4)] border-transparent"
      )}
    >
      <div className="section-inner flex items-center justify-between py-3 md:py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(0,0,0,0.08)] bg-surface text-xs font-semibold tracking-[0.18em] uppercase">
            M²
          </div>
          <div className="flex flex-col">
            <span className="font-display text-sm uppercase tracking-[0.2em]">
              {siteCopy.site.name}
            </span>
            <span className="text-[0.65rem] uppercase tracking-[0.24em] text-muted">
              Handcrafted decor
            </span>
          </div>
        </Link>

        {/* desktop nav */}
        <nav className="hidden items-center gap-7 text-[0.7rem] uppercase tracking-[0.22em] text-muted md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-ink transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* mobile menu button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((open) => !open)}
          >
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* mobile nav dropdown */}
      {mobileOpen ? (
        <div className="border-t border-[rgba(0,0,0,0.06)] bg-[rgba(255,252,246,0.98)] md:hidden">
          <div className="section-inner flex flex-col gap-3 py-4 text-[0.8rem] uppercase tracking-[0.24em] text-muted">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-1"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
