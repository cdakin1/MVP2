var express = require('express'),
    app       = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    dreamsController = require('./server/controllers/dreams-controller');
    port = process.env.PORT || 8080;

mongoose.connect('mongodb://localhost:27017/mvp2');

app.use(bodyParser());

app.get('/', function(req, res) {

  res.sendFile(__dirname + '/client/views/index.html');

});

app.use('/js', express.static(__dirname + '/client/js'))

app.get('/api/dreams', dreamsController.list);
app.post('/api/dreams', dreamsController.create);

app.listen(port, function() {
  console.log('I\'m listening')
})
