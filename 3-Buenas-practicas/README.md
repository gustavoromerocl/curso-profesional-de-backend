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