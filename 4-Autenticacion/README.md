# Autenticación

**Formulario de registro**

Seconfigura ruta y controlador para mostrar la vista del formulario


**Modelos y migracion de usuarios**

sequelize model:generate --name User --attributes email:string,password_hash:string

**Validaciones en la base de datos y el modelo**

Las validaciones en la base de datos se deben ingresar antes de ejecutar el archivo de migración creado por el ORM sequelize

sequelize db:migrate

Las validaciones en el modelo, se agregan el archivo de la carpeta models