const House = require('../../models/houses');

let controller = {};

controller.index = (req, res) => {
    House.findAll()
    .then(houses => {
        res.render("houses/index", { houses });
    })
    .catch((err) => {
      res.status(400)
      .send(err);
    });
}

controller.show = (req, res) => {
    House.findStudentsById(req.params.id)
    .then(house => {
        res.render("houses/show", { house });
    })
    .catch((err) => {
      res.status(400)
      .send(err);
    });
}

module.exports = controller;
