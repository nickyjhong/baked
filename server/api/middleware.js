// const { models: { User }} = require('../db')

// const requireToken = async (req, res, next) => {
//   try {
//     const token = req.headers.authorization
//     const user = await User.findByToken(token)
//     req.user = user
//     next()
//   } catch(err) {
//     next(err)
//   }
// }

// module.exports = {
//   requireToken,
// }


const e = require('express');
const {
  models: { User },
} = require('../db');

const requireToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization
    const user = await User.findByToken(token)
    req.user = user
    next()
  } catch(err) {
    next(err)
  }
}

const isAdmin = (req, res, next) => {
  // if we get past requireToken, we can guarentee we are a user
  // we have access to req.user
  if (!req.user.isAdmin) {
    return res.status(403).send('You shall not pass!');
  } else {
    next();
  }
};

module.exports = {
  requireToken,
  isAdmin,
};