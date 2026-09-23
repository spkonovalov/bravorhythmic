import re

with open("about.html") as f:
    html = f.read()

# Find blocks like: <div class="t526__persname ...>Name</div>
names = re.findall(r'<div class="t526__persname[^>]*>(.*?)</div>', html)
descrs = re.findall(r'<div class="t526__persdescr[^>]*>(.*?)</div>', html)
images = re.findall(r'<div class="t526__bgimg.*?data-original="([^"]+)"', html)

for n, d, i in zip(names, descrs, images):
    print(f"{n} | {d} | {i}")

