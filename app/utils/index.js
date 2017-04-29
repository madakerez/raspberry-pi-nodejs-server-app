const crypto = require('crypto');

module.exports = {
  generateToken
}

function generateToken(userToken) {
  const token = crypto.createHmac('sha1', userToken).update('crypt').digest('hex')
  return token.substring(0,7);
}
