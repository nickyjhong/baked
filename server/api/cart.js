const router = require('express').Router();
const {
  models: { User, CartItem, Order, Product },
} = require('../db');
module.exports = router;
const { requireToken } = require('./middleware');

router.get('/', requireToken, async (req, res, next) => {
  try {
    let order = await Order.findOne({
      where: {
        userId: req.user.dataValues.id,
        status: 'open',
      },
    });
    if (!order) {
      order = await Order.create({
        status: 'open',
        userId: req.user.dataValues.id,
      });
    }

    res.send(
      await Order.findOne({
        where: {
          id: order.id,
        },
        include: [Product],
        order: [[Product, 'id', 'desc']], // adding order by so the result will not jump around
      })
    );
  } catch (ex) {
    next(ex);
  }
});
