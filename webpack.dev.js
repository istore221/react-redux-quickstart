const webpack = require('webpack'),
      merge = require('webpack-merge'),
      common = require('./webpack.common.js');

module.exports = merge(common, {

  devtool: 'source-map',
  module: {
    rules: [
      {
        test:  /\.(sass|scss)$/,
        exclude:  /node_modules/,
        use: [{
                loader: "style-loader"
            },{
                loader: "css-loader",
                options: {
                  sourceMap: true
                }
            },{
                loader: "postcss-loader",
                options: {
                  autoprefixer: require('autoprefixer')()
                }
            },{
                loader: "sass-loader"
            }]
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.HashedModuleIdsPlugin()
  ]


});
