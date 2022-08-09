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
  product.price *= 100
})

module.exports = Product;

// additional properties if enough time: color, ratings
