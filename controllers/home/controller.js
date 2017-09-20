const House = require('../../models/houses');

let controller = {};

controller.index = (req, res) => {
    House.findAll()
    .then(houses => {
      res.render("home/index", { houses });
    })
    .catch((err) => {
      res.status(400)
      .send(err);
    });
}

module.exports = controller;
