const Sequelize = require("sequelize");
const db = require("../db");

const Order = db.define("order", {
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
  },
  type: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  totalPrice: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
});

module.exports = Order;
