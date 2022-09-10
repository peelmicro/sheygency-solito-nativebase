# Solito + NativeBase version of the React - Tailwind CSS Marketing Agency Website From Scratch Udemy Course

This is a [Solito](https://solito.dev/) + [NativeBase](https://nativebase.io/) version of the [React - Tailwind CSS Marketing Agency Website From Scratch](https://www.udemy.com/course/react-tailwind-css-marketing-agency-website-from-scratch/) Udemy Course.

## 🔦 About

Solito is a tiny wrapper around React Navigation and Next.js that lets you share navigation code across platforms, along with a set of patterns for building cross-platform apps with React Native + Next.js.

NativeBase is an accessible, utility-first component library that helps you build consistent UI across Android, iOS and Web.

## 📦 Included packages

- `solito` for cross-platform navigation
- `moti` for animations
- `NativeBase` for theming/design
- Expo SDK 44
- Next.js 12
- React Navigation 6

## 🗂 Folder layout

- `apps` entry points for each app

  - `expo`
  - `next`

- `packages` shared packages across apps
  - `app` you'll be importing most files from `app/`
    - `features` (don't use a `screens` folder. organize by feature.)
    - `provider` (all the providers that wrap the app, and some no-ops for Web.)
    - `navigation` Next.js has a `pages/` folder. React Native doesn't. This folder contains navigation-related code for RN. You may use it for any navigation code, such as custom links.
    - `design` your app's design system. organize this as you please.
      - `typography` (components for all the different text styles)
      - `layout` (components for layouts)

You can add other folders inside of `packages/` if you know what you're doing and have a good reason to.

## 🏁 Start the app

- Install dependencies: `yarn`

- Next.js local dev: `yarn web`
  - Runs `yarn next`
- Expo local dev: `yarn native`
  - Runs `expo start`

## 🆕 Add new dependencies

### Pure JS dependencies

If you're installing a JavaScript-only dependency that will be used across platforms, install it in `packages/app`:

```sh
cd packages/app
yarn add date-fns
cd ../..
yarn
```

### Native dependencies

If you're installing a library with any native code, you must install it in `apps/expo`:

```sh
cd apps/expo
yarn add react-native-reanimated

cd ../..
yarn
```

You can also install the native library inside of `packages/app` if you want to get autoimport for that package inside of the `app` folder. However, you need to be careful and install the _exact_ same version in both packages. If the versions mismatch at all, you'll potentially get terrible bugs. This is a classic monorepo issue.
