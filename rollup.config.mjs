import { defineConfig } from 'rollup';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser'

export default defineConfig( {
	input: 'src/index.js',
	output: {
		file: 'dist/rollup.js',
		format: 'es'
	},
	plugins: [
		commonjs( {
			sourceMap: true,
			defaultIsModuleExports: true
		} ),
		nodeResolve( {
			browser: true,
			preferBuiltins: false
		} ),
		terser({
			format: {
        comments: false,
      },
			compress: {
				passes: 0
			}
		})
		// esbuild( {
		// 	include: /\.js$/,
		// 	minify: true,
		// 	legalComments: 'none',
		// 	target: 'es2022'
		// } )
	]
} );
