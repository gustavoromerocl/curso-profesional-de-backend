const express = require('express');

const app = express();

app.set('view engine', 'ejs')
 
//Servir archivos staticos
app.use('/assets',express.static('assets', {
    etag: false, //desactiva ETag, por defecto viene en true
    maxAge: '5h'
})); // use inserta un nuevo middleware

/*//Enviar html
app.get('/', function(req,res){
    res.sendFile('index.html', {
        root: __dirname
    })
    //res.send(__dirname)
})
*/

app.get('/', function(req,res){
    res.render('index');
})

app.listen(3000);

