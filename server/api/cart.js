const router = require('express').Router();
const {
  models: { User, CartItem, Order, Product },
} = require('../db');
module.exports = router;
const { requireToken } = require('./middleware');

// SEE CART

router.get('/', requireToken, async (req, res, next) => {
  try {
    let order = await Order.findOne({
      where: {
        userId: req.user.dataValues.id,
        status: 'open',
      },
      include: [Product],
    });

    // if (!order) {
    //   order = await Order.create({
    //     status: 'open',
    //     userId: req.user.dataValues.id,
    //   });
    // }

    res.send(order);
  } catch (err) {
    next(err);
  }
});

router.put('/', requireToken, async (req, res, send) => {
  try {
    let order = await Order.findOne({
      where: {
        userId: req.user.dataValues.id,
        status: 'open',
      },
      include: [Product, CartItem],
    });
    console.log(req.body);
    console.log(order);
    if (!order) {
      order = await Order.create({
        status: 'open',
        userId: req.user.dataValues.id,
      });
    }

    res.send(order);
  } catch (err) {
    next(err);
  }
})
