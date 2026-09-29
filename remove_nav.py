import cv2
import numpy as np

# Load original hero image
img = cv2.imread('assets/images/road-minded-hero.png')

# Region containing the fake nav text: 'Home  About Us  Services  Training & Sessions  Gallery  Contact'
# y: 40 to 95, x: 540 to 1000
roi = img[40:95, 540:1000]

# Detect text and green underline
gray_roi = cv2.cvtColor(roi, cv2.COLOR_BGR2GRAY)
hsv_roi = cv2.cvtColor(roi, cv2.COLOR_BGR2HSV)

mask_text = (gray_roi < 175)
mask_green = (hsv_roi[:, :, 0] > 30) & (hsv_roi[:, :, 0] < 90) & (hsv_roi[:, :, 1] > 35)

mask_roi = np.zeros(roi.shape[:2], dtype=np.uint8)
mask_roi[mask_text | mask_green] = 255

# Dilate mask slightly to cleanly cover font anti-aliased fringes
kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (3, 3))
mask_roi = cv2.dilate(mask_roi, kernel, iterations=2)

full_mask = np.zeros(img.shape[:2], dtype=np.uint8)
full_mask[40:95, 540:1000] = mask_roi

# Inpaint seamlessly matching surrounding sky gradients
cleaned = cv2.inpaint(img, full_mask, 5, cv2.INPAINT_TELEA)

# Save backup and update image
cv2.imwrite('assets/images/road-minded-hero-backup.png', img)
cv2.imwrite('assets/images/road-minded-hero.png', cleaned)
print('Successfully removed nav text from road-minded-hero.png')
