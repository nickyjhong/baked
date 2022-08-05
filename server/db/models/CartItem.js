const Sequelize = require('sequelize');
const db = require('../db');

const CartItem = db.define('cart', {
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
  },
  unitPrice: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  totalPrice: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
});

module.exports = CartItem;
