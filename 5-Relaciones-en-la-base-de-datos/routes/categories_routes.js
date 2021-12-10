const express = require('express');
let CategoryController = require('../controllers/categories');
let router = express.Router();

router.route('/categories')
    .get(CategoryController.index)
    .post(CategoryController.create);

router.route('/categories/new').get(CategoryController.new)

router.route('/categories/:id')
    .get(CategoryController.show)

module.exports = router;