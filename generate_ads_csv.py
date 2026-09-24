import csv

# --- DATA ---
campaigns = [
    "1. Local Core (Rhythmic)",
    "2. Kids & Beginners (General)",
    "3. High-Intent / Trial",
    "4. Brand Protection",
    "5. Competitors"
]

keywords = [
    # Campaign 1
    ("1. Local Core (Rhythmic)", "1.1. Near Me & Bay Area", "rhythmic gymnastics near me", "Phrase"),
    ("1. Local Core (Rhythmic)", "1.1. Near Me & Bay Area", "rhythmic gymnastics near me", "Exact"),
    ("1. Local Core (Rhythmic)", "1.1. Near Me & Bay Area", "rhythmic gymnastics classes near me", "Phrase"),
    ("1. Local Core (Rhythmic)", "1.1. Near Me & Bay Area", "rhythmic gymnastics bay area", "Phrase"),
    ("1. Local Core (Rhythmic)", "1.1. Near Me & Bay Area", "rhythmic gymnastics bay area", "Exact"),
    ("1. Local Core (Rhythmic)", "1.2. Redwood City", "rhythmic gymnastics redwood city", "Phrase"),
    ("1. Local Core (Rhythmic)", "1.2. Redwood City", "rhythmic gymnastics redwood city", "Exact"),
    ("1. Local Core (Rhythmic)", "1.2. Redwood City", "rhythmic gymnastics classes redwood city", "Phrase"),
    ("1. Local Core (Rhythmic)", "1.3. Geo Targets (Tier 1)", "rhythmic gymnastics san mateo", "Phrase"),
    ("1. Local Core (Rhythmic)", "1.3. Geo Targets (Tier 1)", "rhythmic gymnastics palo alto", "Phrase"),
    ("1. Local Core (Rhythmic)", "1.3. Geo Targets (Tier 1)", "rhythmic gymnastics belmont", "Phrase"),
    ("1. Local Core (Rhythmic)", "1.3. Geo Targets (Tier 1)", "rhythmic gymnastics menlo park", "Phrase"),
    ("1. Local Core (Rhythmic)", "1.3. Geo Targets (Tier 1)", "rhythmic gymnastics san carlos", "Phrase"),
    ("1. Local Core (Rhythmic)", "1.3. Geo Targets (Tier 1)", "rhythmic gymnastics mountain view", "Phrase"),

    # Campaign 2
    ("2. Kids & Beginners (General)", "2.1. Beginner Rhythmic", "beginner rhythmic gymnastics", "Phrase"),
    ("2. Kids & Beginners (General)", "2.1. Beginner Rhythmic", "beginner rhythmic gymnastics", "Exact"),
    ("2. Kids & Beginners (General)", "2.1. Beginner Rhythmic", "rhythmic gymnastics for kids", "Phrase"),
    ("2. Kids & Beginners (General)", "2.1. Beginner Rhythmic", "rhythmic gymnastics for 4 year olds", "Phrase"),
    ("2. Kids & Beginners (General)", "2.2. Kids Gym (Broad)", "gymnastics classes for kids", "Phrase"),
    ("2. Kids & Beginners (General)", "2.2. Kids Gym (Broad)", "gymnastics for kids near me", "Phrase"),
    ("2. Kids & Beginners (General)", "2.2. Kids Gym (Broad)", "kids gymnastics redwood city", "Phrase"),
    ("2. Kids & Beginners (General)", "2.2. Kids Gym (Broad)", "girls gymnastics classes", "Phrase"),
    ("2. Kids & Beginners (General)", "2.2. Kids Gym (Broad)", "gymnastics for 4 year olds", "Phrase"),
    ("2. Kids & Beginners (General)", "2.3. Toddlers & Beginners", "toddler gymnastics near me", "Phrase"),
    ("2. Kids & Beginners (General)", "2.3. Toddlers & Beginners", "toddler gymnastics redwood city", "Phrase"),
    ("2. Kids & Beginners (General)", "2.3. Toddlers & Beginners", "beginner gymnastics classes", "Phrase"),
    ("2. Kids & Beginners (General)", "2.3. Toddlers & Beginners", "gymnastics for beginners", "Phrase"),
    ("2. Kids & Beginners (General)", "2.4. Kids Gym Geo", "kids gymnastics san mateo", "Phrase"),
    ("2. Kids & Beginners (General)", "2.4. Kids Gym Geo", "toddler gymnastics palo alto", "Phrase"),
    ("2. Kids & Beginners (General)", "2.4. Kids Gym Geo", "gymnastics for kids belmont", "Phrase"),

    # Campaign 3
    ("3. High-Intent / Trial", "3.1. Trial Classes", "rhythmic gymnastics trial class", "Phrase"),
    ("3. High-Intent / Trial", "3.1. Trial Classes", "gymnastics trial class near me", "Phrase"),
    ("3. High-Intent / Trial", "3.1. Trial Classes", "gymnastics free trial redwood city", "Phrase"),
    ("3. High-Intent / Trial", "3.2. Cost & Pricing", "rhythmic gymnastics classes cost", "Phrase"),
    ("3. High-Intent / Trial", "3.2. Cost & Pricing", "rhythmic gymnastics tuition", "Phrase"),

    # Campaign 4
    ("4. Brand Protection", "4.1. Bravo Gymnastics", "bravo gymnastics", "Phrase"),
    ("4. Brand Protection", "4.1. Bravo Gymnastics", "bravo gymnastics", "Exact"),
    ("4. Brand Protection", "4.1. Bravo Gymnastics", "bravo rhythmic gymnastics", "Phrase"),
    ("4. Brand Protection", "4.1. Bravo Gymnastics", "bravo rhythmic gymnastics", "Exact"),
    ("4. Brand Protection", "4.1. Bravo Gymnastics", "bravo rhythmic gymnastics redwood city", "Phrase"),
    ("4. Brand Protection", "4.1. Bravo Gymnastics", "bravo rhythmic gymnastics schedule", "Phrase"),

    # Campaign 5
    ("5. Competitors", "5.1. California Rhythms", "california rhythms", "Phrase"),
    ("5. Competitors", "5.1. California Rhythms", "california rhythmic gymnastics", "Phrase"),
    ("5. Competitors", "5.2. Dianas Rhythmic Club", "dianas rhythmic club", "Phrase"),
    ("5. Competitors", "5.2. Dianas Rhythmic Club", "diana rhythmic gymnastics", "Phrase"),
    ("5. Competitors", "5.3. Gold Star Gym", "gold star gym gymnastics", "Phrase"),
    ("5. Competitors", "5.4. RGMIG", "rgmig", "Phrase"),
    ("5. Competitors", "5.4. RGMIG", "rgmigusa", "Phrase")
]

