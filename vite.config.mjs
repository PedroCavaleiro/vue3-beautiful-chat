import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import dynamicImportVars from '@rollup/plugin-dynamic-import-vars';

export default defineConfig({
  outDir: 'dist',
  plugins: [
    vue()
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'VueBeatifulChat',
      fileName: (format) => `vue3-beautiful-chat.${format === 'umd' ? 'umd.js' : 'esm.js'}`
    },
    rollupOptions: {
      plugins: [dynamicImportVars()],
      external: ['vue'],
      output: [
        {
          assetFileNames: 'vue-beatiful-chat.css',
          format: 'umd',
          name: 'VueBeatifulChat',
          globals: {
            vue: 'Vue'
          }
        },
        {
          format: 'esm',
          globals: {
            vue: 'Vue'
          }
        }
      ]
    }
  }
});

