var express = require('express');
var app = express();
app.use(express.static('views'))
app.set('view engine', 'pug');
app.set('views', './views');
app.use('/', function(req, res, next) {
  console.log('I am middleware for the request sent');
  next();
});

app.get('/', function (req, res) {
    res.send('Request received');
});

app.get('/my-page', function(req, res){
    res.render('my-page', {
      name: 'Greetings from my dynamic page.',
      url: ''
    });
});

app.listen(3000);
app.use(function (req, res, next) {
    res.status(404).send('We could not find what you requested!')
});
