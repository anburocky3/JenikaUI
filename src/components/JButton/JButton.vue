<script setup lang="ts">
import { ButtonProps, Variant, VariantType } from '../../types/global';

const props = defineProps<ButtonProps>();

const getColors = (variant: VariantType) => {
  let colors =
    'jui-py-2 jui-px-4 jui-font-semibold jui-rounded jui-shadow jui-text-white disabled:jui-opacity-75 disabled:jui-cursor-not-allowed';
  switch (variant) {
    case Variant.PRIMARY:
      colors += ' jui-bg-indigo-500 hover:jui-bg-indigo-600  ';
      break;
    case Variant.SECONDARY:
      colors += ' jui-bg-blue-500 hover:jui-bg-blue-600 ';
      break;
    case Variant.SUCCESS:
      colors += ' jui-bg-green-500 hover:jui-bg-green-600 ';
      break;
    case Variant.DANGER:
      colors += ' jui-bg-red-500 hover:jui-bg-red-600 ';
      break;
    case Variant.WARNING:
      colors += ' jui-bg-orange-500 hover:jui-bg-orange-600 ';
      break;
    case Variant.INFO:
      colors += ' jui-bg-blue-400 hover:jui-bg-blue-500 ';
      break;
    case Variant.DARK:
      colors += ' jui-bg-gray-800 hover:jui-bg-gray-900 jui-text-white';
      break;
    default:
      colors += ' jui-bg-gray-50 hover:jui-bg-gray-100 jui-text-black ';
      break;
  }

  return colors;
};
</script>

<template>
  <button :class="getColors(props.variant)" :disabled="props.disabled">
    <slot />
  </button>
</template>
