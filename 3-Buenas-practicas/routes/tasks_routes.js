const express = require('express');

let router = express.Router();

router.route('/tasks').get(function(req, res){
    res.send("Hola mundo desde una subruta")
}).post(function(){

})

module.exports = router;