"use strict";

const {
  db,
  models: { User, Product, CartItem, Order },
} = require("../server/db");

const products = [
  {
    name: "Sea Salt Chocolate Chip Cookie",
    imageURL:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    price: 1.99,
    description: "The most iconic cookie of all time topped with sea salt",
    category: "cookie",
  },
  {
    name: "Fullstack Cookie",
    imageURL:
      "https://images.unsplash.com/photo-1625876981820-be17a6807189?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNvb2tpZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    price: 2.99,
    description: "Cookie with Fullstack logo",
    category: "cookie",
  },
  {
    name: "Double Chocolate Cookie",
    imageURL:
      "https://images.unsplash.com/photo-1619149651177-b09092806f1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    price: 2.99,
    description: "Warmed chocolate cookie with white chocolate interior",
    category: "cookie",
  },
  {
    name: "Sugar Cookie",
    imageURL:
      "https://www.girlversusdough.com/wp-content/uploads/2019/02/soft-chewy-sugar-cookies-2.jpg",
    price: 1.99,
    description: "Classic sugar cookie",
    category: "cookie",
  },
  {
    name: "Funfetti Cookie",
    imageURL:
      "https://images.unsplash.com/photo-1621236378699-8597faf6a176?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHN1Z2FyJTIwY29va2llfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 2.99,
    description: "Now you can eat the rainbow in a cookie form",
    category: "cookie",
  },
  {
    name: "Peanut Butter Cookie",
    imageURL:
      "https://images.unsplash.com/photo-1607919965349-c3c790913de7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: 1.99,
    description:
      "WARNING: this product contains peanuts and traces of other allergens. Please do not consume if you have a known peanut allergy.",
    category: "cookie",
  },
  {
    name: "Rainbow Chocolate Cookie",
    imageURL:
      "https://www.thebakingchocolatess.com/wp-content/uploads/2022/03/IMG_8015.jpg",
    price: 2.99,
    description: "Colorful cookies with unique patterns",
    category: "cookie",
  },
  {
    name: "Kissed Cookie",
    imageURL:
      "https://images.unsplash.com/photo-1511730609347-730e2da3da59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    price: 1.99,
    description: "Our classic sugar cookie topped with a kiss",
    category: "cookie",
  },
  {
    name: "Love Cookie",
    imageURL:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/heart-shaped-cookies-easter-biscuits-1585914672.png?crop=1xw:0.6656671664167916xh;center,top&resize=640:*",
    price: 2.99,
    description: "Heart shaped cookie made with extra love ❤️",
    category: "cookie",
  },
  {
    name: "Iced Sugar Cookie",
    imageURL:
      "https://sallysbakingaddiction.com/wp-content/uploads/2017/12/sugar-cookies-royal-icing.jpg",
    price: 2.99,
    description: "Our classic sugar cookie with royal icing",
    category: "cookie",
  },
  {
    name: "Red Velvet Cake Slice",
    imageURL:
      "https://images.unsplash.com/photo-1602630209855-dceac223adfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FrZSUyMHNsaWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 4.99,
    description: "Red velvet cake with housemade cream cheese frosting",
    category: "cake",
  },
  {
    name: "Layered Chocolate Cake Slice",
    imageURL:
      "https://images.unsplash.com/photo-1517427294546-5aa121f68e8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    price: 4.99,
    description:
      "Chocolate cake with chocolate frosting for the ultimate chocolate lover",
    category: "cake",
  },
  {
    name: "Cheesecake Slice",
    imageURL:
      "https://images.unsplash.com/photo-1524351199678-941a58a3df50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    price: 4.99,
    description: "Classic cheesecake with graham cracker crust",
    category: "cake",
  },
  {
    name: "Cake Pop",
    imageURL:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2020/02/27/0/FNK_Cake-Pops_H1.jpg.rend.hgtvcom.826.620.suffix/1582853049838.jpeg",
    price: 1.99,
    description: "Colors and flavors may vary, please contact for availability",
    category: "cake",
  },
  {
    name: "Berry Napolean Cake Slice",
    imageURL:
      "https://i.pinimg.com/736x/73/55/6b/73556b985375c8ecc9472d716eaa01bd.jpg",
    price: 4.99,
    description:
      "Hybrid cross between pastry and cake with layers of fresh cream and berries",
    category: "cake",
  },
  {
    name: "Strawberry Shortcake Slice",
    imageURL:
      "https://images.unsplash.com/photo-1627308595171-d1b5d67129c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3RyYXdiZXJyeSUyMHNob3J0Y2FrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    price: 4.99,
    description: "Three ingredients: strawberry, short, and cake",
    category: "cake",
  },
  {
    name: "Tiramisu Cake Slice",
    imageURL:
      "https://justisafourletterword.com/wp-content/uploads/2021/06/Slice-of-Tiramisu-cake-on-a-plate-with-spoon.jpg",
    price: 4.99,
    description:
      "A tiramisu inspired flavored cake with hints of coffee and chocolate",
    category: "cake",
  },
  {
    name: "Rainbow Cake Slice",
    imageURL:
      "https://www.crazyforcrust.com/wp-content/uploads/2022/05/rainbow-cake-5-668x1002.jpg",
    price: 4.99,
    description: "Eat the rainbow through cake form",
    category: "cake",
  },
  {
    name: "Mille Feuille Crepe Slice",
    imageURL:
      "https://blog.cooksofcrocushill.com/wp-content/uploads/2020/06/CrepeCake-2-1-1024x683.jpg",
    price: 4.99,
    description:
      "French inspired cake with thin layers sandwiched between sweet cream",
    category: "cake",
  },
  {
    name: "Layered Vanilla Cake Slice",
    imageURL:
      "https://www.lifeloveandsugar.com/wp-content/uploads/2022/03/White-Cake-Recipe4.jpg",
    price: 4.99,
    description: "Fluffy vanilla layered cake with vanilla buttercream",
    category: "cake",
  },
  {
    name: "Strawberry Cupcake",
    imageURL:
      "https://images.unsplash.com/photo-1563778084459-859099e48677?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    price: 2.99,
    description:
      "Strawberry cupcake topped with naturally flavored strawberry frosting and a chocolate covered strawberry",
    category: "cupcake",
  },
  {
    name: "Red Velvet Cupcake",
    imageURL:
      "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y3VwY2FrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    price: 2.99,
    description: "Our red velvet cake but in a cupcake form",
    category: "cupcake",
  },
  {
    name: "Chocolate Hazelnut Delight Cupcake",
    imageURL:
      "https://images.unsplash.com/photo-1603532648955-039310d9ed75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y3VwY2FrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    price: 3.99,
    description:
      "Chocolate cupcake topped with rich chocolate frosting, crushed hazelnuts, and a Ferrero Rocher",
    category: "cupcake",
  },
  {
    name: "Cookies and Cream Cupcake",
    imageURL:
      "https://images.unsplash.com/photo-1612203985729-70726954388c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGN1cGNha2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    price: 3.99,
    description: "Oreos 🤝 Cupcake",
    category: "cupcake",
  },
  {
    name: "Thin Mint Cupcake",
    imageURL:
      "https://images.unsplash.com/photo-1587668178277-295251f900ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGN1cGNha2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    price: 3.99,
    description: "A Girl Scout Thin Mint cookie becomes a cupcake",
    category: "cupcake",
  },
  {
    name: "Flower Cupcake",
    imageURL:
      "https://www.brides.com/thmb/4AzF95j4aqj8-DIofiEaw8TEIDI=/3608x3608/filters:no_upscale():max_bytes(150000):strip_icc()/cozyoven_coralcupcakes-c5b8a15af6cd4fb085fddf2f0bc3ef38.jpg",
    price: 2.99,
    description:
      "Limited edition seasonal flower cupcake only available in the spring",
    category: "cupcake",
  },
  {
    name: "Chocolate Cupcake",
    imageURL:
      "https://sallysbakingaddiction.com/wp-content/uploads/2017/06/moist-chocolate-cupcakes-5.jpg",
    price: 2.99,
    description: "Our take on the classic chocolate cupcake",
    category: "cupcake",
  },
  {
    name: "Vanilla Cupcake",
    imageURL:
      "https://www.lifeloveandsugar.com/wp-content/uploads/2017/01/Moist-Vanilla-Cupcakes5-1.jpg",
    price: 2.99,
    description: "The most iconic and classic cupcake of them all",
    category: "cupcake",
  },
  {
    name: "Pineapple Upside Down Cupcake",
    imageURL:
      "https://budgetdelicious.com/wp-content/uploads/2021/02/pineapple-upside-down-cupcakes-resized-DSCF0668.jpg",
    price: 2.99,
    description: "ǝʞɐɔdnɔ ǝlddɐǝuᴉԀ",
    category: "cupcake",
  },
  {
    name: "Stroopwafel Inspired Cupcake",
    imageURL:
      "https://images.unsplash.com/photo-1623246123320-0d6636755796?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG11ZmZpbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    price: 2.99,
    description:
      "Caramel injected cupcake topped with caramel sauce and a waffle cone",
    category: "cupcake",
  },
  {
    name: "Strawberry and Cream Tart",
    imageURL:
      "https://images.unsplash.com/photo-1592382419665-40ded771c471?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    price: 2.99,
    description:
      "Housemade fresh whipped cream in an edible shell topped with fresh strawberries",
    category: "mini",
  },
  {
    name: "Berries and Cream Tart",
    imageURL:
      "https://images.unsplash.com/photo-1561339405-e1dd0d129449?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZnJ1aXQlMjB0YXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 2.99,
    description:
      "Fresh fruit tart with blackberries, raspberries, and strawberries",
    category: "mini",
  },
  {
    name: "Lemon Tart",
    imageURL:
      "https://www.wilton.com/dw/image/v2/AAWA_PRD/on/demandware.static/-/Sites-wilton-project-master/default/dw113cc44b/images/project/WLRECIP-418/Lemon-Raspberry-Tarts.jpg?sw=800&sh=800",
    price: 2.99,
    description: "Zesty homemade lemon curd filled in a pastry cup",
    category: "mini",
  },
  {
    name: "Portugese Egg Tart",
    imageURL:
      "https://assets.bonappetit.com/photos/59b807037f7c9a1ef926e5f6/5:7/w_2380,h_3332,c_limit/portuguese-egg-custard-tarts.jpg",
    price: 2.99,
    description: "Egg custard with a flakey crust and burnt top",
    category: "mini",
  },
  {
    name: "Apple Pie",
    imageURL:
      "https://i0.wp.com/www.livewellbakeoften.com/wp-content/uploads/2017/08/Mini-Apple-Pies.jpg?w=1360&ssl=1",
    price: 1.99,
    description: "Individual portion of a classic pie",
    category: "mini",
  },
  {
    name: "Pumpkin Pie",
    imageURL:
      "https://www.mybakingaddiction.com/wp-content/uploads/2018/10/Mini-Pumpkin-Pies-Pic.jpg",
    price: 1.99,
    description: "Individual serving of pumpkin pie",
    category: "mini",
  },
  {
    name: "Brownie",
    imageURL:
      "https://images.unsplash.com/photo-1583516867196-ea9a73ecdc13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    price: 2.99,
    description: "Fudgey brownie made with the highest quality chocolate",
    category: "other",
  },
  {
    name: "Blondie",
    imageURL:
      "https://www.tablefortwoblog.com/wp-content/uploads/2021/03/blondie-brownies-photo-tablefortwoblog-2-800x1200.jpg",
    price: 2.99,
    description: "A traditional brownie but made with white chocolate",
    category: "other",
  },
  {
    name: "Cheesecake Brownie",
    imageURL:
      "https://preppykitchen.com/wp-content/uploads/2016/06/cheesecake-brownies-feature-1.jpg",
    price: 3.99,
    description: "Cheesecake and brownie lovers unite",
    category: "other",
  },
  {
    name: "Brookie",
    imageURL:
      "https://www.dessarts.com/wp-content/uploads/2020/03/Brookies_720px_3.jpg",
    price: 3.99,
    description:
      "If a chocolate chip cookie and brownies had babies this would be the creation",
    category: "other",
  },
  {
    name: "Croissant",
    imageURL:
      "https://images.unsplash.com/photo-1619540158579-1b4fd3529849?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fGNyb2lzc2FudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    price: 2.99,
    description: "We swear these are homemade and not from Costco",
    category: "other",
  },
  {
    name: "Almond Croissant",
    imageURL:
      "https://images.unsplash.com/photo-1625425404751-19b16c027511?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fGNyb2lzc2FudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    price: 2.99,
    description:
      "Our classic buttery flakey croissant topped with slithered almonds",
    category: "other",
  },
  {
    name: "Pain Au Chocolat",
    imageURL: "https://data.thefeedfeed.com/recommended/post_3975085.jpeg",
    price: 2.99,
    description: "Classic French pastry paired with chocolate",
    category: "other",
  },
  {
    name: "Banana Nut Muffin",
    imageURL:
      "https://images.unsplash.com/photo-1557925923-6982bd9650ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bXVmZmlufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 2.99,
    description: "Homemade classic muffin",
    category: "other",
  },
  {
    name: "Blueberry Muffin",
    imageURL:
      "https://images.unsplash.com/photo-1599320207475-3d793554fda0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fG11ZmZpbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    price: 2.99,
    description: "Classic muffin perfect for a snack or on the go",
    category: "other",
  },
  {
    name: "Lemon Poppy Seed Muffin",
    imageURL:
      "https://www.lecremedelacrumb.com/wp-content/uploads/2021/02/lemon-poppy-seed-muffins-18sm-7.jpg",
    price: 2.99,
    description:
      "WARNING: do not consume prior to drug tests. We do not take responsibility for any unwanted outcomes and consumption of this product is the choice of the consumer",
    category: "other",
  },
  {
    name: "Cinnamon Roll",
    imageURL:
      "https://kellyneil.com/wp-content/uploads/2020/10/Small-Batch-Cinnamon-Rolls-52-500x500.jpg",
    price: 2.99,
    description: "Warmed (upon request) topped with glaze",
    category: "other",
  },
  {
    name: "Palmier",
    imageURL:
      "https://www.garnishandglaze.com/wp-content/uploads/2021/12/palmier-cookies-2.jpg",
    price: 1.99,
    description: "Flakey crispy cookie topped with granulated sugar",
    category: "other",
  },
];

