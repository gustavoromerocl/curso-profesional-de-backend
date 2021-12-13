# Websockets (realtime)

**¿Qué son las Websockets?**

Cuando hablamos de WebSockets usualmente nos podemos referir a dos cosas, por un lado al protocolo de WebSockets y por otro a la interfaz del navegador para comunicarnos vía WebSockets.

El protocolo de WebSockets es un protocolo de la capa 7 del modelo OSI, que funciona a través del protocolo TCP, de la misma forma que lo hace el protocolo Http. Esto quiere decir, por un lado que Http y WebSockets son protocolos de red distintos, PERO, que son compatibles entre sí porque ambos funcionan a través de TCP.

La diferencia entre ambos, es que las WebSocket permiten comunicación a dos vías, desde el cliente hacia el servidor y desde el servidor hacia el cliente sobre una misma conexión. El protocolo Http, por otro lado y como has aprendido en este curso, sólo se comunica desde el cliente hacia el servidor y cada nuevo mensaje requiere una conexión nueva hacia el servidor mismo.

La habilidad de que el servidor se comunique con el cliente sin que el cliente haya iniciado la conversación, y que podamos mandar mensajes de ida y vuelta sobre una misma conexión hacen a las Websockets la tecnología perfecta para la implementación de aplicaciones en tiempo real. Ya que si el servidor tiene información nueva que comunicar al navegador, no debe esperar nada, usa el canal establecido a través del protocolo de Websockets para informarlo.

La interfaz de las WebSockets por su parte, es el cómo nosotros programamos un cliente que se conecte con un servidor a través de este protocolo, esta interfaz la estandariza y define el consorcio de la web, la W3C. Los navegadores la integran junto con su implementación de comunicación con el protocolo WebSockets.

En palabras más simples, esta interfaz son las clases, métodos y objetos a través desde JavaScript en el navegador nos comunicamos vía WebSockets.

Para poder comunicarnos vía WebSockets tenemos que configurar nuestro servidor para dar soporte a la comunicación vía este protocolo, y por supuesto implementar un cliente en el navegador que se conecte, reciba y envíe mensajes hacia el servidor, además, también podemos configurar los mensajes que el servidor mismo enviará hacia el cliente.

Trabajar con protocolos de red es un desafío por sí mismo, como recordarás, un desarrollador backend por lo general no implementa el programa de comunicación con el protocolo de Http, más bien aprovecha uno existente, NodeJS por ejemplo expone el paquete http para comunicarnos con el protocolo.

Lo mismo pasa con las Websockets, y aunque Node no incluye un paquete para comunicarnos con este protocolo, existen muchas alternativas, la más popular de entre ellas es Socket.io.

En los siguientes temas vamos a aprender a comunicarnos vía Websockets con Socket.io. ¿Emocionado? También yo, continuemos.

**usuarios conectados en tiempo real**

npm install socket.io

**comunicar el servidor http y el servidor de websockets**

npm install socket.io-client

**Conoce Heroku**

instalar cli

https://devcenter.heroku.com/articles/heroku-cli

heroku login