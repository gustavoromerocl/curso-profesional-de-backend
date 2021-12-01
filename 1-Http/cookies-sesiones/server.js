const express = require('express');
const cookieSession = require('cookie-session');

const app = express();

//Se implementa el middleware cookies-session
app.use(cookieSession({
    name: 'session',
    keys: ['sadksljñkl3123', '12312lksjdlañ'] //encriptacion
}));

app.get('/', function(req, res){
    req.session.visits = req.session.visits || 0;
    req.session.visits += 1;

    res.send(`${req.session.visits} visita(s)`);
});


app.listen(3000);