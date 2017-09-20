const home = require('express').Router(),
  controller = require('./controller');

home.get('/', controller.index)

module.exports = home;
