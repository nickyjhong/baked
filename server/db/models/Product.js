const Sequelize = require("sequelize");
const db = require("../db");

const Product = db.define("product", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  imageURL: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
    defaultValue: 'https://www.electricmirror.com/wp-content/uploads/2022/05/image-coming-soon-300x300.jpg',
  },
  price: {
    type: Sequelize.INTEGER,
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
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0,
      max: 100,
    },
    defaultValue: 50,
  },
  category: {
    type: Sequelize.ENUM('cake', 'cookie', 'cupcake', 'mini', 'other'),
  },
});

module.exports = Product;

// additional properties if enough time: color, ratings
