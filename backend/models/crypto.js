const mongoose = require('mongoose');


const CryptoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  ticker: {
    type: String,
    required: true
  },
  created_at: {
    type: String,
    required: true
  },
  updated_at: {
    type: String,
    required: true
  }
});


const Crypto = mongoose.model('Crypto', CryptoSchema);
module.exports = Crypto;
