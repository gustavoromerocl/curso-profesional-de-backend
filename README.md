# curso-profesional-de-backend

#HTTP

**Como funciona un servidor web**

Un servidor web esta compuesta por una computadora y una app, tiene la función de almacenar el backend de una aplicación y comunicarse con el cliente mediante el protocolo HTTP

**Qué es NodeJS y qué es Express**

NodeJs es un ambiente de ejecución que provee los herramientas necesarias para comunicarse con el sistema y permite la ejecución de javascript en el lado del servidor. Por otro lado, Express es un framework NodeJS para desarrollo web que se ejecuta del lado del servidor (rutas, autenticación, etc)

**HTTP**

Http es un protocolo de comunicación usado en la web para conectar el cliente con el servidor, llamese cliente a un navegador, aplicación o software que envia peticiones al servidor. Como parte de esta petición tenemos un cuerpo de datos, una serie de enbazados y el verbo http. El servidor lee la petición para enviar un respuesta.

**Verbos Http**

Antes de que comencemos a hacer peticiones con Http a un servidor, primero entendamos que hay distintos tipos de peticiones que podemos hacer hacia el servidor mismo.

Una parte de la petición que se envía hacia el servidor corresponde al método Http o verbo Http como también conocemos a este elemento.

Comunmente este método puede ser POST o GET, que son los verbos más populares, de hecho, quizás los identifiques si antes has trabajado con formularios HTML.

Estos verbos indican qué acción queremos realizar sobre el servidor y son GET, POST, PUT, PATCH, DELETE, HEAD, CONNECT, OPTIONS y TRACE. Cada uno indica una acción diferente a la que el servidor debe responder.

HEAD, por ejemplo, indica que únicamente queremos que se responda con los encabezados de la respuesta, y se ignore el cuerpo de datos. DELETE significa que queremos eliminar un recurso, etc. Vamos a hablar más de estos verbos cuando conozcamos la arquitectura REST.

Por ahora sólo necesitas saber que dependiendo de qué queremos que el servidor haga, crear elementos, enviarlos, actualizarlos, etc. será el método HTTP que usaremos para que precisamente el servidor sepa qué tiene que hacer.