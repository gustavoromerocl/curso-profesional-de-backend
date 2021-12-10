const express = require('express');
let RegistarionController = require('../controllers/categories');
let router = express.Router();

router.route('/categories').get(RegistarionController.new).post(RegistarionController.create);

module.exports = router;