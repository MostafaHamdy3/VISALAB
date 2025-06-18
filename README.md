# VISALAB

A modern React Native application for visa and travel document management, featuring internationalization support and a sleek user interface.

## 🚀 Features

- **Multi-language Support**: Built-in internationalization with Arabic and English support
- **Modern Navigation**: Bottom tab navigation with custom icons and smooth animations
- **Custom Fonts**: Integration support for Futura Md BT fonts
- **Responsive Design**: Optimized for both iOS and Android platforms
- **Country Management**: Interactive country selection with flag displays
- **Clean Architecture**: Well-structured codebase with TypeScript support

## 📱 Screenshots

*Screenshots coming soon*

## 🛠️ Tech Stack

- **Framework**: React Native
- **Navigation**: React Navigation
- **Language**: TypeScript
- **Internationalization**: i18n-js
- **Styling**: React Native StyleSheet

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (>=18)
- Xcode (for iOS development)
- Android Studio (for Android development)
- CocoaPods (for iOS dependencies)

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd VISALAB
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install iOS dependencies** (iOS only)
   ```bash
   cd ios && pod install && cd ..
   ```

4. **Link custom fonts**
   ```bash
   npx react-native-asset
   ```

## 🚀 Running the App

### iOS
```bash
npm run ios
```

### Android
```bash
npm run android
```

### Development Server
```bash
npm start
```

## 📁 Project Structure

```
VISALAB/
├── app/
│   ├── assets/
│   │   ├── fonts/           # Custom fonts
│   │   ├── icons/           # App icons
│   │   └── translation/     # i18n files
│   ├── components/          # Reusable components
│   ├── constant/            # App constants and configs
│   ├── screens/             # App screens
│   ├── types/              # TypeScript type definitions
│   └── AppNavigator.tsx    # Navigation configuration
├── android/                # Android-specific files
├── ios/                   # iOS-specific files
└── package.json
```

## 🌐 Internationalization

The app supports multiple languages:

- **English** (default)
- **Arabic** (RTL support)

## Author 👨‍💻

<div align="center">

**Mostafa Hamdy**  
React Native | React Developer

[![Portfolio](https://img.shields.io/badge/🌐_Portfolio-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://mostafa-portfolio.vercel.app/)
[![LinkedIn](https://img.shields.io/badge/🔗_LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mostafa-7amdy/)
[![Email](https://img.shields.io/badge/📧_Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:mostafa44hamdy@gmail.com)

</div>