const seed = async () => {
  try {
    await db.sync({ force: true });

    await Promise.all(
      products.map((product) => {
        return Product.create(product);
      })
    );
    let admin = await User.create({
      email: "admin@gmail.com",
      password: "123",
      firstName: "Admin",
      lastName: "Admin",
      address: "1 Coding Blvd",
      isAdmin: true,
    });
    
    let cakefean = await User.create({
      email: "cakelover@cake.com",
      password: "ilovecake",
      firstName: "Cake",
      lastName: "Cake",
      address: "600 Cake Road",
      isAdmin: false,
    });
    
    let cookiefean = await User.create({
      email: "cookielover@cookie.com",
      password: "ilovecookies",
      firstName: "Cookies",
      lastName: "Cookies",
      address: "489 Cookies Drive",
      isAdmin: false,
    });
    
    let cupcakefean = await User.create({
      email: "cupcakelover@cupcake.com",
      password: "ilovecupcakes",
      firstName: "Cupcakes",
      lastName: "Cupcakes",
      address: "823 Cupcake Avenue",
      isAdmin: false,
    });
    
    let muffinfean = await User.create({
      email: "muffinlover@muffin.com",
      password: "ilovemuffins",
      firstName: "Do You Know",
      lastName: "The Muffin Man",
      address: "Drury Lane",
      isAdmin: false,
    });
    
    let chocolatefean = await User.create({
      email: "chocolatelover@chocolate.com",
      password: "ilovechocolate",
      firstName: "Chocolate",
      lastName: "Chocolate",
      address: "98 Chocolate Street",
      isAdmin: false,
    });
    
    let rando = await User.create({
      email: "rando@rando.com",
      password: "random",
      firstName: "Random",
      lastName: "Mcrando",
      address: "9678 Random Boulevard",
      isAdmin: false,
    });
    
    let customer8 = await User.create({
      email: "gcrumbie4@gmail.com",
      password: "qcb55G8M6",
      firstName: "Gilberta",
      lastName: "Crumbie",
      address: "76 Graceland Circle",
      isAdmin: false,
    });
    
    let customer9 = await User.create({
      email: "mhurd5@chronoengine.com",
      password: "ihavealzheimers",
      firstName: "Marquita",
      lastName: "Hurd",
      address: "37103 Corben Street",
      isAdmin: false,
    });
    
    let customer10 = await User.create({
      email: "custy@cdc.gov",
      password: "123",
      firstName: "Ikey",
      lastName: "Eschelle",
      address: "10 Green Ridge Place",
      isAdmin: false,
    });  

    const dessert1 = await Product.findByPk(1); // cookie
    const dessert2 = await Product.findByPk(2); // cookie
    const dessert3 = await Product.findByPk(3); // cookie
    const dessert4 = await Product.findByPk(4); // cookie
    const dessert5 = await Product.findByPk(5); // cookie
    const dessert6 = await Product.findByPk(6); // cookie
    const dessert7 = await Product.findByPk(7); // cookie
    const dessert8 = await Product.findByPk(8); // cookie
    const dessert9 = await Product.findByPk(9); // cookie
    const dessert10 = await Product.findByPk(10); // cookie

    const dessert11 = await Product.findByPk(11); // cake
    const dessert12 = await Product.findByPk(12); // cake
    const dessert13 = await Product.findByPk(13); // cake
    const dessert14 = await Product.findByPk(14); // cake
    const dessert15 = await Product.findByPk(15); // cake
    const dessert16 = await Product.findByPk(16); // cake
    const dessert17 = await Product.findByPk(17); // cake
    const dessert18 = await Product.findByPk(18); // cake
    const dessert19 = await Product.findByPk(19); // cake
    const dessert20 = await Product.findByPk(20); // cake

    const dessert21 = await Product.findByPk(21); // cupcake
    const dessert22 = await Product.findByPk(22); // cupcake
    const dessert23 = await Product.findByPk(23); // cupcake
    const dessert24 = await Product.findByPk(24); // cupcake
    const dessert25 = await Product.findByPk(25); // cupcake
    const dessert26 = await Product.findByPk(26); // cupcake
    const dessert27 = await Product.findByPk(27); // cupcake
    const dessert28 = await Product.findByPk(28); // cupcake
    const dessert29 = await Product.findByPk(29); // cupcake

    const dessert30 = await Product.findByPk(30); // tart/mini

    const dessert31 = await Product.findByPk(31); // cupcake

    const dessert32 = await Product.findByPk(32); // tart/mini
    const dessert33 = await Product.findByPk(33); // tart/mini
    const dessert34 = await Product.findByPk(34); // pie/mini
    const dessert35 = await Product.findByPk(35); // pie/mini
    const dessert36 = await Product.findByPk(36); // other/chocolate
    const dessert37 = await Product.findByPk(37); // other/chocolate
    const dessert38 = await Product.findByPk(38); // other/chocolate
    const dessert39 = await Product.findByPk(39); // other/chocolate
    const dessert40 = await Product.findByPk(40); // other/chocolate
    const dessert41 = await Product.findByPk(41); // other/croissant
    const dessert42 = await Product.findByPk(42); // other/croissant
    const dessert43 = await Product.findByPk(43); // other/chocolate/croissant

    const dessert44 = await Product.findByPk(44); // muffin
    const dessert45 = await Product.findByPk(45); // muffin
    const dessert46 = await Product.findByPk(46); // muffin

    const dessert47 = await Product.findByPk(47); // other
    const dessert48 = await Product.findByPk(48); // other

    // admin1 orders
    const order1 = await Order.create({ status: "open" });
    const order2 = await Order.create({ status: "closed" });

    // cake2 orders
    const order3 = await Order.create({ status: "open" });
    const order4 = await Order.create({ status: "closed" });

    // cookie3 orders
    const order5 = await Order.create({ status: "open" });
    const order6 = await Order.create({ status: "closed" });
    const order7 = await Order.create({ status: "closed" });

    // cupcake4 orders
    const order8 = await Order.create({ status: "closed" });
    const order9 = await Order.create({ status: "closed" });

    // muffin5 orders
    const order10 = await Order.create({ status: "open" });

    // chocolate6 orders
    const order11 = await Order.create({ status: "closed" });

    // rando7 orders
    const order12 = await Order.create({ status: "open" });
    const order13 = await Order.create({ status: "closed" });

    // person8 orders
    const order14 = await Order.create({ status: "open" });

    // person9 ordres
    const order15 = await Order.create({ status: "closed" });
    const order16 = await Order.create({ status: "closed" });
    const order17 = await Order.create({ status: "closed" });
    const order18 = await Order.create({ status: "closed" });

    // person10 orders
    const order19 = await Order.create({ status: "open" });

    // admin1
    await order1.setUser(admin); // open
    await order2.setUser(admin); // closed

    // cake2
    await order3.setUser(cakefean); // open
    await order4.setUser(cakefean); // closed

    // cookie3
    await order5.setUser(cookiefean); // open
    await order6.setUser(cookiefean); // closed
    await order7.setUser(cookiefean); // closed

    // cupcake4
    await order8.setUser(cupcakefean); // open
    await order9.setUser(cupcakefean); // closed

    // muffin5
    await order10.setUser(muffinfean); // open

    // chocolate6
    await order11.setUser(chocolatefean); // closed

    // rando7
    await order12.setUser(rando); // open
    await order13.setUser(rando); // closed

    // person8
    await order14.setUser(customer8); // open

    // person9
    await order15.setUser(customer9); // closed
    await order16.setUser(customer9); // closed
    await order17.setUser(customer9); // closed
    await order18.setUser(customer9); // closed

    // person10
    await order19.setUser(customer10); // open

    // admin1 orders
    await order1.addProduct(dessert30); // open
    await order1.addProduct(dessert32);
    await order1.addProduct(dessert33);
    await order2.addProduct(dessert34); // closed
    await order2.addProduct(dessert35);

    // cake2 orders
    await order3.addProduct(dessert18); // open
    await order3.addProduct(dessert19);
    await order3.addProduct(dessert20);
    await order4.addProduct(dessert11); // closed
    await order4.addProduct(dessert12);
    await order4.addProduct(dessert13);
    await order4.addProduct(dessert14);
    await order4.addProduct(dessert15);
    await order4.addProduct(dessert16);
    await order4.addProduct(dessert17);

    // coookie3 orders
    await order5.addProduct(dessert1); // open
    await order5.addProduct(dessert2);
    await order5.addProduct(dessert3);
    await order6.addProduct(dessert4); // closed
    await order6.addProduct(dessert5);
    await order6.addProduct(dessert6);
    await order6.addProduct(dessert7);
    await order6.addProduct(dessert8);
    await order6.addProduct(dessert9);
    await order7.addProduct(dessert5); // closed
    await order7.addProduct(dessert6);
    await order7.addProduct(dessert7);
    await order7.addProduct(dessert8);
    await order7.addProduct(dessert9);
    await order7.addProduct(dessert10);

    // cupcake4 orders
    await order8.addProduct(dessert21); // open
    await order8.addProduct(dessert22);
    await order8.addProduct(dessert23);
    await order8.addProduct(dessert24);
    await order8.addProduct(dessert25);
    await order9.addProduct(dessert26); // closed
    await order9.addProduct(dessert27);
    await order9.addProduct(dessert28);
    await order9.addProduct(dessert29);
    await order9.addProduct(dessert31);

    // muffin5 orders
    await order10.addProduct(dessert44); // open
    await order10.addProduct(dessert45);
    await order10.addProduct(dessert46);

    // chocolate6 orders
    await order11.addProduct(dessert2); // closed
    await order11.addProduct(dessert4);
    await order11.addProduct(dessert7);
    await order11.addProduct(dessert11);
    await order11.addProduct(dessert12);
    await order11.addProduct(dessert22);
    await order11.addProduct(dessert23);
    await order11.addProduct(dessert24);
    await order11.addProduct(dessert25);
    await order11.addProduct(dessert37);
    await order11.addProduct(dessert38);
    await order11.addProduct(dessert39);
    await order11.addProduct(dessert40);
    await order11.addProduct(dessert43);

    // rando7 orders
    await order12.addProduct(dessert12); // open
    await order12.addProduct(dessert47);
    await order12.addProduct(dessert42);
    await order13.addProduct(dessert13); // closed
    await order13.addProduct(dessert12);
    await order13.addProduct(dessert47);
    await order13.addProduct(dessert42);

    // person8 orders
    await order14.addProduct(dessert43); // open
    await order14.addProduct(dessert43);
    await order14.addProduct(dessert43);

    // person9 orders
    await order15.addProduct(dessert15); // closed
    await order15.addProduct(dessert10);
    await order15.addProduct(dessert31);
    await order15.addProduct(dessert36);
    await order15.addProduct(dessert47);

    await order16.addProduct(dessert15); // closed
    await order16.addProduct(dessert10);
    await order16.addProduct(dessert31);
    await order16.addProduct(dessert36);
    await order16.addProduct(dessert47);

    await order17.addProduct(dessert15); // closed
    await order17.addProduct(dessert10);
    await order17.addProduct(dessert31);
    await order17.addProduct(dessert36);
    await order17.addProduct(dessert47);

    await order18.addProduct(dessert15); // closed
    await order18.addProduct(dessert10);
    await order18.addProduct(dessert31);
    await order18.addProduct(dessert36);
    await order18.addProduct(dessert47);

    // person10 orders
    await order19.addProduct(dessert36); // open
    await order19.addProduct(dessert35);
    await order19.addProduct(dessert41);
    await order19.addProduct(dessert48);
  } catch (err) {
    console.log(err);
  }
};

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

if (module === require.main) {
  runSeed();
}

module.exports = seed;
