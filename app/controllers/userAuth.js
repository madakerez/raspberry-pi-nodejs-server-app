const fs = require('fs');
const { generateToken } =  require(appRoot + '/app/utils');

class UserAuth {
  constructor() {
    this.getConfigFile();
    this.authData = null;
    this.usersTokens = [];
  }

  userAuth(userName, userPassword, res) {
    if (userName === this.authData.AUTH_NAME && userPassword === this.authData.AUTH_PASSWORD) {
      let token = generateToken(this.authData.AUTH_TOKEN);
      this.usersTokens.push(token);
      this.userAuthorized(res, token);
    } else {
      this.userUnauthorized(res);
    }
  }

  userAuthorized(res, token) {
    let responseData = {
      messageText: 'authorized',
      authToken: token
    }
    res.send(responseData);
  }

  userUnauthorized(res) {
    res.status(401).send('Bad name or password');
  }

  isTokenValid(token) {
    return this.usersTokens.indexOf(token) !== -1;
  }

  logout() {
    let userIndex = this.activeUsers.indexOf(this.authData.AUTH_NAME);
    if (userIndex > -1) {
      this.activeUsers.splice(userIndex, 1);
    }
  }

  getConfigFile() {
    fs.readFile(appRoot + '/config.json', 'utf8', (err, data) => {
      if (err) throw 'No config.json file';
      this.authData = JSON.parse(data);
    });
  }

}

module.exports = UserAuth;
