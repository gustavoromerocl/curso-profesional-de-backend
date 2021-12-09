const Task = require('../models').Task;
const User = require('../models').User;


module.exports = {
  index: function(req,res){
    Task.findAll().then((tasks)=>{
      res.render('tasks/index', {tareas: req.user.tasks});
    })
  },
  show: function(req,res){
    //res.send(req.params.id);
    Task.findByPk(req.params.id, {
      include: [
        {
          model: User,
          as: 'user'
        }
      ]
    }).then(task => res.render('tasks/show', {task}))
  },
  edit: function(req,res){
    Task.findByPk(req.params.id).then(task => res.render('tasks/edit', {task}))
  },
  destroy: function(req,res){
    Task.destroy({
      where: {
        id: req.params.id
      }
    }).then(response => res.redirect('/tasks'));
  },
  create: function(req,res){
    Task.create({
      description: req.body.description,
      userId: req.user.id
    }).then(result =>{
      res.json(result);
    }).catch(err=>{
      console.log(err);
      res.json(err);
    })
  },
  update: function(req,res){
    Task.update({description: req.body.description},{
      where: {
        id: req.params.id
      }
    }).then((response) => {
      //res.json(response) // retorna un contador de los elementos actualizados
      res.redirect(`/tasks/${req.params.id}`)
    });
  },
  new: function(req,res){
    res.render('tasks/new');
  }
};