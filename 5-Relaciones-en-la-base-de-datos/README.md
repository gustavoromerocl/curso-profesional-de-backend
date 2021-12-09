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