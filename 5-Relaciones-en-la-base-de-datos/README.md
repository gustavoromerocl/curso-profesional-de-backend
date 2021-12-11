# Relaciones en la base de datos

**Fundamentos de relaciones en la base de datos**

Cuando trabajamos con una base de datos, una de las partes más complicadas es la que llamamos normalización.

Llamamos normalización al proceso a través del cual restructuramos nuestra base de datos de manera que se cumplan una serie de normas, cuyo objetivo es el de reducir la repetición de información y proteger la integridad de los datos.

En términos prácticos, una base de datos propiamente estructurada y normalizada, nos permite escribir consultas mejor elaboradas, con mejor rendimiento, con menos redundancia, etc.

Parte del proceso de normalización requiere que definamos relaciones entre los datos de nuestra base de datos, un ejemplo de este tipo de relaciones es la que se establece entre los mensajes del chat y un usuario. Al ver la interfaz de una aplicación de mensajería, podemos por ejemplo distinguir qué mensajes le pertenecen a qué usuario y cuáles le pertenecen a otro.

Al ingresar a un sitio de ventas en línea podemos usar controles para seleccionar productos que pertenezcan a una categoría, en un canal de YouTube podemos distinguir suscriptores que le pertenecen a un canal, y de otra manera, los canales a los que está suscrito un usuario, todos estos son ejemplos de relaciones que existen entre la información que maneja una plataforma.

Definir apropiadamente estas relaciones, es parte importante del proceso de normalización, ya que es a través de estas relaciones que evitamos que la información se repita y que podamos obtener o consultar la información que queremos. Como por ejemplo, que podamos consultar los mensajes de chat de un usuario, los canales a los que está suscrito, etc.

En general, podemos distinguir dos tipos principales de relaciones en una base de datos.

Primero, las relaciones uno a muchos, o de pertenencia, estas se establecen cuando una serie de entidades le pertenecen a otra entidad, por ejemplo, los mensajes de chat son entidades que le pertenecen a la entidad de un usuario. Aquí lo importante es saber que una colección le pertenece a un elemento individual, como una serie de artículos que le pertenecen a un autor.

El segundo grupo de relaciones es al que llamamos Muchos a Muchos, según la terminología que definimos en el ejemplo anterior, estas relaciones se dan cuando una colección de entidades están relacionados con una o más de otro grupo de entidades.

Este tipo de relación es más difícil de conceptualizar, pero un ejemplo muy simple es el de los suscriptores de YouTube. Decimos que la relación que existe entre suscriptores y canales es de muchos a muchos, porque si bien un canal puede tener muchos suscriptores, un suscriptor puede también estar suscrito a muchos canales. Es decir, muchos a muchos.

La diferencia entre ambos está en el sentir de pertenencia, mientras que en la relación uno a muchos, la colección le pertenece al usuario, en los muchos a muchos no hay una pertenencia, simplemente yo puedo tener muchos de estos, y a la vez, tú puedes tener muchos como yo.

En la base de datos, ambas relaciones se definen de maneras distintas, por un lado, las relaciones uno a muchos suelen definirse vía un campo en las entidades de la colección al que llamamos llave foránea, que es equivalente a algún campo de la entidad individual a la que pertenece la colección. Si pensamoes en los artículos que le pertenecen a un autor, esto significa que como parte de la tabla que guarda los artículos, definimos un campo especial que guarda a qué autor pertenecen estos artículos. Lo mismo con los mensajes de chat que bajo esta idea, guardarían un campo especial para saber qué usuario los escribió.

Las relaciones muchos a muchos, por su parte, suelen involucrar una tabla intermedia que establece la relación. Si tenemos una tabla usuarios y una tabla canales, y queremos establecer una relación muchos a muchos, podríamos crear una tabla intermedia entre ambos, donde cada registro establece una relación entre una entidad de la tabla usuarios y una entidad de la tabla canales.

Supongamos que llamamos a esta tabla suscripciones, y en ella definimos un campo para guardar una referencia a un usuario, y además, otro campo que guarde una referencia a algún canal.

Eventualmente, esta tabla nos va a servir qué usuarios están suscritos a un canal, más adelante en el curso veremos qué clase de consultas necesitamos hacer para poder conocer esta información.

Recuerda que puedes reforzar el conocimiento que adquieres de bases de datos, siguiendo el curso dedicado a este tema en codigofacilito.com/cursos/base-datos-profesional donde detallamos operaciones de consulta que puedes realizar.

