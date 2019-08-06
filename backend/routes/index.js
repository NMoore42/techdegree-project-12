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

const getUserCoins = (user_id) => {
  let myCurrencies = {}
  Transaction.find({user_id: user_id}, (err, transactions) => {
    let transObj = groupBy(transactions, obj => obj.coin)
    for (let obj in transObj) {
      let qty = transObj[obj]
      qty = qty.map(value => value.quantity)
      myCurrencies[obj] = qty.reduce((acc, cur) => acc + cur)
    }
    console.log(myCurrencies)
    return myCurrencies
  })
}





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
    let myCurrencies = {}
    User.authenticate(req.body.email, req.body.password, (error, user) => {
      if (error || !user) {
        const err = new Error('Wrong email or password.');
        err.status = 401;
        return next(err);
      } else {
        Transaction.find({user_id: user._id}, (err, transactions) => {
          let transObj = groupBy(transactions, obj => obj.coin)
          for (let obj in transObj) {
            let qty = transObj[obj]
            qty = qty.map(value => value.quantity)
            myCurrencies[obj] = qty.reduce((acc, cur) => acc + cur)
          }
          Article.find({user_id: user._id}, (err, articles) => {
            res.json({user: user, transactions: transactions, coins: myCurrencies, articles: articles})
          })
        })
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
  const user = new User(req.body);
  user.save( (err, user) => {
    if (err) return next(err);
    res.status(201);
    res.json({user: user, transactions: [], coins: [], articles: []});
  });
});

//DELETE /users/:id
router.get('/users/:id', function(req, res, next) {
  User.remove({_id: req.params.id}, (err, user) => {
    if (err) {
      return next(err)
    } else {
      res.status(200)
      res.json(user)
    }
  })
});


/////////  ARTICLE ROUTES  ///////////

//POST /articles
router.post('/articles', function(req, res, next) {
  const article = new Article(req.body);
  article.save( (err, article) => {
    if (err) return next(err);
    res.status(201);
    res.json(article);
  });
});

//POST /articlesdelete
router.post('/articlesdelete', function(req, res, next) {
  Article.remove({user_id: req.body.user_id, url: req.body.url}, (err, article) => {
    if (err) {
      return next(err)
    } else {
      res.status(200)
      res.json(article)
    }
  })
});


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


/////////  TRANSACTION ROUTES  ///////////

//POST /transactions
router.post('/transactions', function(req, res, next) {
  const transaction = new Transaction(req.body);
  transaction.save( (err, transaction) => {
    if (err) return next(err);
    res.status(201);
    res.json(transaction);
  });
});



module.exports = router;
