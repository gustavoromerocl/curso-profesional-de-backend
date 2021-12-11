const express = require('express');
let CategoryController = require('../controllers/categories');
let router = express.Router();

router.route('/categories')
    .get(CategoryController.index)
    .post(CategoryController.create);

router.get('/categories/new', CategoryController.new);

router.route('/categories/:id')
    .get(CategoryController.show)
    .put(CategoryController.update);

router.get('/categories/:id/edit', CategoryController.edit);

module.exports = router;