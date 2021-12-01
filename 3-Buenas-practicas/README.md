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