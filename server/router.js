import express from 'express'
import models  from '../models';

const router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {})
})

router.get('/new', function(req, res, next) {
  res.render('app', {})
})

router.get('/edit/:edit_hash', function(req, res, next) {
  models.Link.findOne({ where: {editHash: req.params.edit_hash} }).then(link => {
  }).then(() => {
    res.render('app', {link: link})
  })
})

router.post('/create', function(req, res, next) {
  models.Link.create({
      url: req.body.link,
      meta: req.body.meta,
      twitterMeta: req.body.twitterMeta,
      facebookMeta: req.body.facebookMeta,
    }).then(function(link) {
      res.json(link.get({plain: true}));
    });
})

router.patch('/update/:edit_hash', function(req, res, next) {
  models.Link.findOne({ where: {editHash: req.params.edit_hash} }).then(link => {
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
