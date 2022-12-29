import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    minify: true,
    lib: {
      entry: './dist/styles/themes/default.scss',
      formats: ['es'],
      name: 'style',
      fileName: 'style'
    },
    // rollupOptions: {
    //   output: {
    //     banner
    //   }
    // },
    emptyOutDir: false
  }
});
