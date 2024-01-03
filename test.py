import cv2

frame = cv2.imread("image.png")


cv2.imshow("Test Image", frame)
cv2.waitKey(2000)
cv2.destroyAllWindows()

print("Code Executed")
