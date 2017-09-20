const student = require('express').Router(),
  controller = require('./controller')

student.put('/:id', controller.update)

student.delete('/:id', controller.destroy)

student.post('/', controller.create)

student.get('/:id/edit', controller.edit)
student.get('/:id', controller.show)
student.get('/', controller.index)


module.exports = student;
