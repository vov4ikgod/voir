Hello, guys. I created this library in order to make it easier to create notifications on the site.
Here I will show you how you can use my library.

**How to create a notification**
You need to write such code to create a notification:
```voirNotification.create(settings)```

**Consider the code snippet that I wrote just below. These are the notification settings**
```window.settings = {text: {text: 'Thanks you', colorText: 'text-black', colorBgc: 'background-yellow'}}```
- How to change the notification text:
You need to change the value of the 'text' key.
- How to change the text color:
You need to change the value of the 'colorText' key. You only need to change the color, but not the 'text-'.
- How to change the background color and borders:
You need to change the value of the 'colorBgc' key. You only need to change the color, but not the 'background-'.

**ICON**
In order for the standard icon to work for you, you need to connect the cdn to the html header.
```<link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'>```
If you don't like the standard icon, then you can replace it with your own.

