const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: resolve('src', 'index.ts'),
  },
  output: {
    path: resolve('build'),
    filename: 'main.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        test: /\.s[ac]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('src', 'index.html'),
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
