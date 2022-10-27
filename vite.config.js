import { createVuePlugin } from "vite-plugin-vue2";
import { defineConfig, loadEnv } from "vite";
import config from "./package.json";

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    base: process.env.VITE_APP_BASE,
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
    build: {
      target: "es2015",
      outDir: "./dist/nutui-issue-helper/",
      assetsDir: config.version,
      cssCodeSplit: true,
    },
  });
};
