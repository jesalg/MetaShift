import express from 'express'
import models  from '../models';
import request from 'request';
import unfurl from 'unfurl.js';

const router = express.Router()

const sendEmail = function(link) {
  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  sgMail.setSubstitutionWrappers('{{', '}}'); // Configure the substitution tag wrappers globally
  const msg = {
    to: link.email,
    from: 'MetaShift <no-reply@metashift.io>',
    subject: `Link To Edit: ${link.url}`,
    templateId: '04f32a65-1333-41cf-be4d-857cfdb1add0',
    substitutions: {
      metashiftLink: `http://metashift.io/link/${link.editHash}`
    },
  };
  sgMail.send(msg);
}

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
  const shouldSendEmail = req.body.email && req.body.email.length > 0
  models.Link.create({
      url: req.body.link,
      meta: req.body.meta,
      twitterMeta: req.body.twitterMeta,
      facebookMeta: req.body.facebookMeta,
      email: req.body.email,
    }).then((link) => {
      if (shouldSendEmail) {
        sendEmail(link);
      }
      res.json(link.get({plain: true}));
    });
})

router.patch('/link/:id', function(req, res, next) {
  models.Link.findOne({ where: {id: req.params.id} }).then(link => {
    const shouldSendEmail = !link.email && req.body.email && req.body.email.length > 0
    link.update({
      url: req.body.link,
      meta: req.body.meta,
      twitterMeta: req.body.twitterMeta,
      facebookMeta: req.body.facebookMeta,
      email: req.body.email,
    }).then((link) => {
      if (shouldSendEmail) {
        sendEmail(link);
      }
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

router.post('/meta', function(req, res, next) {
  unfurl(req.body.link)
  .then((result) => {
    res.json(result);
  });
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
