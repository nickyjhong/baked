"use strict";

const {
  db,
  models: { User, Product },
} = require("../server/db");

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */

const customers = [
  {
    email: 'nicky@gmail.com',
    password: '123',
    name: 'Nicky',
    address: '4 Coding Blvd',
    userType: 'admin'
  },   {
    email: 'cherry@gmail.com',
    password: '123',
    name: 'Cherry',
    address: '3 Coding Blvd',
    userType: 'admin'
  },   {
    email: 'amy@gmail.com',
    password: '123',
    name: 'Amy',
    address: '2 Coding Blvd',
    userType: 'customer'
  }, {
    email: 'chris@gmail.com',
    password: '123',
    name: 'Chris',
    address: '1 Coding Blvd',
    userType: 'customer'
  }
]

const products = [
  {
    name: 'Fullerstack Academy',
    imageURL: 'http://dummyimage.com/100x100.png/ff4444/ffffff',
    price: 7.99,
    description: "If there's a Fullstack Academy, why isn't there a Fullerstack Academy?",
    SKU: 482488,
    category: 'book',
  },
  {
    name: 'Glass Half Fullstack Academy',
    imageURL: 'http://dummyimage.com/100x100.png/dddddd/000000',
    price: 5.99,
    description: "For the optimists who want to learn to code",
    SKU: 327048,
    category: 'electronic',
  },
];

const seed = async () => {
  try {
    await db.sync({ force: true });

    await Promise.all(customers.map(customer => {
      return User.create(customer);
    }))
    await Promise.all(products.map(product => {
      return Product.create(product)
    }))
  } catch (err) {
    console.log((err));
  }
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;