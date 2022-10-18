import { createVuePlugin } from 'vite-plugin-vue2'

export default {
  plugins: [
    createVuePlugin(),
    {
      name: 'load-raw-md',
      transform(code, id) {
        if (id.endsWith('.md')) {
          return `export default ${JSON.stringify(code)}`
        }
      }
    }
  ]
}
