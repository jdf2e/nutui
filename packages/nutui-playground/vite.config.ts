import fs from 'fs';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  base: '/playground/',
  plugins: [
    vue({
      script: {
        // @ts-ignore
        fs: {
          fileExists: fs.existsSync,
          readFile: (file) => fs.readFileSync(file, 'utf-8')
        }
      }
    })
  ],
  optimizeDeps: {
    exclude: ['@vue/repl']
  }
});
