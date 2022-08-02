const db = require('./db')

// Imported db [category] models
const User = require('./models/User')
const Product = require('./models/Product')

module.exports = {
  db,
  models: {
    User,
    Product,
  },
}
