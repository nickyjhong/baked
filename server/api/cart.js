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
        productId: req.body.productId,
      },
    });

    if (!product) {
      await CartItem.create({
        orderId: order.id,
        productId: req.body.productId,
      });
    } else {
      product.update({
        quantity: 2,
      });
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

// router.put('/', requireToken, async (req, res, next) => {
//   try {
//     let order = await Order.findOne({
//       where: {
//         userId: req.user.dataValues.id,
//         status: 'open',
//       },
//     });

//     if (!order) {
//       order = await Order.create({
//         status: 'open',
//         userId: req.user.dataValues.id,
//       });
//     }

//     let cartItem = await CartItem.findOne({
//       where: {
//         orderId: order.id,
//         productId: req.body.productId,
//       },
//     });

//     const updatedQuantity = cartItem.quantity + req.body.quantityChange;
//     const updatedTotalCost = cartItem.unitPrice * updatedQuantity;

//     if (updatedQuantity <= 0) return;

//     await cartItem.update({
//       quantity: updatedQuantity,
//       totalPrice: updatedTotalCost,
//     });

//     res.send(
//       await Order.findOne({
//         where: {
//           id: order.id,
//         },
//         include: [Product],
//       })
//     );
//   } catch (err) {
//     next(err);
//   }
// });

router.put('/', requireToken, async (req, res, next) => {
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

    let product = await CartItem.findOne({
      where: {
        orderId: order.id,
        productId: req.body.productId,
      },
    });

    const newQuantity = product.quantity + req.body.newQuantity;

    if (newQuantity <= 0) return;

    await product.update({
      quantity: newQuantity,
    });

    res.send(
      await Order.findOne({
        where: {
          id: order.id,
        },
        include: [Product],
      })
    );
  } catch (err) {
    next(err);
  }
});
