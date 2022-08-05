// do not use

const router = require('express').Router();
const { Cart, Order, Product, User } = require('../db');

// USER VIEW: VIEW ITEMS WITHIN CART
// router.get('/', async (req, res, next) => {
//   try {
//     const userOrder = await User.findByPk(req.params.id, {
//       include: [
//         {
//           model: Order,
//           where: {
//             status: 'open'
//           },
//           include: [Product]
//         },
//       ],
//       attributes: ['email'],
//     });
//     res.send(userOrder);
//   } catch (err) {
//     next(err);
//   }
// });

// router.get('/', async (req, res, next) => {
//   try {
//     const data = await Order.findAll({
//       where: {
//         userId: req.user.id,
//         closedOrder: true
//       },
//       include: [
//         {
//           model: Product
//         }
//       ]
//     })
//     res.json(data)
//     //}
//   } catch (err) {
//     next(err)
//   }
// })

// router.get('/:id', async (req, res, next) => {
//   try {
//     const cart = await Order.findAll({
//       where: {
//         userId: req.params.id,
//         status: 'closed',
//       },
//     });
//     res.send(cart);
//   } catch (err) {
//     next(err);
//   }
// });

module.exports = router;
