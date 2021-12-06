# Autenticación

**Formulario de registro**

Seconfigura ruta y controlador para mostrar la vista del formulario


**Modelos y migracion de usuarios**

sequelize model:generate --name User --attributes email:string,password_hash:string

**Validaciones en la base de datos y el modelo**

Las validaciones en la base de datos se deben ingresar antes de ejecutar el archivo de migración creado por el ORM sequelize

sequelize db:migrate

Las validaciones en el modelo, se agregan el archivo de la carpeta models

**Encriptar el password**

npm install bcrypt

hooks -> Ejecutan funciones antes o despues de un evento

Se ejecuta la encriptación dentro de una promesa debido a que es una función asíncrona y tiene un reatdo en ms. La implementación se hace en el modelo con el hook beforeCreate 

**Creación de usuarios**

Importando el modelo en el controlador y mediante el método create, se crea el usuario mediante el formulario 

**Autenticación**

Para validar la sesión creamos una nueva ruta con su respectiva vista y controlador. Mediante un formulario recibe el usuario y contraseña que es enviado al método creado en el modelo User.

**Manejo de sesiones**

npm install express-session

**Que es un middleware**

Un middleware es un capa de la cual esta compuesta el framework y funciona también con el protocolo http. La diferencia con las peticiones vistas hasta ahora es que ademas de request y response, recibe un tercer parametro llamado next(), que sirve para darle el pase al siguiente middleware o para detectar errores, en el caso de que se le pase un parámetro a la función. Además, los objetos y variables contenidos en las request son compartidos, por lo que se puede acceder desde distintos middleware a las variables.

**Buscar usuario autenticado**

Para realizar la busqueda usamos un custom middleware, es decir, creamos un middleware para buscar y asignar al req params el usuario de la sesión.

**Cerrar sesión**

Para destruir la sesión activa usé el middleware session y se metodo destroy, que recibe como parametro un callback, que en este caso redirecciona a la ruta /sessions