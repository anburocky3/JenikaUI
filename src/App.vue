<script setup lang="ts">
import { config } from './config/app.config';
import JButton from './components/JButton/JButton.vue';
// import { JButton } from 'jenika-ui';
</script>

<template>
  <div class="jui-p-10 jui-bg-gray-50">
    <h1 class="jui-text-2xl jui-font-bold">
      Welcome to {{ config.libraryName }}
    </h1>
    <div class="jui-my-10 jui-space-x-4">
      <JButton variant="primary">Primary </JButton>
      <JButton variant="secondary">Secondary </JButton>
      <JButton variant="success">Success </JButton>
      <JButton variant="danger">Danger </JButton>
      <JButton variant="warning">Warning </JButton>
      <JButton variant="info">Info </JButton>
      <JButton variant="dark">Danger </JButton>
      <!-- <JButton>Default Button </JButton> -->
      <!-- Other variants -->
      <JButton variant="primary" disabled>Primary (Disabled)</JButton>
    </div>
  </div>
</template>
