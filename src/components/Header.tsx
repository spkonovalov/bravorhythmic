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
      <div className="max-w-[1400px] mx-auto w-full h-16 px-6 flex justify-between items-center">
        
        {/* Left: Logo */}
        <Link href="/" className="focus:outline-none flex-shrink-0 z-50 flex items-center">
          <Image 
            src="/Bravo_1.svg" 
            alt="Bravo Rhythmic Gymnastics Logo" 
            width={85} 
            height={28} 
            className="w-[70px] md:w-[85px] h-auto brightness-0 invert" 
          />
        </Link>

        {/* Right: Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-x-6 text-[12px] font-semibold text-white/90 uppercase tracking-[1px]">
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

        {/* Mobile Toggle */}
        <button 
          className="xl:hidden text-white focus:outline-none z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile / Tablet Nav Dropdown */}
      {isOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-bravo-dark border-t border-white/10 shadow-lg">
          <nav className="flex flex-col py-4 px-6 gap-4 text-[13px] font-semibold text-white uppercase tracking-[1px]">
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
