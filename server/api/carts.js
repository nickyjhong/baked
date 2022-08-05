const router = require('express').Router();
const { Cart, Order, Product, User } = require('../db');

// USER VIEW: VIEW ITEMS WITHIN CART
router.get('/', async (req, res, next) => {
    // console.log(req.users);
    try {
        const data = await User.findAll({
            where: {
                userId: req.users.id,
                type: 'active'
            },
            include: [
                {
                    model: Product
                }
            ]
        })
        res.json(data)
    } catch (err) {
        next(err)
    }
});

module.exports = router;