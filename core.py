import matplotlib.pyplot as plt
import cv2

# file='main.jpg'
file='sample'
im=cv2.imread(file,0) #Grey Scale
# im=cv2.imread(file,1) #RGB Scale

#Show image 
# cv2.imshow('main',im)
# cv2.waitKey(0)

im=im.flatten() #Convert pixel value from two dimension arrary  list
# im = im.mean(axis=2).flatten() #Convert RGB value from two dimension arrary to list
plt.hist(im, 255)

plt.savefig('hist.png') #Save to file
# plt.xlim([0,255]) #set limit of x value
# plt.show() #Display

# print(dataToSendBack)
# sys.stdout.flush()
