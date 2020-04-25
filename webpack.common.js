const webpack = require('webpack');
const path = require('path');
const srcPath = path.join(__dirname, 'app');

module.exports = {
  entry: {
    entry: path.resolve(srcPath + '/index.ts')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [".ts", ".js", ".styl"],
    modules: [
      'node_modules'
    ]
  },
  module: {
    rules: [
      {
        test: /\.ts?$/, loader: 'awesome-typescript-loader',
      },
      {
        test: /\.styl$/,
        include: srcPath,
        use: [
          'style-loader',
          {
            loader: 'typings-for-css-modules-loader',
            options: {
              modules: true,
              namedExport: true,
              localIdentName: "[name]_[local]__[hash:base64:5]"
            }
          },
          'stylus-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              exportOnlyLocals: true
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }
    ]
  }
};
