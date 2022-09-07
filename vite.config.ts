import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VueTypeImports from 'vite-plugin-vue-type-imports';
import { resolve } from 'path';
import { config } from './src/config/app.config';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@/': new URL('./src/', import.meta.url).pathname,
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: config.libraryName,
      fileName: (format) => `${config.libraryShortName}.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // Add external deps here
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [vue(), VueTypeImports()],
});
