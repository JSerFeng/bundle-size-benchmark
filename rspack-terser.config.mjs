import Terser from 'terser-webpack-plugin';

export default {
  entry: './src/index.js',
  output: {
    filename: 'rspack-terser.js',
    clean: false
  },
  optimization: {
    minimize: true,
    minimizer: [
      new Terser( { 
        minify: Terser.terserMinify,
        terserOptions: {
					compress: {
						passes: 0
					},
          format: {
            comments: false
          }
        }
      } )
    ]
  }
};
