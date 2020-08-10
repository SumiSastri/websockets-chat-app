$(() => {
  $("#send").click(() => {
    const messageData = {
      name: $("#name").val(),
      message: $("#message").val(),
    };
    postMessage(messageData);
  });
  getMessages();
});

const addMessages = (messageData) => {
  $("#messages").append(
    `<h4> ${messageData.name} </h4> <p> ${messageData.message} </p>`
  );
};

const getMessages = () => {
  $.get("http://localhost:5000/messages", (data) => {
    data.forEach(addMessages);
  });
};

const postMessage = (messageData) => {
  $.post("http://localhost:5000/messages", messageData);
};
$("#send").click(() => {
  getMessages();
});
