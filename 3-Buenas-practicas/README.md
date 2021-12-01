# Buenas ṕrácticas de desarrollo

**Qué es el MVC**

La sigla MVC hace referencia a un patrón de arquitectura que divide el codigo en las siguientes capas: 

Modelo: capa que almacena los datos y la lógica de neogocio
Vista: capa que almacena las vistas que interactúan con el cliente
Controlador: capa que comunica las solicitudes de la vista hacia el modelo y las respuestas del modelo hacia la vista 

**Organizar un proyecto MVC**

**Qué son las migraciones**

Las migraciones son archivos que ejecutan modificaciones a nuestra base de datos de una forma segura, ya que permiten revertir dichos cambios en caso de haber cometido un error. Cada ORM cuenta con su sintaxis propia para apoyar dichos cambios en la bbdd.