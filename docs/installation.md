# Installation guide

:::tip Pre-requisites
- Familiarity with the command line
- Install [Node.js](https://nodejs.org/) version 15.0 or higher
:::

<!-- # Introducing JenikaUI
Simple effective ui library which has ready ui components, use it and build great projects. -->

1. Install from your favourite package managers.

```bash
yarn add jenika-ui
# or with npm
npm install jenika-ui
```

2. Import styles into your `main.{ts/js}` file

```js main.ts
import '/node_modules/jenika-ui/dist/style.css';
```

3. Start using the pre-styled components
>For example if you want buttons, try importing it and directly use it in your app.

```js
import JButton from './components/JButton/JButton.vue';

<template>
    <JButton variant="primary">Primary</JButton>
</template>
```

:::tip :bulb: Quick-Tip
- You can ignore importing if you have installed [Unplugin Vue Components](https://github.com/antfu/unplugin-vue-components)
:::

## What's next?
Start building great apps using these UI. Good Luck!