headlines = [
    "Rhythmic Gymnastics Classes", "Bravo Rhythmic Gymnastics", "Gymnastics in Redwood City",
    "Book a Free Trial Class", "Rhythmic Gymnastics Near You", "Kids Gymnastics Classes",
    "Beginner Gymnastics Classes", "Join Our Gymnastics Studio", "Top Gymnastics Bay Area",
    "Rhythmic Gymnastics For Kids", "Classes For Ages 4 and Up", "Professional Gym Coaches",
    "Try A Free Gymnastics Class", "Sign Up For A Free Trial", "Peninsula & South Bay Gym"
]
descriptions = [
    "Welcome to Bravo Rhythmic Gymnastics! Book a free trial class for your child today.",
    "Professional rhythmic gymnastics classes in Redwood City for kids of all skill levels.",
    "Build confidence, flexibility, and grace. Conveniently located for Bay Area families.",
    "Beginners welcome! Start your child's gymnastics journey with a free 60-minute trial."
]

sitelinks = [
    ("About Bravo Gym", "https://bravorhythmic.com/about", "Meet our professional coaches.", "Passionate about gymnastics."),
    ("Class Schedule", "https://bravorhythmic.com/schedule-and-tuition", "Find a class that fits you.", "Morning and evening options."),
    ("Our Programs", "https://bravorhythmic.com/rhythmic-programs", "Classes for all skill levels.", "Recreational to competitive."),
    ("Summer Camps", "https://bravorhythmic.com/camps", "Fun & engaging summer camps.", "Keep kids active this summer."),
    ("Our Staff & Coaches", "https://bravorhythmic.com/staff", "Learn from the best.", "Experienced and caring coaches."),
    ("FAQ for Parents", "https://bravorhythmic.com/faq", "Got questions? We have answers.", "Everything you need to know.")
]

