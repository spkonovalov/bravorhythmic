with open("src/app/trial/page.tsx", "r") as f:
    content = f.read()

cta_start = content.find("      {/* Bottom CTA */}")
gallery_start = content.find("      {/* Gallery / Life at Bravo Carousel */}")

if cta_start != -1 and gallery_start != -1:
    cta_section = content[cta_start:gallery_start]
    gallery_section = content[gallery_start:content.rfind("    </div>")]
    
    new_content = content[:cta_start] + gallery_section + cta_section + "    </div>\n  );\n}\n"
    
    with open("src/app/trial/page.tsx", "w") as f:
        f.write(new_content)
