const router = require('express').Router();
const { models: { User } } = require('../db');

router.get('/', async (req, res, next) => {
    try {
        const user = await User.findByToken(req.headers.authorization);
        res.send(await user.getCart());
    } catch (err) {
        next(err)
    }
});

// SHOWS ONLY ACTIVE ORDER ( AKA CART )
router.get('/:id/cart', async (req, res, next) => {
    try {
      const userOrder = await User.findByPk(req.params.id, {
        include: [
          {
            model: Order,
            where: {
              status: 'open',
            },
            include: [Product],
          },
        ],
        attributes: ['email'],
      });
      res.send(userOrder);
    } catch (err) {
      next(err);
    }
  });

module.exports = router;
