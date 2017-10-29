import express from 'express'

const router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MetaShift' })
})

/* GET home page. */
router.get('/app', function(req, res, next) {
  res.render('app', { title: 'MetaShift' })
})

export default router
