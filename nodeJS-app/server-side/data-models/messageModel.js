const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// const apiMessages = [
//   { name: "Zee", message: "Hi gang" },
//   { name: "Paraic", message: "Hey whatsup" },
// ];
//  Model takes out hard coded array from server and puts it into a schema

const MessageModel = new Schema({
  name: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Message", MessageModel);
// OR module.exports = Message = mongoose.model('Message', MessageModel);
