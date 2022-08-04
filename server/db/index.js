const db = require('./db');

// Imported db [category] models
const User = require('./models/User');
const Product = require('./models/Product');
const Cart = require('./models/Cart');
const Order = require('./models/Order');

module.exports = {
  db,
  models: {
    User,
    Product,
    Order,
    Cart,
  },
};

User.hasMany(Order);
Order.belongsTo(User);
Order.belongsToMany(Product, { through: Cart });
Product.belongsToMany(Order, { through: Cart });
// Cart.belongsTo(User);
// User.belongsTo(Cart);
