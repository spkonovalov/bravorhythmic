"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Rhythmic Programs", href: "https://bravorhythmic.com/rhythmic-programs" },
  { label: "Schedule and Tuition", href: "https://bravorhythmic.com/schedule-and-tuition" },
  { label: "Club Policies", href: "https://bravorhythmic.com/policies" },
  { label: "Calendar", href: "https://bravorhythmic.com/calendar" },
  { label: "Camps", href: "https://bravorhythmic.com/camps" },
  { label: "FAQ", href: "https://bravorhythmic.com/faq" },
  { label: "Learn", href: "https://learn.bravorhythmic.com" },
  { label: "About us", href: "https://bravorhythmic.com/about" },
  { label: "Parent Portal", href: "https://app.iclasspro.com/portal/bravo" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-bravo-dark sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 md:py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 focus:outline-none flex-shrink-0 relative z-50">
            <Image src="/Bravo_1.svg" alt="Bravo Rhythmic Gymnastics Logo" width={32} height={32} className="h-8 w-auto brightness-0 invert" />
            <span className="text-xl font-bold tracking-tight text-white hidden sm:block">
              Bravo Rhythmic
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-4 xl:gap-6 text-[12px] xl:text-[14px] font-normal text-white uppercase tracking-[1px] items-center flex-wrap justify-end">
            {links.map((link) => {
              const isActive = link.label === "Learn";
              return (
                <a 
                  key={link.label} 
                  href={link.href} 
                  className={`transition-colors whitespace-nowrap ${isActive ? "text-bravo-accent font-semibold" : "hover:text-bravo-accent"}`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden text-white focus:outline-none relative z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-bravo-dark border-t border-white/10 shadow-lg">
          <nav className="flex flex-col py-4 px-6 gap-4 text-[14px] font-normal text-white uppercase tracking-[1px]">
            {links.map((link) => {
              const isActive = link.label === "Learn";
              return (
                <a 
                  key={link.label} 
                  href={link.href} 
                  className={`transition-colors py-2 ${isActive ? "text-bravo-accent font-semibold" : "hover:text-bravo-accent"}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
