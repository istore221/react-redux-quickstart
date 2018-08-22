const webpack = require('webpack'),
      merge = require('webpack-merge'),
      common = require('./webpack.common.js')
      CleanWebpackPlugin = require('clean-webpack-plugin'),
      HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: '[name]-[hash:6].bundle.js'
  },
  devServer: {
    host: '0.0.0.0',
    port: 3001,
    contentBase: './dist',
    historyApiFallback: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(png|jpg|gif|svg|ico)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          outputPath: 'assets/images/',
          name: "[name].[hash].[ext]"
        }
      }


    ]

  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV | "development"),
        API_URL: JSON.stringify(process.env.API_URL)
      },
    }),
    new CleanWebpackPlugin(['./dist']),
    new HtmlWebpackPlugin({
      template: './src/index.ejs',
      filename: 'index.html'
    })
  ]


}
