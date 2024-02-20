# Repo Access
<img src="https://github.com/SumiSastri/websockets-chat-app/blob/0b70584d734cd5e7ff6db43435f7a724978a9b99/websockets-chat-app/assets/images/web-sockets-chat-app.png" alt="websockets-chat-app" height="250"/>

- [Clone Repo](https://github.com/SumiSastri/websockets-chat-app.git)

This app has just been updated to the latest Node version
- Node v20.6.0
- Install dependencies - cd into server folder and `npm -install --y`
- Run `npm i --legacy-peers-deps` (update peer-dependencies if you have a different version of node)

__Client-server check__

- Run scripts `npm run start` - check server is up and running success message `your-app listening on 5000`

Client side go to 
- localhost:5000/
- localhost:5000/students
- localhost:5000/teachers
- localhost:5000/parents 

- Test drive the app

You should see messages in your console: An example from a demo:

<img src="https://github.com/SumiSastri/websockets-chat-app/blob/3baa5f28577d45919c1dd30ed5ef30d601127ba5/websockets-chat-app/assets/images/node-console-logs.png" alt="node-console-logs" height="150"/>

__Debugging__ 

Although there are debuggers in the scripts, you can also debug in terminal with the commands `DEBUG=express:*` and `DEBUG=* npm run start`

## Documentation

See docs folder for set-up and further documentation and references.
