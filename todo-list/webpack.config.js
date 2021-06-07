const webpack = require('webpack');
const { resolve } = require('path');

module.exports = {
  mode: 'development',
  plugins: [
    new webpack.DefinePlugin({
      'STABLE_FEATURE': JSON.stringify(true),
      'EXPERIMENTAL_FEATURE': JSON.stringify(false)
    })
  ],
  resolve: {
    extensions: ['.js', '.ts'],
  },
  devServer: {
    open: true,
    port: 4000,
    contentBase: resolve('build'),
  }
}
