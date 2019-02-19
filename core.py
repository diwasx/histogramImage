import matplotlib.pyplot as plt
import numpy as np
import cv2

file='main.jpg'
file='grey.jpg'
# im=cv2.imread('main.jpg',0) #Grey Scale
im=cv2.imread(file,1) #RGB Scale

#Show image 
# cv2.imshow('main',im)
# cv2.waitKey(0)

# im=im.flatten() #Convert pixel value from two dimension arrary  list
im = im.mean(axis=2).flatten() #Convert RGB value from two dimension arrary to list
plt.hist(im, 255)
# plt.xlim([0,255]) #set limit of x value
plt.show()

# print(dataToSendBack)
# sys.stdout.flush()
