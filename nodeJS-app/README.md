## Scaffolding & access

`git clone`
`npm init -y`
open HTML with live-server extension on VSCode or drag and drop file into browser

**Client side**
j-query, bootstrap, socket.io CDNs/Scripts

**Server-side**
Project dependencies
`npm install express body-parser cors dotenv mongoose socket.io`
Dev dependencies
`npm install --save-dev nodemon babel-cli babel-preset-env babel-preset-stage-0`

- Postman to check routes
- MongoDB as database

## Front-end

- HTML - A form with input elements for the message, a send button and an unordered list to display each of the messages. The main content is held in a container div. Within that two divs separate the input elements and the display of the messages in the ul tags.
- Bootstrap classes - A fluid container which makes the site responsive. Jumbotrons in Bootstrap allows you to focus or showcase specific elements, it will hold the messages. As we are using forms we can use the Bootstrap form-control class for the name of the message sender and the submit is the success class of button.

STEP 1: Add JavaScript library JQuery and functionality

- JQuery - **works as a separate file until the socket.io library is added. I had to shift it back to the main HTML section.**

Jquery sets the has the Document Ready function that takes a callback function. It
returns the document ready event will be called when the document finishes loading and all the elements in the document's DOM (document object model) are ready to be used.

To add functionality we write a function to add messages. This function takes the param of the message data - the name and the message as an object. We target the div tag in the HTML with the id of messages to use the method `.append()` to append the messages to this div when the submit button is clicked.

```
const addMessages = (messageData) => {
        $("#messages").append(
          `<h4> ${messageData.name} </h4> <p> ${messageData.message} </p>`
        );
      };
```

The submit button now takes the onclick callback, and passes the addMessages function hardcoding the data in the front end.

```
$("#send").click(() => {
          // data hardcoded front-end
          addMessages({ name: "Zee", message: "hi gang" });
        });
      });
```

STEP 2: Set up back end with Express server (see set-up in the Express section of this repo or check Express documentation).

In Express `server.js` Move the data from the front end (jQuery scripts) to the back end as a hardcoded array. To avoid confusion as to the origin of the data, I am calling this data `apiMessages` and the `inputMessages` for the frontend user inputs.

```
const apiMessages = [
  { name: "Zee", message: "Hi gang" },
  { name: "Paraic", message: "Hey whatsup" },
];
```

Connect the front-end and the backend through the Express midware, `app.use()` method

```
app.use(express.static(__dirname));
```

Make sure your get method is working - go to the port and check data is flowing.

```
app.get("/messages", (req, res) => {
  res.send(messages);
});
```

<img src="/nodeJS-app/assets/data-client-to-server.png" alt="console data flow check" height="250"/>

Now set up your post route.

In `JQuery scripts`

Now set up the get and post routes in the front end and change the functionality of the JavaSCript function body.

The click handler must now change as we are using the button click to get and post data from the backend, not the front end. So the value of the `messageData` object now is the value of the information typed into the input element by the user. We also set up a get and a post route on the front end, getting and posting the data to our backend API endpoint `/messages`
Those functions, now are also passed to the click handler.

```
$("#send").click(() => {
          let messageInputs = {
            name: $("#name").val(),
            message: $("#message").val(),
          };
          postMessage(messageInputs);
        });
  getMessages();
});
```

<img src="/nodeJS-app/assets/data-server-to-client.png" alt="server data flow check" height="250"/>

STEP 3: Add sockets library for polling the responses back in real-time.

Follow the steps 1-5 in the sockets section to connect the sockets front-end from the server

<img src="/nodeJS-app/assets/socket-test-server-to-client.png" alt="sockets data flow check" height="250"/>

And check if the reverse client to server is working in the terminal.

<img src="/nodeJS-app/assets/socket-test.png" alt="sockets data flow check" height="250"/>

STEP 4: Emit events from sockets

In Express `server.js`
Now that we know the server is on and working with the `io.on()` we are ready to use the `socket.emit()` method on the backend to listen to a message event. The call back is the body of the message request

```
  io.emit('message', req.body)
```

which is posted from the front end after the messages are pushed into the array.

In `JQuery scripts`

We can now pass the `addMessage()` function that we have created as the call-back of the `socket.on` method that is listening to message events on the front end and test if the front and back-end are communicating via this open socket.

```
    socket.on('message', addMessage)
```

You may find that the front-end and back-end are not communicating at this point.

- In the sockets section of this repo there is a 5-step debugging guide and a stack-overflow link to help ensure that the connection works.

Now that you can send hardcoded server data to the client and userinput data to the backend, we can persist the data in a MongoDb database.

STEP 5: Setting up MongoDb

There are 18 steps to set up in the Mongosection.

STEP 6: Apis

1. Api-controllers control the Api-routes
2. Api-routes consume data from the database to create the routes to and from the data-base
3. The controllers consume the Api-routes to connec the databases to the frontend
