const router = require('express').Router();
const {
  models: { User },
} = require('../db');
module.exports = router;

// on Postman, error message in route
// "WHERE parameter \"email\" has invalid \"undefined\" value"
router.post('/login', async (req, res, next) => {
  try {
    res.send({ token: await User.authenticate(req.body) });
  } catch (err) {
    next(err);
  }
});

router.post('/signup', async (req, res, next) => {
  try {
    // prevents sequelize injection
    const { email, name, password } = req.body;
    const user = await User.create({ email, name, password });
    res.send({ token: await user.generateToken() });
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(401).send('User already exists');
    } else {
      next(err);
    }
  }
});

router.get('/me', async (req, res, next) => {
  try {
    res.send(await User.findByToken(req.headers.authorization));
  } catch (ex) {
    next(ex);
  }
});
