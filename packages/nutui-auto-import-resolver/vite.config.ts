import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    minify: false,
    target: 'es2015',
    lib: {
      entry: 'src/index.ts',
      name: 'name',
      fileName: (format) => {
        if (format === 'es') {
          return 'index.mjs'
        } else {
          return 'index.js'
        }
      },
      formats: ['es', 'cjs']
    },
    emptyOutDir: false
  }
})
