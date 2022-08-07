const router = require('express').Router();
const {
  models: { User, CartItem, Order, Product },
} = require('../db');
const { requireToken, isAdmin } = require('./gateKeepingMiddleware');

router.get('/', requireToken, isAdmin, async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the name and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['name', 'email'],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    const userToken = await newUser.generateToken();
    res.send(userToken);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    res.send(user);
  } catch (err) {
    next(err);
  }
});

// SHOWS ALL ORDERS
router.get('/:id/orders', async (req, res, next) => {
  try {
    const userOrder = await User.findByPk(req.params.id, {
      include: [
        {
          model: Order,
          // where: {
          //   status: 'open'
          // }
          include: [Product],
        },
      ],
    });
    res.send(userOrder);
  } catch (err) {
    next(err);
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
      // attributes: ['email'],
    });
    res.send(userOrder);
  } catch (err) {
    next(err);
  }
});

router.get('/:id/orders/:orderId', async (req, res, next) => {
  try {
    const userOrder = await User.findByPk(req.params.id, {
      include: [
        {
          model: Order,
          where: {
            id: req.params.orderId,
          },
        },
      ],
      attributes: ['email'],
    });
    res.send(userOrder);
  } catch (err) {
    next(err);
  }
});

router.get('/:id/cart', async (req, res, next) => {
  try {
    const userOrder = await User.findByPk(req.params.id, {
      include: [
        {
          model: Order,
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

// Once user and cart associated by id, come back to write code
// router.put('/:id/cart', async (req, res, next) => {
//   try {
//     const userOrder = await User.findByPk(req.params.id, {
//       include: [
//         {
//           model: Cart,
//         },
//       ],
//       attributes: ['email'],
//     });
//     res.send(userOrder);
//   } catch (err) {
//     next(err);
//   }
// });

// Update user, do this when we get to tier 2
// router.put('/:id', async (req, res, next) => {
//   try {
//     const user = await User.findByPk(req.params.id);
//     res.send(user);
//   } catch (error) {
//     next(error);
//   }
// });

// Create login token
// router.post('/', async (req, res, next) => {
//   try {
//     const token = await User.authenticate(req.body);
//     res.send(token);
//   } catch (error) {
//     next(error);
//   }
// });
