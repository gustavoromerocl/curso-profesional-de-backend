const sqlite = require('sqlite3');

//let db = new sqlite3.Database(':memory'); crea una base de datos temporal almacenada en la ram

let db = new sqlite.Database('proyecto-backend');

db.run('CREATE TABLE tasks(id int AUTO_INCREMENT, description varchar(255))');

db.close();