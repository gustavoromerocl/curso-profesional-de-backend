const express = require('express');
const sqlite = require('sqlite3');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

const app = express();

const tasks = require('./controllers/tasks'); //importa el controlador

//conectando el ORM SequelizeJS
/* const sequelize = new Sequelize('proyecto-backend', null, null, {
    dialect: 'sqlite', //indica el motor de base de datos a usar
    storage: './proyecto-backend' //indica la ruta del archivo que contiene la bbdd
}); */

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'pug'); //Asigna el motor de vistas

//Rutas

app.get('/tasks', tasks.home); //crea la ruta y usa el controlador para acceder a la funcion home
app.post('/pendientes', function(req, res){
    //db.run(`INSERT INTO tasks(description) VALUES(?)`, req.body.description);
    res.send('Inserción finalizada');
});



app.listen(3000);
