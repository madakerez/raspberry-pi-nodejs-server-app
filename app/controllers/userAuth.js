var fs = require('fs');

class UserAuth {
  constructor() {
    this.getConfigFile();
    this.authData = null;
    this.activeUsers = ['scz'];
  }

  userAuth(userName, userPassword, res) {
    if (userName === this.authData.AUTH_NAME && userPassword === this.authData.AUTH_TOKEN) {
      this.userAuthAuthorized(res);
    } else {
      this.userAuthUnauthorized(res);
    }
  }

  userAuthAuthorized(res) {
    this.activeUsers.push(this.authData.AUTH_NAME);
    res.send('ok')
  }

  userAuthUnauthorized(res) {
    res.status(401).send('Bad name or password');
  }

  logout() {
    let userIndex = this.activeUsers.indexOf(this.authData.AUTH_NAME);
    if (userIndex > -1) {
      this.activeUsers.splice(userIndex, 1);
    }
  }

  getConfigFile() {
    fs.readFile(appRoot + '/config.json', 'utf8', (err, data) => {
      if (err) throw err;
      this.authData = JSON.parse(data);
    });
  }

}

module.exports = UserAuth;
