const express = require('express');
let TasksController = require('../controllers/tasks')

let router = express.Router();

router.route('/tasks').get(function(req, res){
    res.send("Hola mundo desde una subruta")
}).post(TasksController.create);

router.get('/tasks/new', TasksController.new); // no genera efectos secundarios en nuestra app

module.exports = router;