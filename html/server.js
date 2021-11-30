const express = require('express');

const app = express();
 
//Servir archivos staticos
app.use('/assets',express.static('assets')); // use inserta un nuevo middleware

//Enviar html
app.get('/', function(req,res){
    res.sendFile('index.html', {
        root: __dirname
    })
    //res.send(__dirname)
})

app.listen(3000);