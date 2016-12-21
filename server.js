var express = require('express'),
    app       = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    dreamsController = require('./server/controllers/dreams-controller');
    port = process.env.PORT || 8080,
    http = require('http');


var uristring = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost:27017/mvp2';

mongoose.connect(uristring, function (err, res) {
      if (err) {
      console.log ('ERROR connecting to: ' + uristring + '. ' + err);
      } else {
      console.log ('Succeeded connected to: ' + uristring);
      }
    });

app.use(bodyParser());

app.get('/', function(req, res) {

  res.sendFile(__dirname + '/client/views/index.html');

});

app.use('/js', express.static(__dirname + '/client/js'))

app.get('/', dreamsController.list);
app.post('/', dreamsController.create);

app.listen(port, function() {
  console.log('I\'m listening')
})
