import { createVuePlugin } from "vite-plugin-vue2";
import { url } from "./src/helpers/env";

export default {
  base: url.base,
  resolve: {
    alias: {
      "/images": "./src/assets/images",
    },
  },
  plugins: [
    createVuePlugin(),
    {
      name: "load-raw-md",
      transform(code, id) {
        if (id.endsWith(".md")) {
          return `export default ${JSON.stringify(code)}`;
        }
      },
    },
  ],
};
