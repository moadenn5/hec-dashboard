"""Convert the generated PNG icon to a Windows .ico file with multiple sizes."""
from PIL import Image
import os

src = r"C:\Users\Dell Latitude 7320\.gemini\antigravity\brain\fdce69e3-faf1-4301-883b-2a02831249d6\hec_studio_icon_1779209844564.png"
dst = r"c:\Users\Dell Latitude 7320\OneDrive - HEC Montréal\Etudes\HEC_Dashboard\icon.ico"

img = Image.open(src).convert("RGBA")

sizes = [(16,16),(24,24),(32,32),(48,48),(64,64),(128,128),(256,256)]
icons = [img.resize(s, Image.LANCZOS) for s in sizes]
icons[0].save(dst, format="ICO", sizes=sizes, append_images=icons[1:])
print(f"Icon saved to: {dst}")
