'use strict';
var webpack = require('webpack');

module.exports = function(_path) {
  return {
    context: _path,
    devtool: 'cheap-source-map',
    devServer: {
      contentBase: './dist',
      info: true,
      hot: true,
      inline: true,
      host: '0.0.0.0',
      port: 3000
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  };
};
