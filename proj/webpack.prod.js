const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimizer: [new TerserPlugin()],
  },
  plugins: [
    new ESLintPlugin({ extensions: ['js', 'ts'] }),
  ],
});
