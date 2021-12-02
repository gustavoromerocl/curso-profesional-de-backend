const Task = require('../models').Task;

module.exports = {
  home: function(req, res){
      Task.findAll().then(function(tasks){
        res.render('tasks/index', {tareas: tasks}); //el segundo parametro es una variable enviada a la vista, que contriene el resulta de la promesa con el método findAll
      })
  }  
};