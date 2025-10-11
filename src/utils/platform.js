//Import the platform module from React Native
import {Platform} from 'react-native';

//Check if the current platform is iOS
export const isIOS = Platform.OS === 'ios';

//Check if current platform is Android
export const isAndroid = Platform.OS === 'android';

//Define a set of colors specific to each platform
export const PLATFORM_COLORS = {
    ios: {
        primary: '#007AFF',      // iOS default blue for primary buttons
        background: '#f2f2f7',   // iOS default background color
        text: '#000000',         //Text color for iOS
    },
    android: {
         primary: '#2196F3',      // Android default blue for primary buttons
         background: '#f5f5f5',   // Android default background color
         text: '#212121',          // Text color for Android  
    },
};

//Function to get colors based on the current platform
export const getCurrentPlatformColors = () => {
  return PLATFORM_COLORS[Platform.OS] || PLATFORM_COLORS.android;
};