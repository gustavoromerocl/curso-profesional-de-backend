#Bases de datos

**El lenguaje SQL**

Structured Query Language o SQL como comúnmente lo conocemos, es el lenguaje a través del cual realizamos consultas a un motor de base de datos.

SQL se ubica en la categoría de los que conocemos como lenguajes de dominio específico.Lenguajes diseñados especialmente para realizar tareas dentro de un dominio bien definido, el contraste de estos lenguajes son los de propósito general que nos sirven para la solución de tareas en dominios distintos.

El dominio del lenguaje SQL es por supuesto el de las bases de datos. Originalmente fue conocido como Sequel, pero algunas restricciones con el registro de dicho nombre hicieron que se cambiara SQL aunque algunas personas conservaron la pronunciación, es por eso que a veces nos referimos a SQL como Sequel o Esciuiel o Esecuele.

SQL está compuesto por 3 sublenguajes, el de la definición de datos, con el que definimos el esquema de nuestra información, el lenguaje de manipulación de datos, y el lenguaje de declaración de consultas, con el que precisamente obtenemos la información almacenada en nuestro motor.

Las instrucciones SQL que escribamos eventualmente serán procesadas por un procesador de consultas SQL en el motor de nuestra base de datos, este procesador generará un plan de ejecución de la consulta que pueda ejecutarse sobre el motor de base de datos, este plan está especialmente optimizado para que la información sea generada lo más rápido posible,

Como desarrolladores Backend vamos a usar SQL para escribir consultas que nos permitan hacer esas 3 operaciones, definir nuestro esquema, insertar datos y consultarlos, para eso usamos las reglas del lenguaje y las palabras reservadas que se han definido.

SQL es un lenguaje complejo y para entenderlo a fondo necesitamos no sólo saber qué operaciones podemos definir, si no cómo se ejecutarán. En conjunto, una comprensión clara del lenguaje y de su ejecución, nos permitirán obtener información de manera rápida y eficiente.

Es por eso que sería imposible integrar ese conocimiento en este curso, por lo que voy a limitarme a enseñarte las consultas para ejecutar las operaciones más comunes de una aplicación web, y aunque estoy seguro de que con lo aprendido en este curso podrás empezar a crear aplicaciones web con bases de datos relacionales usando el lenguaje SQL para consultas, sería estupendo que en paralelo con este curso siguieras el Curso Profesional de Bases de Datos en el que Eduardo te enseñará SQL a fondo.

**Configurando SQLite**

El motor de base de datos que vamos a usar para este curso es SQLite, es un motor ligero y fácil de instalar, que está pensado para almacenar cantidades de datos pequeñas y es ideal para el desarrollo de aplicaciones.

Dicho esto, también es importante considerar que para cuando subamos nuestra aplicación al internet, seguramente vamos a querer utilizar un motor de base de datos más robusto como mySQL o Postgres, y ojo, aunque todos estos motores usan SQL como lenguaje de consultas, cada uno de ellos agrega o cambia ciertas cosas al lenguaje, así que ten cuidado con qué operaciones vas a utilizar y considera si están disponibles en todos los motores de base de datos en los que tu aplicación vaya a ejecutarse.

INSTALACIÓN EN WINDOWS
Para instalar sqlite3 en Windows necesitas, en primer lugar, dirigirte al sitio web https://www.sqlite.org/download.html ahí te dirigirás a la sección Precompiled Binaries for Windows, en la que encontrarás los binarios para Windows, de ahí tienes que descargar los archivos:

sqlite-tools
sqlite-dll
Asegúrate de seleccionar los archivos de descarga adecuados, ya que para ambos existen versiones de 32 bits (x86) y 64 bits (x64).

Una vez que descargues los archivos y los descomprimas, ya que originalmente vienen como un .zip, tienes que moverlos a la carpeta system32 para agregarlos C:\WINDOWS\system32

INSTALACIÓN EN UBUNTU
Muy simple, sólo instala sqlite3 y libsqlite3-dev con el manejador de paquetes de tu preferencia, por ejemplo con el siguiente comando ejecutándose en la terminal

apt-get install sqlite3 libsqlite3-dev
INSTALACIÓN EN MACOS
En versiones modernas de MacOS, sqlite viene pre instalado así que no necesitas hacer instalaciones adicionales para poder seguir este curso.

Una vez que hayas instalado y configurado sqlite deberás poder ejecutar el siguiente comando en la Terminal o el CMD para poder visualizar la versión instalada de sqlite

sqlite3 --version
En mi caso el resultado es la versión 3.19.3 de sqlite.

Una vez que corrobores que el comando anterior fue ejecutado con éxito, podrás continuar con el siguiente tema del curso.

No olvides postear tus dudas en caso de que algo en la instalación se te haya complicado.

**Drivers de conexión**

Cuando vamos a trabajar con algún motor de bases de datos, existe una brecha entre nuestro programa y nuestro entorno de ejecución, y el motor de bases de datos. Esta brecha se cierra utilizando un Driver.

