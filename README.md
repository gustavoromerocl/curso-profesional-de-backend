# curso-profesional-de-backend

#HTTP

**Como funciona un servidor web**

Un servidor web esta compuesta por una computadora y una app, tiene la función de almacenar el backend de una aplicación y comunicarse con el cliente mediante el protocolo HTTP

**Qué es NodeJS y qué es Express**

NodeJs es un ambiente de ejecución que provee los herramientas necesarias para comunicarse con el sistema y permite la ejecución de javascript en el lado del servidor. Por otro lado, Express es un framework NodeJS para desarrollo web que se ejecuta del lado del servidor (rutas, autenticación, etc)

**El protocolo HTTP**

Http es un protocolo de comunicación usado en la web para conectar el cliente con el servidor, llamese cliente a un navegador, aplicación o software que envia peticiones al servidor. Como parte de esta petición tenemos un cuerpo de datos, una serie de enbazados y el verbo http. El servidor lee la petición para enviar un respuesta.

**Verbos Http**

Antes de que comencemos a hacer peticiones con Http a un servidor, primero entendamos que hay distintos tipos de peticiones que podemos hacer hacia el servidor mismo.

Una parte de la petición que se envía hacia el servidor corresponde al método Http o verbo Http como también conocemos a este elemento.

Comunmente este método puede ser POST o GET, que son los verbos más populares, de hecho, quizás los identifiques si antes has trabajado con formularios HTML.

Estos verbos indican qué acción queremos realizar sobre el servidor y son GET, POST, PUT, PATCH, DELETE, HEAD, CONNECT, OPTIONS y TRACE. Cada uno indica una acción diferente a la que el servidor debe responder.

HEAD, por ejemplo, indica que únicamente queremos que se responda con los encabezados de la respuesta, y se ignore el cuerpo de datos. DELETE significa que queremos eliminar un recurso, etc. Vamos a hablar más de estos verbos cuando conozcamos la arquitectura REST.

Por ahora sólo necesitas saber que dependiendo de qué queremos que el servidor haga, crear elementos, enviarlos, actualizarlos, etc. será el método HTTP que usaremos para que precisamente el servidor sepa qué tiene que hacer.

**HTTP con cURL**
curl url --verbose

**Direcciones web**

Una dirección web para hacer una solicitud con Http puede verse de alguna de las siguientes maneras:

localhost:8080

google.com

web.facebook.com

codigofacilito.com/cursos

Todas son direcciones válidas y cada una tiene elementos distintos. Lo que aparece al principio, justo antes de los dos puntos en el primer ejemplo, y en el caso de google.com, se trata del nombre de dominio.

El nombre de dominio nos permite identificar la computadora en la que se encuentra el recurso que estamos solicitando, nota como en lugar de página estamos usando el concepto de recurso, porque así como podemos solicitar una página, también puede ser otro tipo de archivo como una imagen.

Luego del nombre de dominio viene el puerto, en el primer ejemplo el puerto es el 3000, es el que aparece luego de los dos puntos. En el resto de los ejemplos se asume el puerto por defecto, porque no hay otro especificado. El puerto por defecto para el protocolo Http es el puerto 80, y es el que precisamente se usa cuando no se especifica otro, como en los ejemplos mencionados.

Además del dominio y el puerto, una dirección web contiene la ruta o el path en donde se encuentra el recurso, dentro del servidor. Piensa en que si el dominio fuera una colonia, el path sería la ruta para llegar a una casa en específico, ya que si bien el dominio representa al servidor, el path representa el recurso en específico que queremos.

El path por defecto es la /, misma que puede omitirse por lo que asumimos que si no hay path, estamos tratando de acceder al inicio, la /. En nuestros ejemplos de direcciones, el path es siempre / con excepción del último donde se indica que buscamos el recurso con la ruta /cursos.

**Creando nuestro primer servidor**

npm init -> crea el archivo de configuración package.json 
nodejs archivo.js -> ejecuta el archivo javascript para levantar el server
