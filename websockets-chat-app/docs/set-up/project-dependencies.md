# Project dependencies

- Project dependencies `npm install express nodemon socket.io cors body-parser -S`
- Dev dependencies `npm install --save-dev babel-cli babel-preset-env babel-preset-stage-0`

## Babel - set up

Babel transpiles NodeJS code back into browser-readable scripts which are older. To get the transpiler to work use the following set up

- Create a `.babelrc`  file `touch .babelrc` in root folder 
- Add the following code

```
{
  "presets": ["env", "stage-0"]
}
```
##  Package and script management

This repo has been updated to Node v20.6.0 the peer dependencies and their versions are in `package.json`, the `package-lock.json` file locks the version of the dependencies to the repo. With any updates you may also need to run Run `npm i --legacy-peers-deps` to update these dependencies.

__Express server and Nodemon__

- Make sure you have the right file path to your Express server
- The DEBUG=\* needs to be right at the beginning of the command

```
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon ./index.js --exec babel-node -e js",
    "debug": "DEBUG=express:* nodemon ./index.js --exec babel-node -e js"
  },

```
