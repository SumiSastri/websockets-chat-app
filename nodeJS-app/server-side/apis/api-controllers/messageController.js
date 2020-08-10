const express = require("express");
const router = express.Router();

const MessageModel = require("../data-models/messageModel.js");

// GET @/messages route
router.get("/messages", (req, res) => {
  // find this message from MongoDB as it is no longer coming from the array
  MessageModel.find({}, (err, apiMessages) => {
    res.send(apiMessages);
  });
});

// app.get('/messages', (req, res) => {
//   res.send(messages)
// })

// POST to @/messages route
router.post("/messages", (req, res) => {
  let messageInputs = new MessageModel(req.body);

  messageInputs.save((err) => {
    if (err) sendStatus(500);
    //  Data from Mongo not a hard-coded array so we save it to MongoDB and take out the array method
    io.emit("message", req.body);
    res.sendStatus(200);
  });
});

// app.post("/messages", (req, res) => {
//   apiMessages.push(req.body);
//   io.emit("message", req.body);
//   res.sendStatus(200);
// });

module.exports = router;
