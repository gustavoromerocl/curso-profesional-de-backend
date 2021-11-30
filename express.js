const express = require('express');

const app = express();

app.get('/saludo', function(req,res){
    res.send(`Hola ${req.query.name}`);
});

//POSTMAN GET: http://localhost:3000/saludo?name=Tabo

app.listen(3000);