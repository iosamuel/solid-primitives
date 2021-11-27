import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import Unocss from "unocss/vite";

export default defineConfig({
  plugins: [
    solidPlugin(),
    Unocss({
      shortcuts: {
        "center-child": "flex justify-center items-center",
        caption: "text-xs text-gray-500"
      }
    })
  ],
  build: {
    target: "esnext",
    polyfillDynamicImport: false
  }
});
