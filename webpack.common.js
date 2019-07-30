const webpack = require('webpack'),
      { CleanWebpackPlugin } = require('clean-webpack-plugin'),
      HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
  //  publicPath: '/',
    filename: '[name]-[hash:6].bundle.js'
  },
  devServer: {
    host: 'localhost',
    port: 3001,
    contentBase: './dist',
    historyApiFallback: true,
    hot: true
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader','eslint-loader']
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
    }]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.ejs',
      filename: './index.html'
    })
  ]
}
