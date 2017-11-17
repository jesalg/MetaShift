import express from 'express'
import models  from '../models';

const router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', {})
})

router.get('/link', function(req, res, next) {
  res.render('app', {link: models.Link.build({
    url: null, meta: {}, twitterMeta: {}, facebookMeta: {}, updatedAt: null
  }).toJSON()})
})

router.get('/link/:edit_hash', function(req, res, next) {
  models.Link.findOne({ where: {editHash: req.params.edit_hash} }).then((link) => {
    res.render('app', {link: link})
  })
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

router.patch('/link/:id', function(req, res, next) {
  models.Link.findOne({ where: {id: req.params.id} }).then(link => {
    link.update({
      url: req.body.link,
      meta: req.body.meta,
      twitterMeta: req.body.twitterMeta,
      facebookMeta: req.body.facebookMeta,
    }).then(() => {
      res.json(link.get({plain: true}));
    })
  })
})

router.get('/:view_hash', function(req, res, next) {
  models.Link.findOne({ where: {viewHash: req.params.view_hash} }).then(link => {
    res.render('show', {link: link})
  })
})

export default router