**Relaciones uno a muchos - El esquema**

sequelize migration:create --name add_user_id_to_tasks 
sequelize db:migrate

**Relaciones uno a muchos - los modelos**

Una vez modificado el esquema, es necesario definir la relacion en el apartado associate en los modelos con los métodos:

Model.hasMany -> tiene muchos
Model.belongsTo -> le pertenece a uno

**Nombres para asosiaciones**
 
mediante el uso de la palabra reervada as: es posible asignar un alias a las tablas con el fin de evitar conflictos de naming que entorpezca la consulta de sequelize


**Guardar relacion uno a muchos**

Se agrega al create del controlador de tasks el parametro userId, que es obtenido de el usuario que inicio sesión

**Relaciones en un proyecto real**

Si bien, habrá muchas ocasiones en las que para definir una relación uno a muchos seguirás los pasos que aquí realizamos, que son:

Agregar la columna y la llave foránea.
Establecer las relaciones en cada uno de los modelos
Es también muy común que la relación se establezca desde el momento en que se crean las tablas, especialmente cuando ya tienes experiencia desarrollando proyectos, es fácil distinguir las relaciones desde el momento en el que por primera vez definimos una nueva tabla.

Es por eso que consideré importante mencionar que también puedes definir una llave foránea en una migración que cree una tabla. Si abrimos, por ejemplo, la definición de la tabla Tasks, agregar el campo userId sería muy fácil:

userId:{
        type: Sequelize.INTEGER,
        references: {
          model: 'User', // name of Target model
          key: 'id', // key in Target model that we're referencing
        }
}

**Eager loading (cargado anticipado)**

Es uan buena pŕactica cargar el contenido de las relaciones o de las tablas asociativas, con el fin de mejorar el rendimiento del servidor.

**Relaciones muchos a muchos**

Si bien, las relaciones 1 a muchos dependen de un campo que apunta de una tabla hacia otra, a la que llamamos llave foránea, las relaciones muchos a muchos requieren de otras formas y estrategias.

Piensa por un momento en un ejemplo de una relación muchos a muchos, intenta traer una tú mismo, considera que normalmente leemos una relación de este tipo como que una entidad A tiene muchos elementos de una entidad B, y a su vez, B puede tener muchos elementos de A.

Si te ayuda, te daré un ejemplo, un canal de YouTube puede tener muchos suscriptores, y a su vez cada suscriptor puede estar suscrito a muchos canales de YouTube, y ahí lo tienes, una relación de muchos a muchos.

Si se te ocurrió alguna otra, déjala en los comentarios para ayudar a reforzar el concepto de tus compañeros de clase, voy a estar leyendo los ejemplos que coloquen.

En una base de datos relacional, las relaciones muchos a muchos suelen representarse a través de una tabla asociativa.

Considera que tenemos una tabla Canal, y una tabla Usuario, como en el ejemplo que di antes, se establece que un usuario puede suscribirse a muchos canales, y que un canal puede tener muchos suscriptores, ya que ésta se trata de una relación muchos a muchos, vamos a introducir una nueva tabla, cuya función será la de asociar la tabla canales y la tabla usuarios.

Para que la nueva tabla pueda hacer esta función debe contener al menos dos campos, uno de ellos apuntando a la tabla usuarios y otro apuntando a la tabla canales. De tal manera que si yo quisiera establecer que el usuario Uriel, se relaciona con el canal CódigoFacilito, en esta nueva tabla guardaría un registro así:

Canal	Usuario
CodigoFacilito	Uriel
CodigoFacilito	Marines
MarinesMG	Rafa
Una tabla asociativa, debe de almacenar una referencia para cada una de las dos tablas que está relacionando, de alguna manera puedes pensar que esta tabla se relaciona con el esquema uno a muchos con ambas tablas, en nuestro ejemplo podemos establecer que la nueva tabla tiene una relación de pertenencia para el usuario, y una de pertenencia para el canal.

Usando esta estrategia, cada que queramos establecer una relación uno a muchos entre dos elementos, creamos un nuevo registro en una tabla asociativa que apunte a ambos elementos en la relación.

Si aún no te cuadra bien cómo debe suceder esta relación, pasemos a los siguientes temas para poner en práctica el conocimiento que hemos adquirido.