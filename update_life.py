with open("src/app/trial/page.tsx", "r") as f:
    content = f.read()

import re

new_images = """[
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
          ]"""

# Replace the array
content = re.sub(r'\[\s*"Competition-photo-11\.jpg",\s*"Competition-photo-13\.jpg",\s*"Competition-photo-14\.JPG",\s*"Competition-photo-4\.jpg"\s*\]', new_images, content)

with open("src/app/trial/page.tsx", "w") as f:
    f.write(content)
