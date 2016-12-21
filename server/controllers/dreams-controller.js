var Dream = require('../models/dream');

module.exports.create = function(req, res) {
  var dream = new Dream(req.body)
  dream.save(function(err, result) {
    if(err) {
      console.log(err)
    } else {
      res.send(result);
    }
  })
}

module.exports.list = function(req, res) {
  Dream.find({}, function (err, results) {
    if(err) {
      console.log(err)
    } else {
      res.send(results);
    }
  })
}
