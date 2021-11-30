const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use( bodyParser.urlencoded({extended: true})); //body parser ayuda a express a decodificar el cuerpo de la petición


//cuando los params son enviados con el metodo get se usa query
app.get('/saludo', function(req,res){
    res.send(`Hola ${req.query.name}`);
});

//cuando los params van en el cuerpo de la petición usamos body
app.post('/', function(req,res){
    res.send(`Hola ${req.body.name}`);
})

//POSTMAN GET: http://localhost:3000/saludo?name=Tabo

app.listen(3000);