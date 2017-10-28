var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
      home: [
              path.join(__dirname, 'src/server/public/css/normalize.css')
            ],
      app:  [
              path.join(__dirname, 'src/client/index.js'),
              path.join(__dirname, 'src/server/public/css/normalize.css'),
              path.join(__dirname, 'src/server/public/css/app.css'),
            ]
  },
  output: {
    path: path.join(__dirname, 'src/server/public/dist/'),
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
        test: /\.json$/,
        use: [
          {
            loader: 'json-loader',
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: '[name].[ext]?[hash:7]'
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader?url=false" }
        ]
      },
    ]
  },
  devtool: 'eval-source-map',
  plugins: [
    new ExtractTextPlugin("[name].min.css", {allChunks: true}),
    new webpack.HotModuleReplacementPlugin()
  ]
}
