const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    static: path.resolve(__dirname, '..', './dist'),
    hot: true,
    historyApiFallback: true,
  },
  devtool: 'eval-source-map',
};