import re

with open("src/app/trial/page.tsx", "r") as f:
    content = f.read()

# Remove the Expert Coaches tile from the grid
grid_tile = """
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 text-center space-y-4">
              <div className="w-12 h-12 bg-bravo-light rounded-full flex items-center justify-center mx-auto text-bravo-purple">
                <Star size={24} />
              </div>
              <h3 className="text-xl font-bold text-bravo-dark">Expert Coaches</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">Our experienced coaches have competed and coached at the absolute top levels in both the United States and Russia.</p>
            </div>
"""

content = content.replace(grid_tile.strip(), "")

# Change lg:grid-cols-4 to lg:grid-cols-3
content = content.replace("lg:grid-cols-4 gap-8", "lg:grid-cols-3 gap-8")


expert_coaches_section = """
      {/* Expert Coaches */}
      <section className="py-24 bg-white border-y border-zinc-100">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-bravo-dark mb-6">Expert Coaches</h2>
            <p className="text-lg text-zinc-600 max-w-3xl mx-auto mb-8">
              Our experienced coaches have competed and coached at the absolute top levels in both the United States and Russia.
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
              { name: "Olga Kofman", role: "Director & Coach", src: "olga.jpg" },
              { name: "Marina Ebrahimi", role: "Coach & Ballet Instructor", src: "marina.jpg" },
              { name: "Katya Konovalova", role: "Coach", src: "katya.jpg" },
              { name: "Anastasiya Kornyenko", role: "Coach", src: "anastasiya.jpg" },
              { name: "Anfisa Kupriyanova", role: "Coach", src: "anfisa.jpg" },
              { name: "Dasha", role: "Coach", src: "dasha.jpg" }
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
"""

# Insert right after "Why Choose Bravo" section
content = content.replace("</section>\n\n      {/* Achievements Placeholder */}", "</section>\n\n" + expert_coaches_section + "\n      {/* Achievements Placeholder */}")

with open("src/app/trial/page.tsx", "w") as f:
    f.write(content)
