# Buenas ṕrácticas de desarrollo

**Qué es el MVC**

La sigla MVC hace referencia a un patrón de arquitectura que divide el codigo en las siguientes capas: 

Modelo: capa que almacena los datos y la lógica de neogocio
Vista: capa que almacena las vistas que interactúan con el cliente
Controlador: capa que comunica las solicitudes de la vista hacia el modelo y las respuestas del modelo hacia la vista 

**Organizar un proyecto MVC**

**Qué son las migraciones**

Las migraciones son archivos que ejecutan modificaciones a nuestra base de datos de una forma segura, ya que permiten revertir dichos cambios en caso de haber cometido un error. Cada ORM cuenta con su sintaxis propia para apoyar dichos cambios en la bbdd.

**CLI de sequelize**

CLI = comand line interface

npm install -g sequelize-cli -> instala la linea de comandos a nivel global
sequelize init -> integra sequelize al proyecto, ejecutar dentro de la carpeta contenedora 

**Generando migraciones**

https://sequelize-mock.readthedocs.io/en/stable/

sequelize model:generate --name Task --attributes description:text -> crea una migracion
sequelize db:migrate -> ejecuta la migracion
sequelize db:migrate:undo -> revierte la ultima migración

**Vistas**

npm install pug -> motor de vistas

**seeders**

sequelize seed:generate --name generate_tasks -> crea el archivo base para poblar las tablas
sequelize db:seed:all -> ejecuta el archivo seed y al inserción de datos
sequelize db:seed:undo -> deshace el ultimo seed ejecutado
sequelize db:seed:undo:all -> revierte todos los seeders

**Que es REST**

REST: Representaitional State Transfer

6 principios de la arquitectura

1- Arquitectura cliente/servidor: Separación de responsabilidades, lo que permite que la interfaz pueda ser multiplataforma y que ambos puedan crecer de forma independiente

2- Que sea Stateless: La interacción entre el cliente y el servidor debe ser sin estado

3- Cacheability: Posibilidad de guardar algunas respuestas en la memoria caché

4- El sistema debe estar basado en capas: El servidor debe estar compuesto por varias capas independientes, lo que permite que en caso de requerir reemplazar alguna, se pueda gestionar sin alterar al resto

5- Que posee una interfaz uniforme: Es el estandar de la interfaz de comunicación entre cliente - servidor

6- Envio de código on demand

**REST en la práctica**

URI: uniform resource identifier -> recursos
URL: uniform reource location -> acciones

Las URI son identificadores únicos que poseen los recursos(img,html,json,xml,etc)en el servidor

**Verbos Http en REST**

Estas son algunas reglas que te servirán para saber cómo y cuándo debes usar los verbos Http en una arquitectura REST.

Los verbos Http involucrados en un sistema REST son GET, POST, PUT, PATCH y DELETE.

GET es el más simple de todos, es el que usamos para obtener un recurso. Las peticiones GET no deben causar efectos secundarios en un servidor, no deben producir nuevos registros, ni modificar los ya existentes. A esta cualidad la llamamos idempotencia, cuando una acción ejecutada un número indefinido de veces, produce siempre el mismo resultado.

Esto quiere decir, que no importa cuántas veces hagamos una petición GET, los resultados obtenidos serán los mismos.

Cuando ingresamos a la dirección usando GET https://codigofacilito.com/cursos/backend-profesional/ estamos solicitando que se nos entregue el recurso identificado por /cursos/backend-profesional, este es un buen ejemplo de uso con GET.

Esta otra ruta: https://codigofacilito.com/cursos/recomendar?selected_level=0&category_options=28 aunque más compleja, también es correcta, estamos solicitando los recursos identificados por /cursos con las opciones ahí indicadas. Sin importar cuantas veces hagamos esta solicitud, no modificará los resultados por sí misma.

Las peticiones con POST son para crear recursos nuevos, no para eliminarlos, ni para modificarlos. Cada llamada con POST debería producir un nuevo recurso.

Lo que es interesante acerca de POST no es el verbo en sí, queda muy claro que es para crear, más bien es los recursos a los que se dirige.

Por ejemplo, si en nuestra aplicación existe una colección de cursos, la solicitud para crear uno nuevo, debe ser con el verbo POST al recurso que identifica la colección, por ejemplo /cursos.

Si queremos crear un nuevo artículo, pudiéramos tener una URI /articulos. Lo que es importante en estos casos, es recordar que la URI no debe decir qué acción estamos ejecutando, nos olvidamos de /articulos/crear o de /cursos/agregar, etc. El verbo dice qué haremos, y la URI sobre qué recurso se harán las modificaciones.

Algunos escenarios más complejos para el uso de POST son los inicios de sesión, agregar a un carrito de compras, procesar un pago nuevo, etc.

Consideremos por ejemplo el inicio de sesión, normalmente al iniciar sesión, no producimos un nuevo registro en la base de datos, sin embargo, usamos POST porque estamos creando una sesión nueva. Esto nos da a entender que para saber si usaremos POST o no, no necesariamente tenemos que agregar registros en la base de datos, el recurso creado puede ser de otros tipos, como una sesión.

Los verbos PUT/PATCH van como el señor cara de papa y la señora cara de papa, siempre juntos. Los agrupamos porque ambos indican una modificación en el servidor.

En la teoría, PUT se diferencía de PATCH, en que el primero indica que vamos a sustituir por completo un recurso, mientras que PATCH habla de actualizar algunos elementos del recurso mismo, sin sustituirlo por completo.

Un escenario común para el uso de PUT sería una llamada para actualizar la información de un curso, por ejemplo:

PUT /cursos/backend-profesional

O también:

PATCH /cursos/backend-profesional

En la práctica, no conozco un framework que establezca una diferencia en funcionamiento para peticiones con PUT o con PATCH, ambos verbos son tratados como iguales.

Por último, DELETE es el verbo que usamos para eliminar registros, bien pudiera ser para eliminar un recurso con un mensaje Http como

DELETE /cursos/backend-profesional

O para eliminar una colección completa:

DELETE /cursos

Esta es la manera a través de la que usamos los verbos Http en una aplicación web. Estos en combinación con las URIs proveen la interfaz uniforme de la que hablamos cuando discutimos las características de un sistema REST.

Como podrás notar, el beneficio de estas es que se establece una guía para la construcción de la aplicación, las rutas siempre representan recursos, las acciones se representan con Http.

**Crear nuevos registros**

Rest trabaja principalmente sobre las rutas generando los recursos antes mencionados, por lo que puede trabajar en paralelo con la arquitectura MVC que a su vez cumple con el pricipio de separación de capas. 