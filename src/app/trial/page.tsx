import { Metadata } from "next";
import { TrialForm } from "@/components/TrialForm";
import { MapPin, Trophy, Calendar, Users, Star, Car, Image as ImageIcon } from "lucide-react";
import Image from "next/image";

import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Sign Up for a Free Gymnastics Trial Class | Bravo",
  description: "Start your child's rhythmic gymnastics journey in Redwood City. Programs for kids ages 4-10 and team. Book your 55-min trial class today!",
  path: "/trial"
});

export default function TrialPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full bg-bravo-dark text-white pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Rhythmic Gymnastics Classes in <span className="text-bravo-accent">Redwood City</span> & the Bay Area
            </h1>
            <p className="text-lg text-white/90 max-w-lg leading-relaxed">
              Join Bravo, one of Northern California's strongest rhythmic gymnastics teams. From fun recreational classes to elite competitive training, we help every gymnast reach their full potential.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bravo-accent/20 text-bravo-accent font-semibold text-sm border border-bravo-accent/30">
              <Star size={16} fill="currentColor" /> 55 Minutes Free Trial Class
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <div className="flex items-center gap-2">
                <MapPin className="text-bravo-accent" size={20} />
                <span>Redwood City & Santa Clara</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="text-bravo-accent" size={20} />
                <span>Ages 4 and up</span>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:max-w-md mx-auto lg:ml-auto">
            <TrialForm />
          </div>
        </div>
      </section>

      {/* Why Choose Bravo */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-bravo-dark mb-4">Why Choose Bravo?</h2>
            <p className="text-zinc-600 max-w-2xl mx-auto">We provide a safe, positive, and professional environment where gymnasts grow both athletically and personally.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 text-center space-y-4">
              <div className="w-12 h-12 bg-bravo-light rounded-full flex items-center justify-center mx-auto text-bravo-purple">
                <Trophy size={24} />
              </div>
              <h3 className="text-xl font-bold text-bravo-dark">All Levels Welcome</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">We offer diverse programs from beginner recreational classes to intensive competitive level training.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 text-center space-y-4">
              <div className="w-12 h-12 bg-bravo-light rounded-full flex items-center justify-center mx-auto text-bravo-purple">
                <Calendar size={24} />
              </div>
              <h3 className="text-xl font-bold text-bravo-dark">Flexible Schedule</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">We provide a highly flexible class schedule tailored to fit the busy routines of Bay Area families.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 text-center space-y-4">
              <div className="w-12 h-12 bg-bravo-light rounded-full flex items-center justify-center mx-auto text-bravo-purple">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold text-bravo-dark">Seasonal Camps</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">Keep your gymnast active and improving year-round with our fun and engaging seasonal camps.</p>
            </div>
          </div>
        </div>
      </section>


      {/* Expert Coaches */}
      <section className="py-24 bg-white border-y border-zinc-100">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-bravo-dark mb-6">Expert Coaches</h2>
            <p className="text-lg text-zinc-600 max-w-3xl mx-auto mb-8">
              Our world-class coaching team brings decades of experience competing and coaching at the highest national and international levels.
            </p>
            <div className="bg-bravo-light/30 border border-bravo-accent/20 rounded-2xl p-6 md:p-8 max-w-4xl mx-auto">
              <h3 className="font-bold text-lg mb-2 text-bravo-dark">Certified Professionals</h3>
              <p className="text-zinc-700 leading-relaxed">
                Our coaching team is certified by <strong>USA Gymnastics</strong> in Instruction, Safety & Risk Management, and SafeSport, and is <strong>AHA-certified</strong> in Pediatric First Aid, CPR, AED, and Asthma Care. We pride ourselves on having award-winning professionals, including multiple-time <em>Region 1 Coach of the Year</em> recipients, ensuring your gymnast receives the safest and highest quality training.
              </p>
            </div>
          </div>
          
          {/* Coach Carousel */}
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-8 px-4 pb-8 w-full" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
            {[
              { name: "Olga Kofman", role: "Head Coach", src: "olga.jpg" },
              { name: "Katya Konovalova", role: "Santa Clara Head Coach", src: "katya2.jpg" },
              { name: "Anastasiya Kornyenko", role: "Coach", src: "anastasiya.jpg" },
              { name: "Marina Kozlova", role: "Coach", src: "marina_kozlova.png" },
              { name: "Aksana Laziuk", role: "Coach & Ballet", src: "aksana.jpg" },
              { name: "Belén Pérez", role: "Coach", src: "belen.jpeg" },
              { name: "Anastasiia Diakova", role: "Coach", src: "anastasiia_diakova.jpg" },
              { name: "Anfisa Kupriyanova", role: "Operations", src: "anfisa.jpg" },
              { name: "Kimi Iwasaki", role: "Junior Coach", src: "kimi.jpg" },
              { name: "Alina Krayzbukh", role: "Junior Coach", src: "alina.jpg" },
              { name: "Leah Terry", role: "Junior Coach", src: "leah.png" }
            ].map((coach, i) => (
              <div key={i} className="flex-none w-[260px] snap-center flex flex-col items-center text-center">
                <div className="w-52 h-52 rounded-full overflow-hidden relative mb-5 shadow-lg border-4 border-white bg-zinc-100">
                  <Image src={`/images/coaches/${coach.src}`} alt={coach.name} fill className="object-cover" />
                </div>
                <h4 className="font-bold text-xl text-bravo-dark mb-1">{coach.name}</h4>
                <p className="text-bravo-purple font-semibold text-sm">{coach.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Placeholder */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bravo-light text-bravo-purple font-semibold text-sm mb-6">
            <Trophy size={16} /> Elite Competition
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-bravo-dark mb-8">Bravo Achievements: 2025-2026 Season</h2>
          <div className="w-full max-w-4xl mx-auto bg-zinc-50 border-2 border-dashed border-zinc-200 rounded-2xl p-12">
            <p className="text-zinc-500 text-lg">
              [Placeholder: specific achievements, medals, and high-level competition participation for the 2025-2026 season will be added here.]
            </p>
          </div>
        </div>
      </section>


      {/* Real Reviews */}
      <section className="py-24 bg-zinc-50 border-t border-zinc-100 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 font-semibold text-sm mb-6 border border-yellow-200">
            <Star size={16} fill="currentColor" /> 5-Star Rated
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-bravo-dark mb-4">What Our Families Say</h2>
          <p className="text-zinc-600">See why parents and gymnasts love Bravo Rhythmic Gymnastics.</p>
        </div>
        
        {/* Reviews Carousel */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 md:px-12 pb-8 w-full" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((num) => (
            <div key={num} className="flex-none w-[85vw] sm:w-[320px] snap-center aspect-square relative rounded-2xl overflow-hidden shadow-md border border-zinc-200 bg-white">
              <Image 
                src={`/reviews/review${num}.png`} 
                alt={`Bravo Gymnastics Review ${num}`}
                fill 
                className="object-contain p-2" 
                sizes="(max-width: 640px) 85vw, 320px"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Commute and Locations */}
      <section className="py-20 bg-zinc-900 text-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Conveniently Located in the Bay Area</h2>
                <p className="text-zinc-400 text-lg leading-relaxed">
                  Easily accessible from major highways, getting to practice has never been easier. We are proud to serve families across the Peninsula and South Bay.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                  <h3 className="text-xl font-bold text-bravo-accent mb-2">Redwood City</h3>
                  <p className="text-zinc-300 text-sm mb-4">Main Facility</p>
                  <p className="text-zinc-400 text-sm">2575 E Bayshore Rd,<br/>Redwood City, CA 94063</p>
                </div>
                <div className="bg-white/5 p-6 rounded-xl border border-white/10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-bravo-purple text-xs font-bold px-3 py-1 rounded-bl-lg">NEW</div>
                  <h3 className="text-xl font-bold text-bravo-accent mb-2">Santa Clara</h3>
                  <p className="text-zinc-300 text-sm mb-4">Opening Soon!</p>
                  <p className="text-zinc-400 text-sm">Join us for the grand opening and secure your spot in our newest facility.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 text-bravo-dark shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <Car className="text-bravo-purple" size={28} />
                <h3 className="text-2xl font-bold">Directions & Commute</h3>
              </div>
              <p className="text-zinc-600 mb-6">Get quick Google Maps directions to our Redwood City location from your city:</p>
              
              <div className="flex flex-col gap-3">
                <a href="https://www.google.com/maps/dir/San+Mateo,+CA/2575+E+Bayshore+Rd,+Redwood+City,+CA+94063" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 rounded-lg bg-zinc-50 hover:bg-bravo-light/50 transition-colors border border-zinc-100 group">
                  <span className="font-medium">From San Mateo</span>
                  <span className="text-sm text-bravo-purple font-semibold group-hover:underline">Get Directions →</span>
                </a>
                <a href="https://www.google.com/maps/dir/Palo+Alto,+CA/2575+E+Bayshore+Rd,+Redwood+City,+CA+94063" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 rounded-lg bg-zinc-50 hover:bg-bravo-light/50 transition-colors border border-zinc-100 group">
                  <span className="font-medium">From Palo Alto</span>
                  <span className="text-sm text-bravo-purple font-semibold group-hover:underline">Get Directions →</span>
                </a>
                <a href="https://www.google.com/maps/dir/Cupertino,+CA/2575+E+Bayshore+Rd,+Redwood+City,+CA+94063" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 rounded-lg bg-zinc-50 hover:bg-bravo-light/50 transition-colors border border-zinc-100 group">
                  <span className="font-medium">From Cupertino</span>
                  <span className="text-sm text-bravo-purple font-semibold group-hover:underline">Get Directions →</span>
                </a>
                <a href="https://www.google.com/maps/dir/Santa+Clara,+CA/2575+E+Bayshore+Rd,+Redwood+City,+CA+94063" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 rounded-lg bg-zinc-50 hover:bg-bravo-light/50 transition-colors border border-zinc-100 group">
                  <span className="font-medium">From Santa Clara</span>
                  <span className="text-sm text-bravo-purple font-semibold group-hover:underline">Get Directions →</span>
                </a>
                <a href="https://www.google.com/maps/dir/San+Jose,+CA/2575+E+Bayshore+Rd,+Redwood+City,+CA+94063" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 rounded-lg bg-zinc-50 hover:bg-bravo-light/50 transition-colors border border-zinc-100 group">
                  <span className="font-medium">From San Jose</span>
                  <span className="text-sm text-bravo-purple font-semibold group-hover:underline">Get Directions →</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Gallery / Life at Bravo Carousel */}
      <section className="py-20 bg-zinc-50 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 mb-8 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-bravo-dark mb-4">Life at Bravo</h2>
            <p className="text-zinc-600 text-lg">A glimpse into our daily training and vibrant competitions.</p>
          </div>
        </div>
        
        {/* CSS Scroll-Snap Carousel */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 md:px-12 pb-8 pt-4 w-full" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          {/* Hide webkit scrollbar via a global style or inline style injection */}
          <style dangerouslySetInnerHTML={{__html: `
            .flex::-webkit-scrollbar { display: none; }
          `}} />
          
          {[
            "Competition-photo-11.jpg", 
            "Competition-photo-13.jpg", 
            "Competition-photo-14.JPG", 
            "Competition-photo-4.jpg",
            "life-1.jpg",
            "life-2.jpg",
            "life-3.jpg",
            "life-4.jpg",
            "life-5.jpg",
            "life-6.jpg",
            "life-7.jpg",
            "life-8.jpg"
          ].map((src, i) => (
            <div key={i} className="flex-none w-[85vw] md:w-[60vw] lg:w-[45vw] max-w-[600px] snap-center aspect-[4/3] relative rounded-2xl overflow-hidden shadow-md">
              <Image 
                src={`/images/${src}`} 
                alt={`Bravo Gymnastics Photo ${i+1}`}
                fill 
                className="object-cover hover:scale-105 transition-transform duration-700 ease-out" 
              />
            </div>
          ))}
        </div>
      </section>
      {/* Bottom CTA */}
      <section className="py-20 bg-bravo-purple text-white text-center">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start?</h2>
          <p className="text-lg text-white/90 mb-8">
            Don't miss the opportunity to join our rhythmic gymnastics family. Spots for trial classes fill up quickly!
          </p>
          <a href="#trial-form" className="inline-block bg-white text-bravo-purple font-bold rounded-full py-4 px-8 text-lg hover:bg-zinc-100 transition-colors shadow-lg">
            Sign up for a Trial Class Now
          </a>
        </div>
      </section>

    </div>
  );
}
