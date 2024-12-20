import { defineConfig } from "vite";

export default defineConfig({
  build: {
    target: "es2022",
    emptyOutDir: false,
    assetsDir: ".",
    rollupOptions: {
      input: {
        app: "./vite.html",
      },
      output: {
        entryFileNames: "vite.js",
        format: "es",
      },
    },
    minify: "terser",
    terserOptions: {
      compress: {
        passes: 0,
      },
      format: {
        comments: false,
      },
    },
  },
  esbuild: {
    legalComments: "none",
  },
});
