const express = require('express');
const sqlite = require('sqlite3');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const methodOverride = require('method-override');
const session = require('express-session');
const findUserMiddleware = require('./middlewares/find_user');
const authUserMiddleware = require('./middlewares/auth_user');

const socketio = require('socket.io');

const app = express();

//importar archivo de rutas
const tasksRoutes = require('./routes/tasks_routes');
const registrationsRoutes = require('./routes/registrations_routes');
const sessionsRoutes = require('./routes/sessions_routes');
const categoriesRoutes = require('./routes/categories_routes');


//const tasks = require('./controllers/tasks'); //importa el controlador

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'pug'); //Asigna el motor de vistas
app.use(methodOverride('_method'));

//agregar las rutas a la aplicación
app.use(session({
    secret:['23lñwkjejqwekff', 'a2342mdslañdcn'],
    saveUninitialized: false,
    resave: false
}));

app.use(authUserMiddleware);
app.use(findUserMiddleware);
app.use(tasksRoutes);
app.use(registrationsRoutes);
app.use(sessionsRoutes);
app.use(categoriesRoutes);


app.get('/', function(req,res){
    res.render('home', {user: req.user})
});


//Rutas

/* app.get('/tasks', tasks.home); //crea la ruta y usa el controlador para acceder a la funcion home
app.post('/pendientes', function(req, res){
    //db.run(`INSERT INTO tasks(description) VALUES(?)`, req.body.description);
    res.send('Inserción finalizada');
}); */



let server = app.listen(3000);
let io = socketio(server);
let sockets = {}



let usersCount = 0;

io.on('connection', function(socket){

    let userId = socket.request._query.loggeduser

    if (userId) sockets[userId] = socket

    //console.log(sockets);
    //Actualizar usuario en tiempo real
    usersCount++;

    io.emit('count_updated', {count: usersCount});


    socket.on('new_task', function(data){
        //console.log("user ID" + data.userId);
        if(data.userId){
            let userSocket = sockets[data.userId];
            if(!userSocket) return;

            userSocket.emit('new_task', data);
        }
    });

    socket.on('disconnect', function(){

        Object.keys(sockets).forEach(userId => {
            let s = sockets[userId];
            if(s.id == socket.id) sockets[userId] = null       
        });

        //console.log(sockets);

        usersCount--;
        io.emit('count_updated', {count: usersCount});
    })
})

const client = require('./realtime/client');
