## React Native Todo App

### App run instructions

### using yarn: (npm v16.18.1)

1- installing the dependencies
```
yarn
```

2- install ios pods
```
npx pod-install
```

3- runing on IOS simulator
```
yarn ios
```

3- runing on Android emulator
```
yarn android
```

### using yarn: (npm v16.18.1)

3- code func test using jest (only functions for now)
```
yarn jest
```
after running the test a full report will be inside coverage/lcov-report folder as:

![lcov-report](https://github.com/osamaabdalla/Todo/blob/main/lcov-report.png?raw=true)


**Application structure**

```
├src
├── assets
│   ├── fonts
│   └── images
│       ├── gif
│       └── png
├── components
│   └── TodoView
├── navigations
├── providers
├── screens
│   ├── App
│   ├── AddNew
│   ├── Home
│   ├── Settings
│   ├── Splash
│   ├── Sorter
│   ├── Update
│   └── View
├── store
│   └── reducers
└── utils
```

**Theme settings**

DEFAULT and DARK THEME

Colors are configurable in `/src/utils/constants.js`
