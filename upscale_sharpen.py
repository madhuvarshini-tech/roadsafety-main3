from PIL import Image, ImageEnhance, ImageFilter
import os

input_path = 'assets/images/road-minded-hero.png'
backup_path = 'assets/images/road-minded-hero-1024.png'

# Load image
im = Image.open(input_path).convert('RGB')
w, h = im.size

# Save 1024 backup if not already saved
if not os.path.exists(backup_path):
    im.save(backup_path)

# High quality 2x upscale using Lanczos resampling (to 2048 x 1152)
upscaled = im.resize((w * 2, h * 2), Image.Resampling.LANCZOS)

# Advanced unsharp masking to restore crisp lettering, vehicle contours, and badges
sharpened = upscaled.filter(ImageFilter.UnsharpMask(radius=1.6, percent=145, threshold=1))

# Subtle sharpness boost for high-DPI displays
enhanced = ImageEnhance.Sharpness(sharpened).enhance(1.2)

# Save ultra-clear high-res hero image
enhanced.save(input_path, format='PNG', optimize=True)
print(f'Successfully upscaled and deblurred {input_path} to {enhanced.size}')
