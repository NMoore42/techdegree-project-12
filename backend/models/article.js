const mongoose = require('mongoose');


const ArticleSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  coin: {
    type: String,
    required: true
  },
  url: {
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


const Article = mongoose.model('Article', ArticleSchema);
module.exports = Article;
