

# Refer

Try to do a demo following the following tutorial for fun:

http://rationalappdev.com/react-native-list-app-complete-how-to-guide/

# How to run the program on android (similar on ios)

On one terminal, type `react-native start --reset-cache`
$ react-native start --reset-cache

On the other terminal, type in `adb reverse tcp:8081 tcp:8081` and `react-native run-android`
$ react-native run-android

Make sure:
1, 
Some suggestions

"I selected Dismiss, Went into the Developer menu, then Dev Settings, Choose Debug server host & port for device, I added my computers IP address and the port: 192.168.0.xx:8xxx, use whatever your developer machines assigned IP address is on your wifi network. The port is usually :8081

Once I did this, all went well. Also, while you're in the dev menu remember to select Enable Live Reload and Debug JS Remotely, it makes your life much-much easier while debugging."

from 

https://stackoverflow.com/questions/38870710/error-could-not-get-batchedbridge-make-sure-your-bundle-is-packaged-properly?rq=1

2, Computer and phone are on the same WIFI network.

