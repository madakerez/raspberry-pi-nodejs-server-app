var express = require('express');
const PinsManager = require(appRoot + '/app/controllers/pinsManager');
const UserAuth = require(appRoot + '/app/controllers/userAuth');

const pinsManager = new PinsManager();
const userAuth = new UserAuth();
/* API methods*/
const pinsRouter = express.Router();

/*user auth middleware*/
pinsRouter.get('/*', (req, res, next) => {
  let activeUsers = userAuth.activeUsers;
  /* TODO prepare middleware for token post params auth */
  let authData = userAuth.authData.AUTH_NAME;
  let userIndex = activeUsers.indexOf(authData);
  if (userIndex > -1) {
    next();
  } else {
    res.redirect('/');
  }
});

pinsRouter.get('/change_state/:pin', (req, res) => {
  let pin = req.params.pin;
  pinsManager.managePinState(pin);
  res.send(pin);
});

pinsRouter.get('/get_state/:pin', (req, res) => {
  let pin = req.params.pin;
  let pinState = pinsManager.getPinState(pin);
  let resData = {
    pinState: pinState
  }
  res.send(resData);
});

/* User methods*/
const userRouter = express.Router();

userRouter.post('/login', (req, res) => {
  let userName = req.body.name;
  let userPassword = req.body.password;
  userAuth.userAuth(userName, userPassword, res);
});

userRouter.get('/logout', (req, res) => {
  userAuth.logout();
  res.redirect('/');
});

module.exports = {
  pins: pinsRouter,
  user: userRouter
};