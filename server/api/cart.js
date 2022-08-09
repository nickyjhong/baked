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

    let product = await CartItem.findOne({
      where: {
        orderId: order.id,
        productId: req.body.productId
      }
    })

    if (!product) {
      await CartItem.create({
        orderId: order.id,
        productId: req.body.productId
      })
    } else {
      product.update({
        quantity: 2
      })
    }
    res.send(order);
  } catch (err) {
    next(err);
  }
})

router.put('/', requireToken, async (req, res, next) => {
  try {
    let order = await Order.findOne({
      where: {
        userId: req.user.dataValues.id,
        status: 'open',
      },
      include: [Product],
    });

    let cartItem = CartItem.findOne({
      where: {
        orderId: order.id,
        productId: req.body.productId,
        // quantity: cartItem.quantity
      }
    });
    // cartItem.quantity++;
    // await cartItem.save();
    // res.send(cartItem)

    let newQuantity = cartItem.quantity + req.body.quantity;
    await cartItem.update({
      quantity: newQuantity
    })
    res.send(cartItem);
  } catch (err) {
    next(err)
  }
})