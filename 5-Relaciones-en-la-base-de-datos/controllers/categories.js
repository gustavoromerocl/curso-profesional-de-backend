const Category = require('../models').Category;

module.exports = {
    index: function(req,res){
        Category.findAll().then(categories => res.render('categories/index', {categories}))
    },
    show: function(req,res){
        Category.findByPk(req.params.id).then( category => res.render('categories/show', {category}));
    },
    new: function(req, res){
        res.render('categories/new');
    },
    create: function(req, res){
        let data = {
            title: req.body.title,
            color: req.body.color
        }

        Category.create(data).then( category => {
            res.json(category);
        })
        .catch(err => res.jason(err));
    },
    edit: function(req,res){
        Category.findByPk(req.params.id).then( category => res.render('categories/edit', {category}));
    }
}