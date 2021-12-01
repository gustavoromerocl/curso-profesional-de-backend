const express = require('express');
const sqlite = require('sqlite3');
const bodyParser = require('body-parser');

const app = express();

//let db = new sqlite3.Database(':memory'); //crea una base de datos temporal almacenada en la ram

let db = new sqlite.Database('proyecto-backend');

//db.run('CREATE TABLE tasks(id int AUTO_INCREMENT, description varchar(255))');

app.use(bodyParser.urlencoded({extended: true}));

app.post('/pendientes', function(req, res){
    db.run("INSERT INTO tasks VALUES('Hola mundo')");
    res.send('Inserción finalizada');
});



app.listen(3000);

//cerrar la conexión a la base de datos cuando se haga ctrl + c
process.on('SIGINT', function(){
    console.log("Adios - atentamente el servidor");
    db.close();
    process.exit();
})