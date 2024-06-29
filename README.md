# JDM App

This is an [Expo](https://expo.dev) project created
with [`npx create-expo-app@latest`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

```sh
npm i
```

2. Start the app

Android:

```sh
npx expo run:android
```

iOS(require a MacOS host):

```sh
npx expo run:ios
```

## Notes

- download sqlite db from [xjtu.men](https://xjtu.men) and store it as `assets/db/xmen.db`
- generate drizzle/schema.ts using `npx drizzle-kit introspect`
- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project
uses [file-based routing](https://docs.expo.dev/router/introduction).


