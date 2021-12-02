const express = require('express');
let TasksController = require('../controllers/tasks')

let router = express.Router();

router.route('/tasks').get(TasksController.index).post(TasksController.create);

router.get('/tasks/new', TasksController.new); // no genera efectos secundarios en nuestra app

router.route('/tasks/:id').get(TasksController.show); //wildcard

module.exports = router;