# Express server set up

Once you install the Express server with npm, you can instantiate it in your app.

Note: `app.get()` takes the absolute path name if your server is not in the root file

```
app.get("/", (req, res) => {
  res.sendFile(
    "/Users/ssbt/Documents/GitHub/node.js-and-server-side-javascript/websocketsApp/public/index.html"
  );
});
```

Shift the server file to root and you can use NodeJS path module to concat the file and directory names

```
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
```
