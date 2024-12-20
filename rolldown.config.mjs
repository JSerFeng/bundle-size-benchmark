import { defineConfig } from "rolldown";
import terser from "@rollup/plugin-terser";

export default defineConfig({
  input: "src/index.js",
  output: {
    file: "rolldown.js",
    dir: "dist",
    format: "es",
    minify: true,
    comments: "none",
  },
  plugins: [
    terser({
      compress: {
        passes: 0,
      },
			format: {
        comments: false,
      },
    }),
  ],
});
