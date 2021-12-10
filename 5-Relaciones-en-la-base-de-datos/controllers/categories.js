const Category = require('../models').Category;

module.exports = {
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
    }

}