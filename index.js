const express = require('express'),
  logger = require('morgan'),
  app = express(),
  bodyParser = require('body-parser'),
  mustacheExpress = require('mustache-express'),
  port = process.env.PORT || 3000;


app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(logger('dev'));

app.use(require('./router'))

app.listen(port, () => console.log(`server listening on ${port}`));
