# CPAN 213 - Lab 5: Implementing Platform-Specific Features

## 🧑‍💻 Student Information
- **Name:** Gurneet Kaur  
- **Student ID:** N01724218  
- **Course:** CPAN 213 - Cross-Platform Mobile Application Development  
- **Lab:** Lab 5 - Implementing Platform-Specific Features  
- **Platform Tested:** Android  

---

## 📱 Project Overview
This project demonstrates platform-specific development in React Native by implementing customized **Android** components and styles following **Material Design principles**.  
The app includes a `SettingsScreen` with functional switches, buttons, and alert dialogs that behave according to Android design conventions.

---

## ⚙️ Features Implemented
- **Platform Detection** using `Platform.OS`
- **Android-Specific Styling**
  - Buttons with 4pt corner radius and elevation
  - UPPERCASE button text for Material Design
  - `Roboto` font for Android typography
- **Functional Components**
  - Push Notifications toggle
  - Dark Mode toggle
  - Primary, Secondary, and Reset buttons with alert dialogs
- **PlatformButton Component**
  - Custom `.android.js` implementation for Android
- **Alerts**
  - “Success” for Primary Action
  - “Info” for Secondary Action
  - “Confirm / Done” for Reset Settings

---

## 🧩 File Structure
├── App.js
├── src/
│ ├── components/
│ │ └── PlatformButton/
│ │ ├── index.js
│ │ └── PlatformButton.android.js
│ ├── screens/
│ │ └── SettingsScreen.js
│ └── utils/
│ └── platform.js
└── README.md


---

## 🧠 Implementation Notes
- Used **`Platform.select()`** to apply elevation on Android.
- Used **alerts** to confirm and display actions for all buttons.
- Followed **Material Design** guidelines for Android components.
- Verified functional behavior on an Android emulator (Pixel device).
---

## 🧪 Testing Instructions
To run the app:
```bash
npm install
npx react-native run-android
