const express = require('express');
const sqlite = require('sqlite3');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const methodOverride = require('method-override');

const app = express();

//importar archivo de rutas
const tasksRoutes = require('./routes/tasks_routes');
const registrationsRoutes = require('./routes/registrations_routes');
const sessionsRoutes = require('./routes/sessions_routes');

//const tasks = require('./controllers/tasks'); //importa el controlador

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'pug'); //Asigna el motor de vistas
app.use(methodOverride('_method'));

//agregar las rutas a la aplicación
app.use(tasksRoutes);
app.use(registrationsRoutes);
app.use(sessionsRoutes);

//Rutas

/* app.get('/tasks', tasks.home); //crea la ruta y usa el controlador para acceder a la funcion home
app.post('/pendientes', function(req, res){
    //db.run(`INSERT INTO tasks(description) VALUES(?)`, req.body.description);
    res.send('Inserción finalizada');
}); */



app.listen(3000);
