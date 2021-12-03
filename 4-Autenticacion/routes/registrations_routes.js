const express = require('express');

let RegistrationController = require('../controllers/registrations')
let router = express.Router();


router.get('/signup', RegistrationController.new); //recibe el controlador

module.exports = router; //exporta el objeto routes