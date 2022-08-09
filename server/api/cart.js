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
        productId: req.body.productId,
      },
    });

    // let newPrice = product.price * quantity

    if (!item) {
      await CartItem.create({
        orderId: order.id,
        productId: req.body.productId,
<<<<<<< HEAD
      });
    } else {
      product.update({
        quantity: 2,
      });
=======
        quantity: 1,
        unitPrice: product.price,
        totalPrice: unitPrice
      })
    } else {
      item.update({
        quantity: 2,
        // totalPrice: newPrice
      })
>>>>>>> 361c1a79452819d4475778dd7d4940f859ea078e
    }
    res.send(order);
  } catch (err) {
    next(err);
  }
});

router.delete('/:productId', requireToken, async (req, res, next) => {
  try {
    let orderIdObj = await Order.findOne({
      where: {
        userId: req.user.dataValues.id,
        status: 'open',
      },
    });

    if (orderIdObj) {
      await CartItem.destroy({
        where: {
          productId: req.params.productId,
          orderId: orderIdObj.id,
        },
      });
    }
    // regardless of delete result, return current cart products
    res.send(
      await Order.findOne({
        where: {
          userId: req.user.dataValues.id,
          status: 'open',
        },
        include: [Product],
      })
    );
  } catch (err) {
    next(err);
  }
});
