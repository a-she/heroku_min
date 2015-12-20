var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

orig: app.use(express.static(__dirname + '/public'));
//app.use(express.static(__dirname + '/'));

// views is directory for all template files
app.set('views', __dirname + '/views');
//app.set('views', __dirname + '/');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
  //response.render('index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


