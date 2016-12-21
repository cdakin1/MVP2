var Dream = require('../models/dream');

module.exports.create = function(req, res) {
  var dream = new Dream(req.body)
  dream.save(function(err, result) {
    res.json(result);
  })
}

module.exports.list = function(req, res) {
  Dream.find({}, function (err, results) {
    res.json(results);
  })
}
