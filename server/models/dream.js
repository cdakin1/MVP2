var mongoose = require('mongoose');
module.exports = mongoose.model('Dream', {
  author: String,
  title: String,
  body: String,
  tags: String
});
