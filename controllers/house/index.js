const house = require('express').Router(),
  controller = require('./controller');

house.get('/:id', controller.show)
house.get('/', controller.index)

module.exports = house;
