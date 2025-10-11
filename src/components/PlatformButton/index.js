//Import the Platform module from React Native
import {Platform} from 'react-native';

//Using Platform.select() to conditionally load the correct component
const PlatformButton = Platform.select({
    ios: () => require('./PlatformButton.ios').default,
    android: () => require('./PlatformButton.android').default,  
})();

//Export the selected component
export default PlatformButton;