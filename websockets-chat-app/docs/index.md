## Why sockets?

- To access the excercise files `npm init -y`

- This section on the sockets library is brief and covers how sockets have been used as both the projects in this repo use sockets.

- Node send requests from the client or browser to Node, but not in the reverse. So when we send a message from the server to the backend the console will log the result.

```
{ name: 'Josie', message: 'Bonjour' }
{ name: 'Josie', message: 'Bonjour' }
{ name: 'Josie', message: 'Bonjour' }
```

- Node can not notify the browser/ user that the message has been updated in a live-chat app
- The only way to achieve this behavior with HTTP requests is to do something called polling. With polling, every few seconds we send an HTTP request to check for updates
- The analogy is of kids in a car asking the parents when they are going to arrive every second which is what polling does
- An event based library tells you when there is an update listening to an event and then what to do, the analogy is that the parents tell the kids they will notify them when they arrive, and unless they do that, they have not arrived.
- One WebSocket library is Socket.IO that works for both the browser and for Node. The advantage of this library is that if a browser is older and does not support WebSockets, it will default back to polling and it has that functionality built in so it will always work.


# How the app works - data flows

1. Data from the static files in the HTML files are connected to the Express server.js via the node path module.
2. The JQuery is connected via the scripts files to the HTML and therefore flows into the Express server via the HTML
3. Express server data flows are from vanilla JavaScript transpiled by babel and node to JQuery once the HTML files are connected to the backend via the server
4. The socket-io library is intantiated both in the JQuery files via a script file that connects the library to the socket & io methods and event listeners as well as in the server. The flow of information therefore is via the Express server as it connects to the front-end JavaScript files in the HTML static connection of the two files.

<!-- ## How the app works - code base

FIX ME: CLEAN UP DOCS

1. In `Jquery scripts`, write the userMessage codeblock for the `element.submit()` event. The socket events `socket.emit()` waits for the user to type their message and registers it to the value of the input using the `element.value()` method

```
$("form").submit(() => {
  socket.emit("userMessage", $("#msgInputId").val());
  $("#msgInputId").val("");
  return false;
});
```

Use the `sockets.on()` method used and append the message to an <li> tag in the j-query

```
socket.on("message", (usrMsg) => {
        $("#messages").append($("<li>").text(usrMsg));
      });
```

Mirror this in Express `server.js` file using the `io.on()` method from the sockets library - io methods representing the server socket. The socket method represents the user socket.

```
io.on("connection", (socket) => {
  console.log("user connected");
  socket.on("message", (usrMsg) => {
    console.log(`user message: ${usrMsg}`);
    io.emit("message", usrMsg);
  });
```

2. Connect and disconnect users

In the j-query script, use the connect event to track when the user is connected to the server

```
socket.on('connect', () => {
        // uses the connect event
        socket.emit('message', 'socket-on: user connected');
      })
```

In Express `server.js` remove the test code and use the disconnect event

```
socket.on("disconnect", () => {
   // uses the disconnect event
   console.log("socket-off: user disconnected");
   io.emit("message", "io-server: user disconnected");
 });
```

Test this works with 2 instances of the app - 2 localhost:5000 in 2 chrome browser tabs and write a message for 2 users and check that this works in the terminal.

3. Create namespaces
   Namespaces are internal routes to separate rooms/ conversations using the `io.of()` method, which takes the argument of the internal route - it means that this server is dedicated to the internal user - the Head Teacher in this app.

To set the name space up,in Express `server.js` you need to add the namespace and assign it to a variable.

`const headTeacher = io.of("/headTeacher");`

The namespace is no longer io, so we change the code to:-

```
headTeacher.on("connection", (socket) => {
  console.log("user connected");
  socket.on("message", (usrMsg) => {
    console.log(`user message: ${usrMsg}`);
    headTeacher.emit("message", usrMsg);
  });

  socket.on("disconnect", () => {
    // using the disconnect event
    console.log("socket-off: user disconnected");
    headTeacher.emit("message", "io-server: user disconnected");
  });
});
```

The code is changed to reflect that this io - or server - has been reassigned to the Head Teacher who can use this name space to create rooms for teachers, pupils and parents. We change all instances of io to headTeacher from this code that we have updated above.

```
io.on("connection", (socket) => {
  console.log("user connected");
  socket.on("message", (usrMsg) => {
    console.log(`user message: ${usrMsg}`);
    io.emit("message", usrMsg);
  });

  socket.on("disconnect", () => {
    // using the disconnect event
    console.log("socket-off: user disconnected");
    io.emit("message", "io-server: user disconnected");
  });
});
```

In `Jquery scripts` the assignment of io to a socket `const socket = io()` is also reassigned to the Head via an internal route to connect the backend and front end socket instances `const socket = io('/headTeacher')`

4. Create the first room
   In `Jquery scripts`

   - assign the room to a variable `const room = 'parents'`
   - as we are adding rooms extract the message and assign it to a variable, pass both these variables to the `socket.emit("message",{})`method, as the second arg and as an object.

   ```
   const socket = io("/headTeacher");
      $("form").submit(() => {
        let schoolMessages = $("#msgInput").val();
        socket.emit("message", { schoolMessages, room });
        $("#msgInput").val("");
        return false;
      });
   ```

Use the socket event join, to pass the argument of the room, to show the user is in the room.

```
socket.on("connect", () => {
        socket.emit("join", { room: room });
      });
```

As we have changed the messages to school messages we also need to change the params in the append method

```
socket.on("message", (schoolMessages) => {
        $("#messages").append($("<li>").text(schoolMessages));
      });
```

In Express `server.js` we are now going to use event "join" from the sockets library. The second argument is the message data that is coming from the room. Once the namespace of the server that this room has been assigned to (the Head) is connected or is in the room, we use the socket method `.in(data.room)` passing the message data from that room. Then we chain on the emit method and emit the message data from the room.

```
headTeacher.on("connection", (socket) => {
  socket.on("join", (data) => {
    socket.join(data.room);
    headTeacher.in(data.room).emit(`Message: from room ${data.room}`);
  });
```

All the connection and disconnection code also needs to be changed as now we need to access the schoolMessage from the data object.

```
socket.on("message", (data) => {
    console.log(`message: ${data.schoolMessages}`);
    headTeacher.in(data.room).emit("message", data.schoolMessages);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");

    headTeacher.emit("message", "user disconnected");
  });
});
```

5. Add more rooms

In `HTML`

- Each room needs it own html boiler plate with JQuery
- Only one `index.html` page is required to route the rest of the pages
- The JQuery can be removed from this file as it is only needed in each chat room.

```
  <ul class="list-group col">
          <a href="/parents" class="list-group-item list-group-item-action"
            >Parents</a
          >
          <a href="/teachers" class="list-group-item">Teachers</a>
          <a href="/students" class="list-group-item">Students</a>
        </ul>
```

In `Jquery scripts` you need a new namespace for each room

In Express `server.js` You need to get the new route with the new absolute path.

```
app.get("/parents", (req, res) => {
  res.sendFile(
    "/Users/ssbt/Documents/GitHub/node.js-and-server-side-javascript/websocketsApp/public/parents.html"
  );
});
```

Once again, I refactored and moved `server.js` into the root file to use the path module in node

```
app.get("/parents", (req, res) => {
  res.sendFile(__dirname + "/public/parents.html");
});
```

Test the app is working go to the new route`http://localhost:5000/parents` and check it out on 2 servers, the code should still work. Check each of the rooms, the messages should only appear in the room assigned.
 -->
