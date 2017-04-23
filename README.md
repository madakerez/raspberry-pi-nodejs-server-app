# raspberry-pi-nodejs-server-app
This is a demo node.js application illustrating [Raspberry Pi](https://github.com/raspberrypi) + [NodeJS](https://github.com/nodejs) usage. 
App provides access to the Raspberry Pi GPIO interface and supporting regular GPIO.

## Requirements

* [NodeJs](http://nodejs.org) >= 6.x
* [npm](https://www.npmjs.com/) >= 3.x

## Install
```sh
$ git clone git://github.com/madakerez/raspberry-pi-nodejs-server-app.git
$ npm install
```

**NOTE:** After installation set value of `AUTH_NAME` and `AUTH_TOKEN` config.json file.

## Start
Start the app in the dev environment. Server starts on `http://localhost:3000` with live server reload provided by `nodemon`. Nodemon will watch the files in the directory in which nodemon was started, and if any files change, nodemon will automatically restart your node application.
```sh
$ npm run dev
```

## Production
Server starts on `http://localhost:3000`.
```sh
$ npm start
```
