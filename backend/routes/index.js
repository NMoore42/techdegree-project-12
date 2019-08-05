const express = require('express');
const router = express.Router();
const Crypto = require('../models/crypto');
const Article = require('../models/article');
const Transaction = require('../models/transaction');
const User = require('../models/user');
//const mid = require('../middleware');

/////////  USER ROUTES  ///////////

router.post("/users", (req, res, next) => {
  console.log(req.body)
  const user = new User(req.body);
  user.save( (err, user) => {
    if (err) return next(err);
    res.status(201);
    res.json(user);
  });
});


/////////  ARTICLE ROUTES  ///////////

router.get('/articles', function(req, res, next) {
  Article.find({user_id: req.user_id}, (err, articles) => {
    if (err) {
      return next(err)
    } else {
      res.status(200)
      res.json(articles)
    }
  })
});

// POST
// DELETE


/////////  CRYPTO ROUTES  ///////////

const groupBy = (collection, iteratee = (x) => x) => {
  const it = typeof iteratee === 'function' ?
    iteratee : ({ [iteratee]: prop }) => prop;

  const array = Array.isArray(collection) ? collection : Object.values(collection);

  return array.reduce((r, e) => {
    const k = it(e);

    r[k] = r[k] || [];

    r[k].push(e);

    return r;
  }, {});
};

router.get('/cryptos', function(req, res, next) {
  Crypto.find({}, (err, cryptos) => {
    if (err) {
      return next(err)
    } else {
      res.status(200)
      res.json(groupBy(cryptos, obj => obj.name))
    }
  })
});

module.exports = router;
