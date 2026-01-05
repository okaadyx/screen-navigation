# Screen Navigation

This project is a React Native application built with Expo, demonstrating a screen navigation setup using a drawer and tab navigator.

## 🚀 Getting Started

### Prerequisites

- Node.js
- Expo CLI

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/okaadyx/screen-navigation.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start the development server
   ```sh
   npm start
   ```

## 📜 Available Scripts

- `npm start`: Starts the development server.
- `npm run android`: Runs the app on a connected Android device or emulator.
- `npm run ios`: Runs the app on the iOS simulator.
- `npm run web`: Runs the app in a web browser.
- `npm run lint`: Lints the code using ESLint.

## 📁 Project Structure

The project uses a file-based routing system with `expo-router`.

```
app/
├── (drawer)/               # Drawer navigator layout
│   ├── (tabs)/             # Tab navigator layout
│   │   ├── explore.tsx
│   │   ├── index.tsx
│   │   ├── notification.tsx
│   │   └── settings.tsx
│   ├── contact.tsx
│   ├── profile.tsx
│   └── wishlist.tsx
├── modal.tsx
└── _layout.tsx
```

## Dependencies

This project uses the following major dependencies:

- `react`: A JavaScript library for building user interfaces.
- `react-native`: A framework for building native apps with React.
- `expo`: A framework and a platform for universal React applications.
- `expo-router`: A file-based router for React Native and web applications.
- `@react-navigation/drawer`: Drawer navigation for React Navigation.
- `@react-navigation/bottom-tabs`: Bottom tab navigator for React Navigation.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
