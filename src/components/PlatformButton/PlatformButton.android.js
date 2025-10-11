// Import React and essential components from React Native
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

// Android-specific button component
const AndroidButton = ({ title, onPress, variant = 'primary', disabled = false }) => {
  return (
    // Touchable button with dynamic styles and opacity feedback
    <TouchableOpacity
      style={[styles.button, styles[variant], disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}>
      
      {/* Uppercase text with variant-based color */}
      <Text style={[styles.text, styles[`${variant}Text`]]}>{title.toUpperCase()}</Text>
    </TouchableOpacity>
  );
};

// Material Design-inspired styles for Android
const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 4,
    alignItems: 'center',
    elevation: 2, // Adds shadow for Android
  },
  primary: {
    backgroundColor: '#2196F3',
  },
  secondary: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#2196F3',
    elevation: 0,
  },
  disabled: {
    backgroundColor: '#e0e0e0',
    elevation: 0,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 1.25, // Typical Android text spacing
  },
  primaryText: {
    color: '#ffffff',
  },
  secondaryText: {
    color: '#2196F3',
  },
});

// Export component
export default AndroidButton;
