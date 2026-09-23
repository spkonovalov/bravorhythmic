import re

with open("src/app/trial/page.tsx", "r") as f:
    content = f.read()

# Update headline
content = content.replace(
    'Discover the Art of <span className="text-bravo-accent">Rhythmic Gymnastics</span>',
    'Rhythmic Gymnastics Classes in the <span className="text-bravo-accent">Bay Area</span>'
)

# Replace the coach array
old_array = r'\[\s*{\s*name:\s*"Olga Kofman".*?\]\.map'

new_array = """[
              { name: "Olga Kofman", role: "Head Coach", src: "olga.jpg" },
              { name: "Katya Konovalova", role: "Santa Clara Head Coach", src: "katya.jpg" },
              { name: "Anastasiya Kornyenko", role: "Coach", src: "anastasiya.jpg" },
              { name: "Marina Kozlova", role: "Coach", src: "marina_kozlova.png" },
              { name: "Aksana Laziuk", role: "Coach & Ballet", src: "aksana.jpg" },
              { name: "Belén Pérez", role: "Coach", src: "belen.jpeg" },
              { name: "Anastasiia Diakova", role: "Coach", src: "anastasiia_diakova.jpg" },
              { name: "Anfisa Kupriyanova", role: "Operations", src: "anfisa.jpg" },
              { name: "Kimi Iwasaki", role: "Junior Coach", src: "kimi.jpg" },
              { name: "Alina Krayzbukh", role: "Junior Coach", src: "alina.jpg" },
              { name: "Leah Terry", role: "Junior Coach", src: "leah.png" }
            ].map"""

content = re.sub(old_array, new_array, content, flags=re.DOTALL)

with open("src/app/trial/page.tsx", "w") as f:
    f.write(content)
