import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full py-12 px-6 border-t border-zinc-200 bg-white mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {/* Left Column - Logo & Socials */}
        <div className="flex flex-col items-start">
          <Image 
            src="/Bravo_1.svg" 
            alt="Bravo Rhythmic Gymnastics" 
            width={200} 
            height={60} 
            className="w-48 h-auto mb-6"
          />
          <div className="flex gap-3">
            <a 
              href="https://fb.com/bravorhythmic" 
              target="_blank" 
              rel="nofollow noreferrer" 
              className="w-8 h-8 rounded-full bg-[#525252] text-white flex items-center justify-center hover:bg-bravo-purple transition-colors"
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
              className="w-8 h-8 rounded-full bg-[#525252] text-white flex items-center justify-center hover:bg-bravo-purple transition-colors"
              aria-label="Instagram"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>

        {/* Middle Column - Contacts */}
        <div className="flex flex-col text-[14px]">
          <h4 className="font-bold text-[#525252] uppercase tracking-wide mb-4">Contacts</h4>
          <a href="mailto:info@bravorhythmic.com" className="text-black mb-1 hover:text-bravo-purple transition-colors">
            info@bravorhythmic.com
          </a>
          <a href="tel:4083849595" className="text-black mb-8 hover:text-bravo-purple transition-colors">
            (408) 384-9595
          </a>
          <div className="text-black">
            © {new Date().getFullYear()} Bravo Rhythmic Gymnastics
          </div>
        </div>

        {/* Right Column - Locations */}
        <div className="flex flex-col text-[14px] text-black">
          <h4 className="font-bold text-[#525252] uppercase tracking-wide mb-4">Locations</h4>
          <div className="mb-6 leading-relaxed">
            Bravo Redwood City<br />
            2575 E Bayshore Rd,<br />
            Redwood City, CA 94063
          </div>
          <div className="leading-relaxed">
            Bravo Santa Clara<br />
            Coming soon!
          </div>
        </div>
      </div>
    </footer>
  );
}
