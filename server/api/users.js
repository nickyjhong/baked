const router = require('express').Router();
const {
  models: { User, Order, Product },
} = require('../db');
const { requireToken, isAdmin } = require('./gateKeepingMiddleware');

// ADMIN VIEW: RETRIEVE ALL USERS ***requireToken + isAdmin 
router.get('/', async (req, res, next) => {
  try {
    const users =  await User.findAll({
      attributes: ['name', 'email'],
    });
    res.send(users);
  } catch (err) {
    next(err);
  }
});

// ADMIN VIEW: CREATE NEW USER
router.post('/', async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    const userToken = await newUser.generateToken();
    res.send(userToken);
  } catch (error) {
    next(error);
  }
});

// ADMIN VIEW: UPDATE USER ***requireToken
router.put('/:id', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    await user.update(req.body)
    res.send(user)
  } catch (error) {
    next(error);
  }
});

<<<<<<< HEAD
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

// ADMIN VIEW: DELETE USER
// router.delete('/:userId', async (req, res, next) => {
//   try {
//     const user = await User.findByPk(req.params.id);
//       await user.destroy();
//       res.send(user)
//   } catch (err) {
//     next(err);
//   }

// USER CAN SEE THEIR PROFILE -> NEED ***requireToken TO WORK
router.get('/profile', async (req, res, next) => {
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
    const user = await User.findByPk(req.user.dataValues.id, {
      attributes: [
        'name',
        'email',
        'address'
      ],
    });
    res.send(user);
  } catch (err) {
    next(err);
  }
});

// USER CAN UPDATE THEIR PROFILE *TIER 2
router.put('/account', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.user.dataValues.id, {
      attributes: [
        'name',
        'email',
        'address',
      ],
    });
    await user.update(req.body)
    res.send(user)
  } catch (error) {
    next(error);
  }
});

// USER CAN VIEW THEIR PAST ORDERS -> ***need requireToken to work
router.get('/orders', async (req, res, next) => {
  try {
    const userOrder = await Order.findAll({

      where: {
        userId: req.user.dataValues.id,
        status: 'closed'
      },
          include: [
        {
          model: Order,
          include: [Product]
        },
      ]
    });
    res.send(userOrder);
  } catch (err) {
    next(err);
  }
});

<<<<<<< HEAD
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
=======
>>>>>>> ebd36a46b3f069206cb7201f16e818c5102b4cb6

module.exports = router;