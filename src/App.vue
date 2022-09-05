<script setup lang="ts">
import { config } from './config/app.config';
import JButton from './components/JButton/JButton.vue';
// import { JButton } from 'jenika-ui';
</script>

<template>
  <div class="p-10">
    <h1 class="text-2xl">Welcome to {{ config.libraryName }}</h1>
    <div class="my-10">
      <JButton
        variant="primary"
        class="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700"
        >Some other contents
      </JButton>
    </div>
  </div>
</template>
