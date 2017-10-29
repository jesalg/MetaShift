var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
      home: [
              path.join(__dirname, 'public/css/normalize.css')
            ],
      app:  [
              path.join(__dirname, 'client/index.js'),
              path.join(__dirname, 'public/css/normalize.css'),
              path.join(__dirname, 'public/css/app.css'),
            ]
  },
  output: {
    path: path.join(__dirname, 'public/dist/'),
    publicPath: '/dist/',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.vue']
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: [
          { loader: 'vue-loader' }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015']
            }
          }
        ]
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: {
            loader: 'css-loader',
            options: { minimize: true }
          }
        })
      },
    ]
  },
  devtool: 'eval-source-map',
  plugins: [
    new ExtractTextPlugin({publicPath: '/dist/', filename: '[name].css', allChunks: true}),
    new webpack.HotModuleReplacementPlugin()
  ]
}
