const Sequelize = require('sequelize');
const db = require('../db');

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  imageURL: {
    type: Sequelize.TEXT,
    defaultValue: 'https://img.freepik.com/premium-vector/cartoon-illustration-cupcake-with-question-mark-cute-design_152558-23988.jpg',
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  category: {
    type: Sequelize.ENUM('cake', 'cookie', 'cupcake', 'mini', 'other'),
  },
});

Product.beforeSave((product) => {
  product.price *= 100;
});

module.exports = Product;

// additional properties if enough time: color, ratings
