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
    name: 'Sea Salt Chocolate Chip Cookie',
    imageURL:
      'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
    price: 199,
    description: 'The most iconic cookie of all time topped with sea salt',
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
    name: 'Red Velvet Cake Slice',
    imageURL:
      'https://images.unsplash.com/photo-1602630209855-dceac223adfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FrZSUyMHNsaWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    price: 499,
    description: 'Red velvet cake with housemade cream cheese frosting',
    category: 'cake',
  },
  {
    name: 'Layered Chocolate Cake Slice',
    imageURL:
      'https://images.unsplash.com/photo-1517427294546-5aa121f68e8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
    price: 499,
    description:
      'Chocolate cake with chocolate frosting for the ultimate chocolate lover',
    category: 'cake',
  },
  {
    name: 'Cheesecake Slice',
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
    name: 'Berry Napolean Cake Slice',
    imageURL:
      'https://i.pinimg.com/736x/73/55/6b/73556b985375c8ecc9472d716eaa01bd.jpg',
    price: 499,
    description:
      'Hybrid cross between pastry and cake with layers of fresh cream and berries',
    category: 'cake',
  },
  {
    name: 'Strawberry Shortcake Slice',
    imageURL:
      'https://images.unsplash.com/photo-1627308595171-d1b5d67129c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3RyYXdiZXJyeSUyMHNob3J0Y2FrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    price: 499,
    description: 'Three ingredients: strawberry, short, and cake',
    category: 'cake',
  },
  {
    name: 'Tiramisu Cake Slice',
    imageURL:
      'https://justisafourletterword.com/wp-content/uploads/2021/06/Slice-of-Tiramisu-cake-on-a-plate-with-spoon.jpg',
    price: 499,
    description:
      'A tiramisu inspired flavored cake with hints of coffee and chocolate',
    category: 'cake',
  },
  {
    name: 'Rainbow Cake Slice',
    imageURL:
      'https://www.crazyforcrust.com/wp-content/uploads/2022/05/rainbow-cake-5-668x1002.jpg',
    price: 499,
    description: 'Eat the rainbow through cake form',
    category: 'cake',
  },
  {
    name: 'Mille Feuille Crepe Slice',
    imageURL:
      'https://blog.cooksofcrocushill.com/wp-content/uploads/2020/06/CrepeCake-2-1-1024x683.jpg',
    price: 499,
    description:
      'French inspired cake with thin layers sandwiched between sweet cream',
    category: 'cake',
  },
  {
    name: 'Layered Vanilla Cake Slice',
    imageURL:
      'https://www.lifeloveandsugar.com/wp-content/uploads/2022/03/White-Cake-Recipe4.jpg',
    price: 499,
    description: 'Fluffy vanilla layered cake with vanilla buttercream',
    category: 'cake',
  },
  {
    name: 'Strawberry Cupcake',
    imageURL: 'https://images.unsplash.com/photo-1563778084459-859099e48677?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    price: 299,
    description: 'Strawberry cupcake topped with naturally flavored strawberry frosting and a chocolate covered strawberry',
    category: 'cupcake',
  },
  {
    name: 'Red Velvet Cupcake',
    imageURL: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y3VwY2FrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    price: 299,
    description: 'Our red velvet cake but in a cupcake form',
    category: 'cupcake',
  },
  {
    name: 'Chocolate Hazelnut Delight Cupcake',
    imageURL: 'https://images.unsplash.com/photo-1603532648955-039310d9ed75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y3VwY2FrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    price: 399,
    description: 'Chocolate cupcake topped with rich chocolate frosting, crushed hazelnuts, and a Ferrero Rocher',
    category: 'cupcake',
  },
  {
    name: 'Cookies and Cream Cupcake',
    imageURL: 'https://images.unsplash.com/photo-1612203985729-70726954388c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGN1cGNha2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    price: 399,
    description: 'Oreos 🤝 Cupcake',
    category: 'cupcake',
  },
  {
    name: 'Thin Mint Cupcake',
    imageURL: 'https://images.unsplash.com/photo-1587668178277-295251f900ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGN1cGNha2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    price: 399,
    description: 'A Girl Scout Thin Mint cookie becomes a cupcake',
    category: 'cupcake',
  },
  {
    name: 'Flower Cupcake',
    imageURL: 'https://www.brides.com/thmb/4AzF95j4aqj8-DIofiEaw8TEIDI=/3608x3608/filters:no_upscale():max_bytes(150000):strip_icc()/cozyoven_coralcupcakes-c5b8a15af6cd4fb085fddf2f0bc3ef38.jpg',
    price: 299,
    description: 'Limited edition seasonal flower cupcake only available in the spring',
    category: 'cupcake',
  },
  {
    name: 'Chocolate Cupcake',
    imageURL: 'https://sallysbakingaddiction.com/wp-content/uploads/2017/06/moist-chocolate-cupcakes-5.jpg',
    price: 299,
    description: 'Our take on the classic chocolate cupcake',
    category: 'cupcake',
  },
  {
    name: 'Vanilla Cupcake',
    imageURL: 'https://www.lifeloveandsugar.com/wp-content/uploads/2017/01/Moist-Vanilla-Cupcakes5-1.jpg',
    price: 299,
    description: 'The most iconic and classic cupcake of them all',
    category: 'cupcake',
  },
  {
    name: 'Pineapple Upside Down Cupcake',
    imageURL: 'https://budgetdelicious.com/wp-content/uploads/2021/02/pineapple-upside-down-cupcakes-resized-DSCF0668.jpg',
    price: 299,
    description: 'ǝʞɐɔdnɔ ǝlddɐǝuᴉԀ',
    category: 'cupcake',
  },
  {
    name: 'Stroopwafel Inspired Cupcake',
    imageURL: 'https://images.unsplash.com/photo-1623246123320-0d6636755796?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG11ZmZpbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    price: 299,
    description: 'Caramel injected cupcake topped with caramel sauce and a waffle cone',
    category: 'cupcake',
  },
  {
    name: 'Strawberry and Cream Tart',
    imageURL: 'https://images.unsplash.com/photo-1592382419665-40ded771c471?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    price: 299,
    description: 'Housemade fresh whipped cream in an edible shell topped with fresh strawberries',
    category: 'mini',
  },
  {
    name: 'Berries and Cream Tart',
    imageURL: 'https://images.unsplash.com/photo-1561339405-e1dd0d129449?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZnJ1aXQlMjB0YXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    price: 299,
    description: 'Fresh fruit tart with blackberries, raspberries, and strawberries',
    category: 'mini',
  },
  {
    name: 'Lemon Tart',
    imageURL: 'https://www.wilton.com/dw/image/v2/AAWA_PRD/on/demandware.static/-/Sites-wilton-project-master/default/dw113cc44b/images/project/WLRECIP-418/Lemon-Raspberry-Tarts.jpg?sw=800&sh=800',
    price: 299,
    description: 'Zesty homemade lemon curd filled in a pastry cup',
    category: 'mini',
  },
  {
    name: 'Portugese Egg Tart',
    imageURL: 'https://assets.bonappetit.com/photos/59b807037f7c9a1ef926e5f6/5:7/w_2380,h_3332,c_limit/portuguese-egg-custard-tarts.jpg',
    price: 299,
    description: 'Egg custard with a flakey crust and burnt top',
    category: 'mini',
  },
  {
    name: 'Apple Pie',
    imageURL: 'https://i0.wp.com/www.livewellbakeoften.com/wp-content/uploads/2017/08/Mini-Apple-Pies.jpg?w=1360&ssl=1',
    price: 199,
    description: 'Individual portion of a classic pie',
    category: 'mini',
  },
  {
    name: 'Pumpkin Pie',
    imageURL: 'https://www.mybakingaddiction.com/wp-content/uploads/2018/10/Mini-Pumpkin-Pies-Pic.jpg',
    price: 199,
    description: 'Individual serving of pumpkin pie',
    category: 'mini',
  },
  {
    name: 'Brownie',
    imageURL: 'https://images.unsplash.com/photo-1583516867196-ea9a73ecdc13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    price: 299,
    description: 'Fudgey brownie made with the highest quality chocolate',
    category: 'other',
  },
  {
    name: 'Blondie',
    imageURL: 'https://www.tablefortwoblog.com/wp-content/uploads/2021/03/blondie-brownies-photo-tablefortwoblog-2-800x1200.jpg',
    price: 299,
    description: 'A traditional brownie but made with white chocolate',
    category: 'other',
  },
  {
    name: 'Cheesecake Brownie',
    imageURL: 'https://preppykitchen.com/wp-content/uploads/2016/06/cheesecake-brownies-feature-1.jpg',
    price: 399,
    description: 'Cheesecake and brownie lovers unite',
    category: 'other',
  },
  {
    name: 'Brookie',
    imageURL: 'https://www.dessarts.com/wp-content/uploads/2020/03/Brookies_720px_3.jpg',
    price: 399,
    description: 'If a chocolate chip cookie and brownies had babies this would be the creation',
    category: 'other',
  },
  {
    name: 'Croissant',
    imageURL: 'https://images.unsplash.com/photo-1619540158579-1b4fd3529849?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fGNyb2lzc2FudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    price: 299,
    description: 'We swear these are homemade and not from Costco',
    category: 'other',
  },
  {
    name: 'Almond Croissant',
    imageURL: 'https://images.unsplash.com/photo-1625425404751-19b16c027511?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fGNyb2lzc2FudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    price: 299,
    description: 'Our classic buttery flakey croissant topped with slithered almonds',
    category: 'other',
  },
  {
    name: 'Pain Au Chocolat',
    imageURL: 'https://data.thefeedfeed.com/recommended/post_3975085.jpeg',
    price: 299,
    description: 'Classic French pastry paired with chocolate',
    category: 'other',
  },
  {
    name: 'Banana Nut Muffin',
    imageURL: 'https://images.unsplash.com/photo-1557925923-6982bd9650ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bXVmZmlufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    price: 299,
    description: 'Homemade classic muffin',
    category: 'other',
  },
  {
    name: 'Blueberry Muffin',
    imageURL: 'https://images.unsplash.com/photo-1599320207475-3d793554fda0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fG11ZmZpbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    price: 299,
    description: 'Classic muffin perfect for a snack or on the go',
    category: 'other',
  },
  {
    name: 'Lemon Poppy Seed Muffin',
    imageURL: 'https://www.lecremedelacrumb.com/wp-content/uploads/2021/02/lemon-poppy-seed-muffins-18sm-7.jpg',
    price: 299,
    description: 'WARNING: do not consume prior to drug tests. We do not take responsibility for any unwanted outcomes and consumption of this product is the choice of the consumer',
    category: 'other',
  },
  {
    name: 'Cinnamon Roll',
    imageURL: 'https://kellyneil.com/wp-content/uploads/2020/10/Small-Batch-Cinnamon-Rolls-52-500x500.jpg',
    price: 299,
    description: 'Warmed (upon request) topped with glaze',
    category: 'other',
  },
  {
    name: 'Palmier',
    imageURL: 'https://www.garnishandglaze.com/wp-content/uploads/2021/12/palmier-cookies-2.jpg',
    price: 199,
    description: 'Flakey crispy cookie topped with granulated sugar',
    category: 'other',
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