callouts = [
    "Free Trial Class", "Ages 4 And Up", "Professional Coaches", 
    "All Skill Levels", "Bay Area Location", "Build Flexibility"
]

with open('Bravorhythmic_GoogleAds_Import.csv', 'w', newline='') as f:
    writer = csv.writer(f)
    
    # Write Keywords
    writer.writerow(["Campaign", "Ad Group", "Keyword", "Criterion Type"])
    for row in keywords:
        writer.writerow(row)
    
    writer.writerow([]) # Empty row separator
    
    # Write Ads
    ad_headers = ["Campaign", "Ad Group", "Final URL", "Path 1", "Path 2"] + \
                 [f"Headline {i+1}" for i in range(15)] + \
                 [f"Description {i+1}" for i in range(4)]
    writer.writerow(ad_headers)
    
    # We need one Ad row per Ad Group
    ad_groups = set((k[0], k[1]) for k in keywords)
    for camp, ag in ad_groups:
        row = [camp, ag, "https://learn.bravorhythmic.com/trial", "Classes", "Free-Trial"] + headlines + descriptions
        writer.writerow(row)
        
    writer.writerow([])
    
    # Write Sitelinks
    writer.writerow(["Campaign", "Sitelink text", "Sitelink Final URL", "Sitelink Description 1", "Sitelink Description 2"])
    for camp in campaigns:
        for sl in sitelinks:
            writer.writerow([camp, sl[0], sl[2], sl[3], sl[1]]) # sl[1] is URL, wait, the standard is Link Text, Final URL, Line 1, Line 2. The header here is final url as sl[2]. Wait.
            # actually: sl[0] = text, sl[1] = url, sl[2] = desc1, sl[3] = desc2
    
    # Let me fix sitelink writing just to be sure:
with open('Bravorhythmic_GoogleAds_Import.csv', 'w', newline='') as f:
    writer = csv.writer(f)
    writer.writerow(["Campaign", "Ad Group", "Keyword", "Criterion Type", "Final URL", "Path 1", "Path 2", "Sitelink text", "Sitelink Final URL", "Sitelink Description 1", "Sitelink Description 2", "Callout text"] + \
                    [f"Headline {i+1}" for i in range(15)] + [f"Description {i+1}" for i in range(4)])
    
    # First keywords
    for row in keywords:
        writer.writerow([row[0], row[1], row[2], row[3]] + [""]*26)
        
    # Then ads
    for camp, ag in ad_groups:
        row = [camp, ag, "", "", "https://learn.bravorhythmic.com/trial", "Classes", "Free-Trial", "", "", "", "", ""] + headlines + descriptions
        writer.writerow(row)
        
    # Then sitelinks (Campaign level)
    for camp in campaigns:
        for sl in sitelinks:
            writer.writerow([camp, "", "", "", "", "", "", sl[0], sl[1], sl[2], sl[3], ""] + [""]*19)
            
    # Then callouts (Campaign level)
    for camp in campaigns:
        for co in callouts:
            writer.writerow([camp, "", "", "", "", "", "", "", "", "", "", co] + [""]*19)

