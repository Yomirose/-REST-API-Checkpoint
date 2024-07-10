const crypto = require('crypto');

const generateSecret = (length = 64) => {
  return crypto.randomBytes(length).toString('hex');
};

console.log(generateSecret());