const mongoose = require('mongoose');


const TransactionSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true
  },
  crypto_id: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  coin: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
});


const Transaction = mongoose.model('Transaction', TransactionSchema);
module.exports = Transaction;
