<h1 align="center">
  Weather App
</h1>

<p align="center">
  <strong>Weather App is a demo for using React Native, React Navigation and Redux-Saga.</strong><br>
</p>

## Environment Setup

### Step 1:

Follow the [Environment Setup guide](https://reactnative.dev/docs/environment-setup) to setup the environment.

### Step 2:

After setting up the environment, using node (version >= 10), run following command in the root directory:

    $ yarn install

or use npm:

    $ npm install

### Step 3:

cd into `/ios` and run the command:

    	$ pod install

### Step 4:

Modify file `RCTUIImageViewAnimated.m` in path `node_modules/react-native/Libraries/Image/` as following:

     $ #pragma mark - CALayerDelegate
    	- (void)displayLayer:(CALayer *)layer
    	{
    	  if (_currentFrame) {
    	    layer.contentsScale = self.animatedImageScale;
    	    layer.contents = (__bridge id)_currentFrame.CGImage;
    	  }
    	  ++ else {
    	  ++   [super displayLayer:layer];
    	  ++ }
    	}

## Running the Application

(Please get the [Backend Server](https://github.com/frankychan007/WeatherServer) ready before running the application)

### Run on ios:

Open the `/ios/WeatherApp.xcworkspace` with Xcode, select target device then hit the "run" button. [Click Here](https://reactnative.dev/docs/0.62/running-on-device) for further informations.

### Run on android:

Run an emulator on Android Studio. [Click Here](https://reactnative.dev/docs/0.62/running-on-device)for further informations.
Type the following command in the root directory:

    $ react-native run-android
