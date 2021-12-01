const http = require('http'); //importa una api del entorno nodejs

//Se indica que imprima hola mundo ante cualquier request
function responderPeticion(request, response){
    response.end('Hola mundo');
}

//configura el server con la funcion que recibe 
let server = http.createServer(responderPeticion);

//Levanta un servidor escuchando en el puerto 3000
server.listen(3000);

//El servidor queda a la espera de una petición en el puerto 3000 (localhost:3000) localhost: dominio , 3000: puerto