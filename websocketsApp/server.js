const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const bodyParser = require("body-parser");
const server = require("http").Server(app);
const io = require("socket.io")(server);

app.use(cors());
app.use(express.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/parents", (req, res) => {
  res.sendFile(__dirname + "/public/parents.html");
});

app.get("/students", (req, res) => {
  res.sendFile(__dirname + "/public/students.html");
});

app.get("/teachers", (req, res) => {
  res.sendFile(__dirname + "/public/teachers.html");
});

// Head Teacher name space - rooms will be for teachers, parents and pupils
const headTeacher = io.of("/headTeacher");

headTeacher.on("connection", (socket) => {
  socket.on("join", (data) => {
    socket.join(data.room);
    headTeacher
      .in(data.room)
      .emit("message", `HeadTeacher-in: New user joined ${data.room} room!`);
  });

  socket.on("message", (data) => {
    console.log(`message: ${data.schoolMessages}`);
    headTeacher.in(data.room).emit("message", data.schoolMessages);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");

    headTeacher.emit("message", "user disconnected");
  });
});

server.listen(PORT, () => console.log(`your-app listening on ${PORT}`));
