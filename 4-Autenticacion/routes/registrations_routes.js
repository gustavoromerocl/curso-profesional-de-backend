const express = require('express');

let RegistrationController = require('../controllers/registrations')
let router = express.Router();


router.get('/signup', RegistrationController.new); //recibe el controlador

router.route('/users').post(RegistrationController.create)

module.exports = router; //exporta el objeto routes