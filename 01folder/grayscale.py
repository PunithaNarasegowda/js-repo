import cv2
img = cv2.imread("input.jpg")
if img is None:
    print("Image not found")
    exit()
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
screen_width = 1280
screen_height = 720
h, w = gray.shape[:2]
scale = min(screen_width / w, screen_height / h)
new_w = int(w * scale)
new_h = int(h * scale)
resized = cv2.resize(gray, (new_w, new_h))
cv2.imshow("Grayscale (Fitted)", resized)
cv2.waitKey(0)
cv2.destroyAllWindows()
