import { defineConfig } from "@rspack/cli";
import { SwcJsMinimizerRspackPlugin } from "@rspack/core";

// The commented out options are valid, but for some reason increase the bundle size by a lot.

export default defineConfig({
  entry: "./src/index.js",
  devtool: false,
  // target: 'es2022',
  output: {
    // chunkFormat: 'module',
    // chunkLoading: 'import',
    filename: "rspack.js",
    clean: false,
  },
	optimization: {
		minimize: true,
		minimizer: [
			new SwcJsMinimizerRspackPlugin({
				minimizerOptions: {
					compress: {
            passes: 0,
						ecma: 2020,
          },
					// mangle: false,
          format: {
            comments: false
          }
				}
			})
		]
	}
});
