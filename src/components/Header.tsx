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
  { label: "About Us", href: "https://bravorhythmic.com/about" },
  { label: "Parent Portal", href: "https://app.iclasspro.com/portal/bravo" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-bravo-dark sticky top-0 z-50 shadow-md">
      <div className="max-w-[1400px] mx-auto w-full flex flex-col items-center">
        
        {/* Top Row: Socials, Logo, Hamburger */}
        <div className="w-full relative flex justify-center items-center py-6 md:py-8 px-6">
          
          {/* Socials - Left */}
          <div className="absolute left-6 md:left-12 flex gap-3">
            <a 
              href="https://fb.com/bravorhythmic" 
              target="_blank" 
              rel="nofollow noreferrer" 
              className="w-8 h-8 rounded-full bg-white text-bravo-dark flex items-center justify-center hover:opacity-80 transition-opacity"
              aria-label="Facebook"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a 
              href="https://instagram.com/bravorhythmic" 
              target="_blank" 
              rel="nofollow noreferrer" 
              className="w-8 h-8 rounded-full bg-white text-bravo-dark flex items-center justify-center hover:opacity-80 transition-opacity"
              aria-label="Instagram"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>

          {/* Center Logo */}
          <Link href="/" className="focus:outline-none flex-shrink-0 z-50">
            <Image 
              src="/Bravo_1.svg" 
              alt="Bravo Rhythmic Gymnastics Logo" 
              width={220} 
              height={70} 
              className="w-32 md:w-[220px] h-auto brightness-0 invert" 
            />
          </Link>

          {/* Mobile Toggle - Right */}
          <button 
            className="lg:hidden absolute right-6 text-white focus:outline-none z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Bottom Row: Navigation (Desktop) */}
        <nav className="hidden lg:flex flex-wrap justify-center gap-x-8 gap-y-3 pb-8 text-[12px] font-semibold text-white/90 uppercase tracking-[1px] w-full px-6">
          {links.map((link) => {
            const isActive = link.label === "Learn";
            return (
              <a 
                key={link.label} 
                href={link.href} 
                className={`transition-colors whitespace-nowrap ${isActive ? "text-bravo-accent" : "hover:text-bravo-accent"}`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-bravo-dark border-t border-white/10 shadow-lg">
          <nav className="flex flex-col py-4 px-6 gap-4 text-[14px] font-semibold text-white uppercase tracking-[1px]">
            {links.map((link) => {
              const isActive = link.label === "Learn";
              return (
                <a 
                  key={link.label} 
                  href={link.href} 
                  className={`transition-colors py-2 ${isActive ? "text-bravo-accent" : "hover:text-bravo-accent"}`}
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
