import express from 'express'
import models  from '../models';
import request from 'request';

const router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', {})
})

router.get('/link', function(req, res, next) {
  res.render('app', {link: models.Link.build({
    url: req.query.url, meta: {url: req.query.url}, twitterMeta: {}, facebookMeta: {}, updatedAt: null
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

router.post('/contact', function(req, res, next) {
  const options = {
    url: 'https://api.sendgrid.com/v3/contactdb/recipients',
    method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + process.env.SENDGRID_MARKETING_API_KEY
    },
    body: [{email: req.body.email}],
    json: true
  };
  
  function callback(error, response, body) {
    if (!error && (response.statusCode >= 200 || response.statusCode <= 202)) {
      res.json({status: 'success'})
    } else {
      res.status(response.statusCode).json({status: 'error'})
    }
  }

  request(options, callback);
})

router.get('/:view_hash', function(req, res, next) {
  models.Link.findOne({ where: {viewHash: req.params.view_hash} }).then(link => {
    models.Visitor.create({
      linkId: link.id,
      userAgent: req.get('User-Agent'),
      ip: req.ip,
    });
    res.render('show', {link: link})
  })
})

export default router
