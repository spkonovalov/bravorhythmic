import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CtaBlock() {
  return (
    <div className="w-full bg-bravo-purple rounded-2xl p-8 md:p-12 text-center text-white shadow-md relative overflow-hidden my-16">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white opacity-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 rounded-full bg-bravo-dark opacity-20 pointer-events-none"></div>
      
      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join Us?</h3>
        <p className="text-white/90 text-lg mb-8">
          Give your child the gift of rhythmic gymnastics. Spots are filling up fast for the upcoming season.
        </p>
        <a 
          href="https://bravorhythmic.com/schedulerwc"
          className="inline-flex items-center justify-center bg-white text-bravo-purple hover:bg-zinc-100 font-bold text-lg px-8 py-4 rounded-full transition-transform hover:scale-105"
        >
          Enroll for the new season 2026-27
          <ArrowRight className="ml-2 w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
