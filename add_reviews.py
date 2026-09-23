import re

with open("src/app/trial/page.tsx", "r") as f:
    content = f.read()

# Fix Katya image cache issue
content = content.replace('"katya.jpg"', '"katya2.jpg"')

# Add Reviews section
reviews_section = """
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

# Insert Reviews section before Commute and Locations
content = content.replace("      {/* Commute and Locations */}", reviews_section + "\n      {/* Commute and Locations */}")

with open("src/app/trial/page.tsx", "w") as f:
    f.write(content)
