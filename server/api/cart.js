const router = require('express').Router();
const {
  models: { User, CartItem, Order, Product },
} = require('../db');
module.exports = router;
const { requireToken } = require('./middleware');

// SEE CART

// router.get('/', requireToken, async (req, res, next) => {
//   try {
//     let order = await Order.findOne({
//       where: {
//         userId: req.user.dataValues.id,
//         status: 'open',
//       },
//       include: [Product],
//     });
//     res.send(order);
//   } catch (err) {
//     next(err);
//   }
// });

router.get('/:userId', async(req, res, next) => {
  try {
    let cart = await Order.findOne({
      where: {
        userId: req.params.userId
      }
    })
  } catch(err) {
    next(err)
  }
})

// router.post('/:userId', async (req, res, send) => {
//   try {
//     let order = await Order.findOne({
//       where: {
//         // userId: req.user.dataValues.id,
//         userId: req.params.userId,
//         status: 'open',
//       },
//       include: [Product, CartItem],
//     });

//     if (!order) {
//       order = await Order.create({
//         status: 'open',
//         userId: req.params.userId,
//       });
//     }

    // Look in cartItems to find product by orderId and productId
    // If it doesn't exist 
      // Create a new cartItem
        // quantity
        // unitPrice
        // totalPrice
        // productId
        // orderId
    // return whole order (whats in cart)

//     res.send(order);
//   } catch (err) {
//     next(err);
//   }
// })

// FRONT END:
  // Button -> add product (using id)
  // Use thunk

// BACK END:
  // API Route to find order that is open and add product to cart

router.post('/', async (req, res, next) => {
  try {
    let cart = await Order.create(req.body.userId)
  } catch(err) {
    next(err)
  }
})