# Socket.IO set up

Socket.IO, is a websockets library that is performant both client and server side. As JavaScript needs to be transpiled so that older browsers can read more updated JavaScript code, Socket.IO is better than using native websockets. Older browsers instead of responding to event-listeners will default back to polling.

How to get sockets running in a project.

1. `npm install -s socket.io`

2. Tie it up with the Express server in `server.js` and add the `http module` from NodeJS and instantiate both modules.

```
const server = require("http").Server(app);
const io = require("socket.io")(server);
```

change the `app.listen()` method

```
server.listen(PORT, () => console.log(`your-app listening on ${PORT}`));
```

Another variation:

```
const http = require('http').Server(app)
const io = require('socket.io')(http)
```

With the server assigned to a variable

```
const server = http.listen(5000, () => {
  console.log("your-app listening on port", server.address().port);
});
```

3. Library methods on the server

- the `io.on()` method checks the connection, the first argument in the callback, the second argument, socket triggers the socket opening 
- the next method `socket.emit()` actually relays server messages as an object to the client
- the method `socket.on()` listens to the next event which is the message received from the client

```
io.on('connection', (socket) => {
console.log('user connected');
socket.emit('message', { socketTestMessage: 'testing socket - hello 1,2,3 testing, testing...'});
socket.on('another event', (data) => {
console.log(data);
})
})
```

3. Library methods connecting clients to servers via the root `index.html`

In the HTML file, after the body tags, add 2 script files. The second script tag goes above the jQuery, the first script tag is the front-end CDN to sockets.

The same methods we have seen server-side are used in the script tags client side.

```
<script src="/socket.io/socket.io.js"></script>
  <script>
    const socket = io.connect("http://localhost:5000");
    socket.on("message", (data) => {
      console.log(data);
      socket.emit("another event", {
        userReply: "The socket test worked, proceed",
      });
    });
  </script>
```

We are logging the both the front end and backend to check client-server request-response cycles.

**NOTE separation of concerns does not work, if you have a separate HTML and JavaScript files**

6. Debugging - Sometimes when you actually add socket methods the front end does not find where the sockets are stored in the file system

  - [Stackoverflow](https://stackoverflow.com/questions/19426882/node-js-socket-io-socket-io-js-not-found)


METHOD 1:
Steps to debug

1.  `npm install socket.io --save` in static files (index.html) for example, you may have installed it globally and when you look at the debugger, the file path is empty.
2.  Change your script file and instantiate the socket explicitly adding your localhost that you have set up in your server file

`<script src="http://localhost:5000/socket.io/socket.io.js"></script> <script> const socket = io.connect("localhost:5000"); $(() =>`

Double check that the data is flowing by opening a new browser tab and pasting `http://localhost:5000/socket.io/socket.io.js` you should see the socket.io.js data

3. Double check that your server has been set-up correctly and if you get a CORs error `npm install cors` then add it to the `server.js` (or index.js whatever you have chosen to name your server file)

`const cors = require("cors"); const http = require("http").Server(app); const io = require("socket.io")(http);`

Then use the Express middleware `app.use()` method to instantiate cors. Place the middleware this above your connection to your static root file

`app.use(cors()); app.use(express.static(__dirname));`

4. As a final check make sure your server is connected with the `http.listen()` method where you are assigning your port, the first arg is your port number, for example I have used 5000 here.

`const server = http.listen(5000, () => { console.log("your-app listening on port", server.address().port); });`

5. As your `io.on()` method is working, and your sockets data is connected client-side, add your `io.emit()` method with the callback logic you need and in the front-end JavaScript files use the `socket.on()` method again with the call back logic you require. Check that the data is flowing.

I have also edited a comment above as it was the most useful to me - but I had some additional steps to take to make the client-server connection work.

METHOD 2: Is longer and is not guaranteed to work

`find ./ | grep client | grep socket.io.js`

This will give you the relative-file path you need`/websocketsApp/node_modules/socket.io-client/dist/socket.io.js` or the absolute file-path `/Users/ssbt/Documents/GitHub/node.js-and-server-side-javascript/websocketsApp/node_modules/socket.io-client/dist/socket.io.js`

Copy this into another folder to make it more discoverable - use the absolute paths they work better
`cp /Users/ssbt/Documents/GitHub/node.js-and-server-side-javascript/websocketsApp/node_modules/socket.io-client/dist/socket.io.js /Users/ssbt/Documents/GitHub/node.js-and-server-side-javascript/websocketsApp/assets/socket-files`

Change scripts `<script type="text/javascript" src="/websocketsApp/assets/sockets-files"></script>`

You need to add socket methods to the front end to listen to user inputs

`socket.on()` when the socket is open it is listening for messages
`socket.emit()` once it has received the message it can emit the message
`socket.join()` if several sockets are open you can join the open sockets
