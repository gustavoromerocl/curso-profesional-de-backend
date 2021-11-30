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
nodejs archivo.js -> ejecuta el archivo javascript para levantar el server, se esta ejecutando en mac o windows solo usar el nombre node sin js

**Express**

npm install express

Framework minimalista de desarrollo web del lado del servidor, provee de herramientas pre diseñadas para agilizar y mejorar el desarrollo

**Postman**

https://www.postman.com/

**Recibir datos de la petición**

Del lado izquierdo del ? tendremos la ruta donde enviaremos el mesaje y del lado derecho los parametros de consulta

https://localhost:3000/saludo?<query-param>

Las query param tienen algunas restricciones, como por ejemplo los espacios deben ser definidos con %20

**Datos con post**

npm install body-parser -> libreria que apoya el descifrado de datos en el body de las request

**Enviar html**

__dirname -> retorna la ruta absoluta del proyecto

**Servir archivos staticos**

El codigo statico como imagenes, css y js debe ir es un carpeta aparte del codigo de nuestra app, puesto que lo que esta contenido en esta ruta es accesible publicamente

**Motores de vistas**

Un motor de vista permite insertar codigo del servidor en las vistas html, en este caso usaremos EJS. Parte de la configuración es crear una carpeta views donde se alojaran las vistas. Además las vistas deben tener extención .ejs

npm install ejs

**Qué es el caché**

caché -> Es un espacio de memoria que almacena las respuestas del servidor para mejore su rendimiento. 
proxy -> es un intermediario entre el la solicitud y la respuesta, antes de enviar la solicitud el proxy revisa si ya se habia realizado previamente por lo que revisara el caché, si esta ahí, no es necesario enviarla al servidor.

**Tipos de caché**

De acuerdo con la Mozilla Developer Network, en general podemos identificar dos tipos de cache, los locales y los compartidos.

Prácticamente todos los usuarios tienen un caché local que viene incluido por defecto con su navegador, este puede servir para que las páginas que visitamos carguen más rápido o bien para que podemos ver un sitio incluso cuando no tengamos internet.

Este es un buen ejemplo de un caché local, lo que lo diferencía de un caché compartido es que este caché sólo sirve para un usuario, aquél que accede al sitio web vía dicha computadora.

Por otro lado, un caché compartido puede estar compartido entre múltiples usuarios, existen servicios que ofrecen la posibilidad de funcionar como intermediarios entre los usuarios y el servidor, un buen ejemplo de ello es Cloudflare.

Los cachés compartido son bastante interesantes porque pueden ofrecer beneficios de performance y velocidad incluso a usuarios que visitan por primera vez nuestro sitio web. Algunos de estos servicios replican las copias que se han generado en múltiples ubicaciones del mundo, acercándolas más a los usuarios que eventualmente requerirán estas copias.

**Caché de archivos estáticos**

ETag (Entity tag)-> sistema de caché que identifica las respuesta del serveren una etiqueta que cambia segun su contenido, se usa para saber si un archivo cambió y de esa forma actualizar las respuestas en el caché 

maxAge -> https://github.com/vercel/ms sistema de caché que no actualiza el contenido hasta que se cumpla determinado tiempo.

**Qué son las cookies y las sesiones**

Una de las características del protocolo Http es que es stateless, es decir, no conserva un estado para ninguna petición que recibe.

Esto significa que el servidor no tiene memoria, es una persona que saludas, te presentas, le dices tu nombre y lo olvidará para la siguiente vez que lo saludes. El servidor no recuerda nada entre peticiones, por lo que no sabe si esa petición ya vino, qué usuario es, cuáles son su datos, etc.

Por otro lado, nosotros usamos un internet que siempre sabe quiénes somos, sabe qué publicaciones debe mostrarnos en facebook, qué cuenta de correo estamos usando y mucho más. La pregunta es, si el protocolo http es stateless, cómo saben todas las páginas que yo estoy usando su sitio, la respuesta es con cookies y sesiones.

Las cookies y sesiones son mecanismos a través de los cuales podemos identificar una petición, con estas estrategias podemos almacenar información de nuestros usuarios que pueda ayudarnos como los productos que ha agregado a un carrito de compras, sus preferencias, si inició sesión o no, y mucho más.

Las cookies son datos que se almacenan en tu navegador, y son enviados al servidor en cada petición que haces del cliente al servidor mismo. Esto significaría, por ejemplo, que cada que llegas con el servidor sin memoria te presentes y le digas toda la información que posiblemente requería de ti.

Las cookies tienen varias limitaciones, por un lado la cantidad de información que puedes almacenar en cookies está limitada por el navegador, por otro lado, el usuario es libre de alterar las cookies como él prefiera, alterando así el funcionamiento de tu aplicación. Por último, si algo sale mal con las cookies, no está en tu control arreglarlo, tendrías que pedirle a tus usuarios que ellos mismos arreglen el problema, a final de cuentas, los datos están en su computadora.

Las sesiones por otro lado, guardan la información en el servidor y no en el cliente, y lo que se envía entre cada petición es un identificador de sesión para cada usuario, a través del cuál puedes obtener los datos que guardaste en el servidor. Esto significaría, por ejemplo, que cuando llegues con el servidor sin memoria le entregues una identificación tuya y él busque entre sus datos toda la información que necesitas saber, en lugar de que tú tengas que decirle todo.

La ventaja de las sesiones es que se almacenan en tu servidor, por lo que puedes guardar mucha más información que en las cookies, además, puedes usar uno de múltiples almacenes para sesiones, desde guardarlas en archivos, usar la memoria RAM, hasta guardar las sesiones en una base de datos especial para este tipo de información.

Además, las sesiones no pueden modificarse desde el cliente, ya que aunque el identificador de una sesión es guardado en una cookie, modificarlo significa que la información del usuario y el usuario ya no están conectados, y esto por sí mismo no presenta un riesgo de seguridad. Por otro lado, almacenar información sensible como el ID del usuario en una cookie puede prestarse a que se modifique y entonces sí exponga a tu servidor a una brecha de seguridad.

Por otro lado, es común que las aplicaciones web encripten las cookies para que estas no puedan ser leídas o modificadas en texto plano, para eso también hay distintas implementaciones con algoritmos de encriptación.

En general, la regla es, no almacenes información sensible o de importancia para tu aplicación en cookies, usa sesiones. Para todo lo demás, usa cookies.