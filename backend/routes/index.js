const express = require('express');
const router = express.Router();
const Crypto = require('../models/crypto');
const Article = require('../models/article');
const Transaction = require('../models/transaction');
const User = require('../models/user');
//const mid = require('../middleware');


///////// ROUTE FUNCTIONS //////////

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

// const getUserCoins = (user_id) => {
//   let transObj = groupBy(Transaction.find({user_id: user_id}), obj => Crypto.find({obj.crypto_id}).name)
//   let myCurrencies = {}
//   for (let obj in transObj) {
//
//   }
//
// }
//
// def self.get_user_coins(id)
//     transHash = Transaction.all.where(user_id: id).group_by {|trx| Crypto.find(trx.crypto_id).name}
//     mycurrencies = {}
//     transHash.each do |name, values|
//       qty = values.map do |value|
//         value.quantity
//       end
//       mycurrencies[name] = qty.reduce(:+)
//     end
//     mycurrencies
//   end

// for (var property1 in object1) {
//   string1 += object1[property1];
// }

/////////  USER ROUTES  ///////////

//GET /users

// def login
//   email = params[:email]
//   password = params[:password]
//   @user = User.all.find_by(email: email, password: password)
//   if @user
//     @coins = Transaction.get_user_coins(@user.id)
//     @transactions = @user.transactions.reverse
//     @articles = @user.articles
//     render json: {user: @user, coins: @coins, transactions: @transactions, articles: @articles}
//   else
//     @errors = ["Invalid credentials, please try again"]
//     render json: @errors
//   end

//POST /login
router.post('/login', function(req, res, next) {
  if (req.body.email && req.body.password) {
    User.authenticate(req.body.email, req.body.password, (error, user) => {
      if (error || !user) {
        const err = new Error('Wrong email or password.');
        err.status = 401;
        return next(err);
      } else {
        //req.session.userId = user._id;
        // let coins = Transaction.
        res.json({user: user, transactions: [], coins: [], articles: []})
      }
    });
  } else {
    var err = new Error('Email and Password are required.');
    err.status = 400;
    return next(err);
  }
});

//POST /users
router.post("/users", (req, res, next) => {
  console.log(req.body)
  const user = new User(req.body);
  user.save( (err, user) => {
    if (err) return next(err);
    res.status(201);
    res.json({user: user, transactions: [], coins: [], articles: []});
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
