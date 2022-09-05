<script setup lang="ts">
type ColorVariant =
  | 'primary'
  | 'secondary'
  | 'info'
  | 'warning'
  | 'success'
  | 'danger'
  | 'dark'
  | 'light';

defineProps<{
  variant: ColorVariant;
}>();
</script>

<template>
  <button><slot /></button>
</template>
