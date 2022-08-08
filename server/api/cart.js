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
    res.send(order);
  } catch (err) {
    next(err);
  }
});

router.post('/', requireToken, async (req, res, next) => {
  try {
    let order = await Order.findOne({
      where: {
        userId: req.user.dataValues.id,
        status: 'open',
      },
      include: [Product],
    });

    if (!order) {
      order = await Order.create({
        status: 'open',
        userId: req.user.dataValues.id,
      });
    }

    let product = await Product.findOne({
      where: {
        id: req.body.productId
      }
    })

    let item = await CartItem.findOne({
      where: {
        orderId: order.id,
        productId: req.body.productId
      }
    })

    // let newPrice = product.price * quantity

    if (!item) {
      await CartItem.create({
        orderId: order.id,
        productId: req.body.productId,
        quantity: 1,
        unitPrice: product.price,
        totalPrice: unitPrice
      })
    } else {
      item.update({
        quantity: 2,
        // totalPrice: newPrice
      })
    }
    res.send(order);
  } catch (err) {
    next(err);
  }
})
