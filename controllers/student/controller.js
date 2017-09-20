const Student = require("../../models/students");

let controller = {};

controller.index = (req, res) => {
    Student.findAll()
    .then(students => {
        res.render("students/index", {
            students
        })
    });
    .catch((err) => {
        res
        .status(400)
        .send(err);
    });
}

controller.edit = (req, res) => {
    Student.findById(req.params.id)
    .then(student => {
        res.render("students/edit", student);
    })
    .catch((err) => {
        res
        .status(400)
        .send(err);
    });
}

controller.show = (req, res) => {
    Student.findById(req.params.id)
    .then(student => {
        res.render("students/show", student);
    })
    .catch((err) => {
        res
        .status(400)
        .send(err);
    });
}

controller.create = (req, res) => {
    console.log(req.body);
    Student.save(req.body)
    .then((data) => {
        res.json(data);
    })
    .catch((err) => {
        res
        .status(400)
        .send(err);
    });
}

controller.update = (req, res) => {
    Student.update(req.body, req.params.id)
    .then(data => {
        res.json(data);
    })
    .catch((err) => {
        res
        .status(400)
        .send(err);
    });
}

controller.destroy = (req, res) => {
    Student.destroy(req.params.id)
    .then(data => res.json(data))
    .catch((err) => {
        res
        .status(400)
        .send(err);
    });
}

module.exports = controller;
