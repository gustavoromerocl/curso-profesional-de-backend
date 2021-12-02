const Task = require('../models').Task;

module.exports = {
  index: function(req,res){
    Task.findAll().then((tasks)=>{
      res.render('tasks/index', {tareas: tasks});
    })
  },
  show: function(req,res){
    //res.send(req.params.id);
    Task.findByPk(req.params.id).then(task => res.render('tasks/show', {task}))
  },
  create: function(req,res){
    Task.create({
      description: req.body.description
    }).then(result =>{
      res.json(result);
    }).catch(err=>{
      console.log(err);
      res.json(err);
    })
  },
  new: function(req,res){
    res.render('tasks/new');
  }
};