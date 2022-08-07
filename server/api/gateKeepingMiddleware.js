const {
  models: { User },
} = require('../db');
// store all of our functions that will act as middleware between our request and our response
// expect 'bad token' when this works
const requireToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const user = await User.findByToken(token);
    req.user = user;
  } catch (err) {
    next(err);
  }
};

module.exports = {
  requireToken,
};
