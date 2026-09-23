import re

with open("src/app/trial/page.tsx", "r") as f:
    content = f.read()

# Replace the whole Reviews Placeholder section
old_reviews = """
      {/* Reviews Placeholder */}
      <section className="py-20 bg-zinc-50 border-t border-zinc-100">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-bravo-dark mb-4">What Our Families Say</h2>
          <p className="text-zinc-600 mb-12">See why parents and gymnasts love Bravo Rhythmic Gymnastics.</p>
          
          {/* Replace this div with actual images/screenshots when ready */}
          <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border-2 border-dashed border-zinc-200 rounded-2xl h-64 flex flex-col items-center justify-center text-zinc-400">
              <Star size={32} className="mb-2" />
              <p>[ Google Review Screenshot ]</p>
            </div>
            <div className="bg-white border-2 border-dashed border-zinc-200 rounded-2xl h-64 flex flex-col items-center justify-center text-zinc-400">
              <Star size={32} className="mb-2" />
              <p>[ Yelp Review Screenshot ]</p>
            </div>
          </div>
        </div>
      </section>
"""

new_reviews = """
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
"""

content = content.replace(old_reviews.strip(), new_reviews.strip())

with open("src/app/trial/page.tsx", "w") as f:
    f.write(content)
