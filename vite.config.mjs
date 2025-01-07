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
      name: 'VueBeatifulChat'
    },
    rollupOptions: {
      plugins: [dynamicImportVars()],
      external: ['vue'],
      output: [
        {
          assetFileNames: 'assets/[name].[hash][extname]',
          format: 'umd',
          name: 'VueBeatifulChat',
          globals: {
            vue: 'Vue'
          }
        },
        {
          assetFileNames: 'assets/[name].[hash][extname]',
          format: 'esm',
          globals: {
            vue: 'Vue'
          }
        }
      ]
    }
  }
});

