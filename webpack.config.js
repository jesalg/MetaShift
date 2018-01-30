var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var isProd = (process.env.NODE_ENV === 'production');

var config = {
  entry: {
      home: [
              path.join(__dirname, 'client/home.js'),
              path.join(__dirname, 'public/css/normalize.css'),
              path.join(__dirname, 'public/css/home.css')
            ],
      app:  [
              path.join(__dirname, 'client/app.js'),
              path.join(__dirname, 'public/css/normalize.css'),
              path.join(__dirname, 'public/css/app.css'),
              path.join(__dirname, 'public/css/tooltip.css'),
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
        test: /\.svg/,
        use: {
            loader: 'svg-url-loader',
            options: {}
          }
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
}

if (isProd) {
  config.plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = config
