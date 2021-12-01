const express = require('express');
const sqlite = require('sqlite3');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

const app = express();

//conectando el ORM SequelizeJS
const sequelize = new Sequelize('proyecto-backend', null, null, {
    dialect: 'sqlite', //indica el motor de base de datos a usar
    storage: './proyecto-backend' //indica la ruta del archivo que contiene la bbdd
});

app.use(bodyParser.urlencoded({extended: true}));

app.post('/pendientes', function(req, res){
    //db.run(`INSERT INTO tasks(description) VALUES(?)`, req.body.description);
    res.send('Inserción finalizada');
});



app.listen(3000);
