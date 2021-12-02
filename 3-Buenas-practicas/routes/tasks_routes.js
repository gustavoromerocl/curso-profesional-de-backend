const express = require('express');
let TasksController = require('../controllers/tasks')

let router = express.Router();

router.route('/tasks').get(TasksController.index).post(TasksController.create);

router.get('/tasks/new', TasksController.new); // no genera efectos secundarios en nuestra app

router.get('/tasks/:id/edit', TasksController.edit);

router.route('/tasks/:id').get(TasksController.show).put(TasksController.update); //wildcard

module.exports = router;