Este driver es el que nos permite comunicarnos con el motor de base de datos, internamente estos programas, librerías o dependencias como quieras llamarlos, implementan los protocolos de comunicación necesarios para ejecutar operaciones sobre la base de datos.

Por supuesto cada motor de base de datos tiene necesidades distintas, por lo que el funcionamiento interno de cada driver depende de con qué base de datos estamos buscando comunicarnos.

Estos drivers a su vez exponen una API, es decir una serie de métodos, objetos y funciones con los que nos podemos comunicar con la base de datos.

Cuando busques una librería que haga este trabajo debes de buscar considerando el lenguaje de programación o entorno de ejecución y el motor de base de datos. Por ejemplo, driver para Go y mySQL, o driver para Python y Postgres, etc.

En el caso de nuestro conjunto de tecnologías, necesitamos algo que nos permita comunicar NodeJS con Sqlite, precisamente hay una dependencia para eso en NPM que se llama sqlite3, así que procedamos a configurarla.

**Crear una tabla (primer consulta)**

npm install express
npm install sqlite3

**Qué es un CRUD**

En programación solemos usar el término CRUD para referirnos a las operaciones básicas que puedes realizar sobre un conjunto de datos y por sus siglas son:

Crearlos, ya sabes, nuevos registros, cuando hablamos de bases de datos esto quiere decir insertar información.

Leerlos, r por Read, esto quiere decir consultar esa información, ya sea un registro o una colección de estos registros.

Actualizarlos, u por Update, que significa tomar un registro que ya existe en la base de datos y modificar alguna de las columnas.

Por último eliminar registros, d por Delete, que significa tomar un registro y quitarlo del almacén.

Los CRUDs son programas que involucren todas estas operaciones sobre una entidad, como en nuestro caso en el que trabajaremos con tareas pendientes, por eso nombré a la tabla tasks, o tareas.

Ahora ya sabes que cuando digamos, haremos el CRUD de esta entidad, significa las operaciones que aquí mencionamos.

**Insertar registros en la base de datos**

npm install body-parser -> dependencia para leer el cuerpo de las peticiones

**Limpiar parametros (sanitize)**

Con el objetivo de evitar inyecciones maliciosas en nuestras querys, nunca debemos ingresar de forma directa los datos en la query. Para solucionar este problema existe sanitize, en el cual se reemplazan los valores por un signo de interrogacion. 

**Qué es un ORM**

Aunque podríamos desarrollar una aplicación web completa usando instrucciones SQL, estas pueden convertir nuestro código en uno muy verboso, complejo de entender y difícil de modificar.

Alternativamente, los desarrolladores backend usamos lo que se conocen como Object Relational Mapping, u ORM por sus siglas. Estas librerías se encargan de ofrecer clases y métodos para que podamos manipular la base de datos usando programación orientada a objetos.

Internamente, estos métodos se traducen a SQL para que las operaciones puedan ejecutarse sobre la base de datos. Además de eso, las instrucciones generadas por un ORM son usualmente seguras y optimizadas, esto porque los mejores ORM’s tienen años en desarrollo y son de código abierto, permitiendo que los mismos usuarios del ORM reporten y solucionen bugs, de modo que los resultados del ORM están en constante mejora.

Si aún no te imaginas cómo podrían verse las consultas SQL con objetos, considera este ejemplo con Sequelizejs, un ORM para NodeJS.

La inserción a nuestra tabla tasks pasaría de verse así:

db.run(`INSERT INTO tasks (description) VALUES (?)`,req.body.description);
A verse así:

Task.create({
 description: req.body.description
});

Como puedes ver, el ejemplo con objetos y métodos es más legible y claro que la instrucción SQL, por otro lado, aprender SQL es mucho más complejo que aprender a usar un ORM, como podrás ver del ejemplo mismo.

Sin embargo, es importante mencionar que para sacar el mayor provecho de un ORM, y poder optimizar las sentencias que se generan, sí debes saber SQL y fundamentos de bases de datos relacionales, recuerda que para eso puedes ver el Curso Profesional de Bases de Datos aquí mismo en CódigoFacilito.

Por otro lado, uno de los grandes beneficios de usar un ORM, es que nos permite intercambiar el motor de base de datos, sin tener que modificar el código que utilizamos, simplemente le decimos, ahora usa sqlite, y ahora usa Postgres, y la librería se encargará de generar el código SQL para el motor indicado.

Este es un beneficio muy valioso considerando que ciertos motores están mejor diseñados para tareas específicas, sqlite para el desarrollo del sitio, Postgres para el entorno en producción, etc.

En general, te recomiendo que, a menos que tengas una razón especial para no usar un ORM, siempre los utilices, protegerán tu aplicación de posibles ataques por una base de datos mal configurada, harán del motor de base de datos prescindible, de manera que no casarás tu aplicación con uno de ellos, y además las operaciones serán más fáciles de comprender y razonar cuando ves tu código, que si usas SQL.