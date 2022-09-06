<script setup lang="ts">
import { ButtonProps, Variant } from '../../types/global';

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
});

const variants = {
  [Variant.PRIMARY]: 'jui-bg-indigo-500 hover:jui-bg-indigo-600',
  [Variant.SECONDARY]: 'jui-bg-blue-500 hover:jui-bg-blue-600',
  [Variant.SUCCESS]: 'jui-bg-green-500 hover:jui-bg-green-600',
  [Variant.DANGER]: 'jui-bg-red-500 hover:jui-bg-red-600',
  [Variant.WARNING]: 'jui-bg-orange-500 hover:jui-bg-orange-600',
  [Variant.INFO]: 'jui-bg-blue-400 hover:jui-bg-blue-500',
  [Variant.DARK]: 'jui-bg-gray-800 hover:jui-bg-gray-900 jui-text-white',
  [Variant.LIGHT]: 'jui-bg-white hover:jui-bg-gray-100 jui-text-black',
  [Variant.DEFAULT]: 'jui-bg-gray-50 hover:jui-bg-gray-100 jui-text-black ',
};

let classes = [
  'jui-py-2 jui-px-4 jui-font-semibold jui-rounded jui-shadow jui-text-white disabled:jui-opacity-75 disabled:jui-cursor-not-allowed',
  variants[props.variant],
];
</script>

<template>
  <button :class="classes" :disabled="props.disabled">
    <slot />
  </button>
</template>
