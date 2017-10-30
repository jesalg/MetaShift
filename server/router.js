import express from 'express'
import models  from '../models';

const router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {  })
})

router.get('/link', function(req, res, next) {
  res.render('app', {  })
})

router.get('/link/:edit_hash', function(req, res, next) {
  res.render('app', {  })
})

router.post('/link', function(req, res, next) {
  models.Link.create({
      url: req.body.link,
      meta: req.body.meta,
      twitterMeta: req.body.twitterMeta,
      facebookMeta: req.body.facebookMeta,
    }).then(function(link) {
      res.json(link.get({plain: true}));
    });
})

router.patch('/link/:edit_hash', function(req, res, next) {

})

export default router
