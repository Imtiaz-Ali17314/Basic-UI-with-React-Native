# 📱 Basic UI with React Native — Task Management App

[![React Native](https://img.shields.io/badge/React_Native-0.86.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo_SDK-57-000000?style=for-the-badge&logo=expo&logoColor=white)](https://expo.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

A sleek, modern, dark-themed **Task Management Mobile Application UI** built with **React Native**, **Expo SDK 57**, and **Expo Router**. Designed with pixel-perfect precision, smooth navigation, category-based task organization, and dynamic status filtering.

---

## 📸 App Preview

<div align="center">
  <img src="assets/images/Basic-UI-with-React-Native.PNG" alt="App Preview" width="360" style="border-radius: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.3);" />
</div>

---

## ✨ Features

- 📅 **Interactive Date Selector**: Horizontal scrollable date strip for quick day-by-day task navigation.
- 🎯 **Status Filter Tabs**: Seamlessly filter tasks between **All**, **Done**, **In-Progress**, and **To-do** states.
- 🏷️ **Categorized Task Cards**: Displays task title, category, scheduled time, icon badge, and visual status indicator.
- 🔍 **Dynamic Task Detail Screen**: Deep dive into individual task research & details with interactive resources and key points.
- 🎨 **Modern Dark UI**: Beautifully styled using high-contrast dark theme colors and custom icons (`@expo/vector-icons`).
- ⚡ **Optimized Performance**: Built with `FlatList` virtualized rendering and memoized data filtering for 60 FPS performance.
- 🛡️ **Strict TypeScript**: Fully type-safe components, navigation params, and task data models.

---

## 🛠️ Tech Stack

- **Framework**: [React Native](https://reactnative.dev/) (v0.86)
- **Platform**: [Expo SDK 57](https://expo.dev/)
- **Routing**: [Expo Router v57](https://docs.expo.dev/router/introduction/) (File-based navigation)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: `StyleSheet` API & Custom Design Tokens
- **Icons**: `@expo/vector-icons` (Ionicons)
- **Animations**: `react-native-reanimated`

---

## 📁 Directory Structure

```text
Basic-UI-with-React-Native/
├── assets/
│   └── images/
│       └── Basic-UI-with-React-Native.PNG  # App Screenshot / Preview
├── components/                             # Reusable UI Components
│   ├── DateSelector.tsx                    # Horizontal Date Strip Navigation
│   ├── FIlterTabs.tsx                      # Task Status Filter Tabs
│   ├── Header.tsx                          # App Header with Action Icons
│   └── TaskCard.tsx                        # Task Item Component
├── constants/                              # Data Models & Styles
│   ├── Colors.ts                           # Theme Color Palette
│   └── tasks.ts                            # Task Types & Initial Mock Data
├── src/
│   └── app/                                # Expo Router Pages & Navigation
│       ├── _layout.tsx                     # Root Stack Layout
│       ├── index.tsx                       # Today's Tasks Screen (Main Dashboard)
│       └── research/
│           └── [id].tsx                    # Dynamic Task Detail View
├── app.json                                # Expo Configuration
├── tsconfig.json                           # TypeScript Configuration
└── package.json                            # Project Dependencies & Scripts
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Expo Go](https://expo.dev/go) app on your iOS / Android device or an Emulator / Simulator.

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Imtiaz-Ali17314/Basic-UI-with-React-Native.git
   cd Basic-UI-with-React-Native
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npx expo start
   ```

4. **Run on target platform**:
   - Press `a` for **Android** emulator/device.
   - Press `i` for **iOS** simulator.
   - Press `w` for **Web**.
   - Scan the QR code with **Expo Go** (Android) or **Camera App** (iOS).

---

## 📜 Available Scripts

| Script      | Command           | Description                 |
| ----------- | ----------------- | --------------------------- |
| **Start**   | `npm start`       | Launches Expo Metro Bundler |
| **Android** | `npm run android` | Starts app on Android       |
| **iOS**     | `npm run ios`     | Starts app on iOS           |
| **Web**     | `npm run web`     | Starts app in web browser   |
| **Lint**    | `npm run lint`    | Runs Expo linter            |

---

## 🔗 Repository Information

- **GitHub Repository**: [Imtiaz-Ali17314/Basic-UI-with-React-Native](https://github.com/Imtiaz-Ali17314/Basic-UI-with-React-Native.git)
- **Author**: Imtiaz Ali

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
