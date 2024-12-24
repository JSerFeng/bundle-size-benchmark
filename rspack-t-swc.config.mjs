import { defineConfig } from '@rspack/cli';
import Terser from 'terser-webpack-plugin';

// The commented out options are valid, but for some reason increase the bundle size by a lot.

export default defineConfig({
	entry: './src/index.js',
	devtool: false,
	output: {
		filename: 'rspack-terser-swc.js',
		clean: false
	},
	optimization: {
		minimizer: [	
			new Terser( { 
        minify: Terser.swcMinify,
        terserOptions: {
          compress: {
            passes: 0,
						ecma: 2020,
          },
          format: {
            comments: false
          }
        }
      } )
		]
	}
} );
