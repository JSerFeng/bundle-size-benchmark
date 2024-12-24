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
  define: {
		'process.env.NODE_ENV': '"production"',
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
