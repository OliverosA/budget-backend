const Guard = require('../models/guard');

module.exports = async (req, res, next) => {
  let isValidUser = true;

  if (isValidUser) {
    req.person = {
      person: 1,
      name: 'Oliver',
      email: 'OliverosA@github.com',
      password: '123',
    };
    return next();
  }
  return res.status(403).json({
    message: 'Unauthorized',
  });
};
