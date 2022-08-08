const router = require('express').Router();
const {
  models: { User, CartItem, Order, Product },
} = require('../db');
module.exports = router;
const { requireToken } = require('./middleware');

<<<<<<< HEAD
router.get('/', requireToken, async (req, res, next) => {
=======
// SEE CART

router.get("/", requireToken, async (req, res, next) => {
>>>>>>> fe8d9b8e0ad72f575b560042990e2fa549ffa7ff
  try {
    let order = await Order.findOne({
      where: {
        userId: req.user.dataValues.id,
<<<<<<< HEAD
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
=======
        status: 'open'
      },
      include: [Product]
    })
    
    if (!order) {
      order = await Order.create({
        status: 'open',
        userId: req.user.dataValues.id
      })
    }

    res.send(order);
>>>>>>> fe8d9b8e0ad72f575b560042990e2fa549ffa7ff
  } catch (ex) {
    next(ex);
  }
});
