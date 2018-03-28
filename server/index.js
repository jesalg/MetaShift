import express from 'express'
import path from 'path'
import favicon from 'serve-favicon'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackAssets from 'express-webpack-assets'
import forceSSL from 'express-force-ssl'

import router from './router'
import config from '../webpack.config'

const NODE_ENV = process.env.NODE_ENV || 'development';
const app = express()

// view engine setup
app.set('views', path.join('views'))
app.set('view engine', 'jade')

// uncomment after placing your favicon in /public
app.use(favicon(path.join('public', 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join('public')))

if (NODE_ENV === 'production') {
  app.use(forceSSL);
  app.use(express.static(__dirname + '/dist'));
} else {
  const compiler = webpack(config)
  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: { colors: true }
  }))
  app.use(webpackHotMiddleware(compiler))
}
app.use(webpackAssets('./config/webpack-assets.json', {
	devMode: NODE_ENV !== 'production'
}));

app.use('/', router)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
// will print stacktrace
app.use(function(err, req, res, next) {
  res.status(err.status || 500)
  res.render('error', {
    message: err.message,
    error: err
  })
})

app.listen(process.env.PORT || 4000)

export default app
