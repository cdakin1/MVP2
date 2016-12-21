var express = require('express'),
    app       = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    dreamsController = require('./server/controllers/dreams-controller');

mongoose.connect('mongodb://localhost:27017/meanStackPractice');

app.use(bodyParser());

app.get('/', function(req, res) {

  res.sendFile(__dirname + '/client/views/index.html');

});

app.use('/js', express.static(__dirname + '/client/js'))

app.get('/api/dreams', dreamsController.list);
app.post('/api/dreams', dreamsController.create);

app.listen(3000, function() {
  console.log('I\'m listening')
})
