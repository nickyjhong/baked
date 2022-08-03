'use strict';

const {
  db,
  models: { User, Product, Cart, Order },
} = require('../server/db');

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
    userType: 'admin',
  },
  {
    email: 'cherry@gmail.com',
    password: '123',
    name: 'Cherry',
    address: '3 Coding Blvd',
    userType: 'admin',
  },
  {
    email: 'amy@gmail.com',
    password: '123',
    name: 'Amy',
    address: '2 Coding Blvd',
    userType: 'admin',
  },
  {
    email: 'chris@gmail.com',
    password: '123',
    name: 'Chris',
    address: '1 Coding Blvd',
    userType: 'admin',
  },
];

const products = [
  {
    name: 'Salted Chocolate Chip Cookie',
    imageURL:
      'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
    price: 199,
    description: "Better than McDonald's",
    category: 'cookie',
  },
  {
    name: 'Fullstack Cookie',
    imageURL:
      'https://images.unsplash.com/photo-1625876981820-be17a6807189?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNvb2tpZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    price: 299,
    description: 'Cookie with Fullstack logo',
    category: 'cookie',
  },
  {
    name: 'Double Chocolate Cookie',
    imageURL:
      'https://images.unsplash.com/photo-1619149651177-b09092806f1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    price: 299,
    description: 'Warmed chocolate cookie with white chocolate interior',
    category: 'cookie',
  },
  {
    name: 'Sugar Cookie',
    imageURL:
      'https://www.girlversusdough.com/wp-content/uploads/2019/02/soft-chewy-sugar-cookies-2.jpg',
    price: 199,
    description: 'Classic sugar cookie',
    category: 'cookie',
  },
  {
    name: 'Funfetti Cookie',
    imageURL:
      'https://images.unsplash.com/photo-1621236378699-8597faf6a176?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHN1Z2FyJTIwY29va2llfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    price: 299,
    description: 'Now you can eat the rainbow in a cookie form',
    category: 'cookie',
  },
  {
    name: 'Peanut Butter Cookie',
    imageURL:
      'https://images.unsplash.com/photo-1607919965349-c3c790913de7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    price: 199,
    description:
      'WARNING: this product contains peanuts and traces of other allergens. Please do not consume if you have a known peanut allergy.',
    category: 'cookie',
  },
  {
    name: 'Rainbow Chocolate Cookie',
    imageURL:
      'https://www.thebakingchocolatess.com/wp-content/uploads/2022/03/IMG_8015.jpg',
    price: 299,
    description: 'Colorful cookies with unique patterns',
    category: 'cookie',
  },
  {
    name: 'Kissed Cookie',
    imageURL:
      'https://images.unsplash.com/photo-1511730609347-730e2da3da59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    price: 199,
    description: 'Our classic sugar cookie topped with a kiss',
    category: 'cookie',
  },
  {
    name: 'Love Cookie',
    imageURL:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/heart-shaped-cookies-easter-biscuits-1585914672.png?crop=1xw:0.6656671664167916xh;center,top&resize=640:*',
    price: 299,
    description: 'Heart shaped cookie made with extra love ❤️',
    category: 'cookie',
  },
  {
    name: 'Iced Sugar Cookie',
    imageURL:
      'https://sallysbakingaddiction.com/wp-content/uploads/2017/12/sugar-cookies-royal-icing.jpg',
    price: 299,
    description: 'Our classic sugar cookie with royal icing',
    category: 'cookie',
  },
  {
    name: 'Red Velvet',
    imageURL:
      'https://images.unsplash.com/photo-1602630209855-dceac223adfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FrZSUyMHNsaWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    price: 499,
    description: 'Red velvet cake with housemade cream cheese frosting',
    category: 'cake',
  },
  {
    name: 'Layered Chocolate',
    imageURL:
      'https://images.unsplash.com/photo-1517427294546-5aa121f68e8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
    price: 499,
    description:
      'Chocolate cake with chocolate frosting for the ultimate chocolate lover',
    category: 'cake',
  },
  {
    name: 'Cheesecake',
    imageURL:
      'https://images.unsplash.com/photo-1524351199678-941a58a3df50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
    price: 499,
    description: 'Classic cheesecake with graham cracker crust',
    category: 'cake',
  },
  {
    name: 'Cake Pop',
    imageURL:
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2020/02/27/0/FNK_Cake-Pops_H1.jpg.rend.hgtvcom.826.620.suffix/1582853049838.jpeg',
    price: 199,
    description: 'Colors and flavors may vary, please contact for availability',
    category: 'cake',
  },
  {
    name: 'Berry Neopolitan',
    imageURL:
      'https://i.pinimg.com/736x/73/55/6b/73556b985375c8ecc9472d716eaa01bd.jpg',
    price: 499,
    description:
      'Hybrid cross between pastry and cake with layers of fresh cream and berries',
    category: 'cake',
  },
  {
    name: 'Strawberry Shortcake',
    imageURL:
      'https://images.unsplash.com/photo-1627308595171-d1b5d67129c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3RyYXdiZXJyeSUyMHNob3J0Y2FrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    price: 499,
    description: 'Three ingredients: strawberry, short, and cake',
    category: 'cake',
  },
  {
    name: 'Tiramisu',
    imageURL:
      'https://justisafourletterword.com/wp-content/uploads/2021/06/Slice-of-Tiramisu-cake-on-a-plate-with-spoon.jpg',
    price: 499,
    description:
      'A tiramisu inspired flavored cake with hints of coffee and chocolate',
    category: 'cake',
  },
  {
    name: 'Rainbow',
    imageURL:
      'https://www.crazyforcrust.com/wp-content/uploads/2022/05/rainbow-cake-5-668x1002.jpg',
    price: 499,
    description: 'Eat the rainbow through cake form',
    category: 'cake',
  },
  {
    name: 'Mille Feuille Crepe',
    imageURL:
      'https://static.wikia.nocookie.net/cookingmama/images/6/69/20170202_mille.jpg/revision/latest?cb=20191024082003',
    price: 499,
    description:
      'French inspired cake with thin layers sandwiched between sweet cream',
    category: 'cake',
  },
  {
    name: 'Vanilla',
    imageURL:
      'https://www.lifeloveandsugar.com/wp-content/uploads/2022/03/White-Cake-Recipe4.jpg',
    price: 499,
    description: 'Fluffy vanilla layered cake with vanilla buttercream',
    category: 'cake',
  },
];

const seed = async () => {
  try {
    await db.sync({ force: true });

    await Promise.all(
      customers.map((customer) => {
        return User.create(customer);
      })
    );
    await Promise.all(
      products.map((product) => {
        return Product.create(product);
      })
    );

    let user1 = await User.findByPk(1, { include: [{ model: Order }] });

    const order1 = await Order.create({ type: 'closed' });
    await order1.setUser(user1);

    const dessert1 = await Product.findByPk(1);
    const dessert2 = await Product.findByPk(2);

    await order1.addProduct(dessert1);
    await order1.addProduct(dessert2);

    const order2 = await Order.create({ type: 'active' });
    await order2.setUser(user1);

    await order2.addProduct(dessert1);
    await order2.addProduct(dessert2);

    user1 = await User.findByPk(1, { include: { model: Order } });

    // Associate cart with user
  } catch (err) {
    console.log(err);
  }
};

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
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
