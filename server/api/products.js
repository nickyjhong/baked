const router = require('express').Router();
const Product = require('../db/models/product');

// USER VIEW: VIEW SPECIFIC CATEGORY OF PRODUCT
router.get('/category/:categoryName', async (req, res, next) => {
  try {
    const categoryName = req.params.categoryName.toLowerCase();
    if (
      ['other', 'cookie', 'cake', 'mini', 'cupcake'].indexOf(categoryName) > -1
    ) {
      const result = await Product.findAll({
        where: {
          category: categoryName,
        },
      });
      res.send(result);
    } else {
      throw new Error('Category name not found');
    }
  } catch (err) {
    next(err);
  }
});

// USER VIEW: VIEW ALL PRODUCTS
router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.send(products);
  } catch (err) {
    next(err);
  }
});

//   USER VIEW: VIEW A SINGLE PRODUCT
router.get('/:id', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id);
    res.json(product);
    // res.send(product)
  } catch (err) {
    next(err);
  }
});

//   ADMIN VIEW: ADD A NEW PRODUCT TO SHOP PAGE
// router.post('/', async (req, res, next) => {
//   try {
//     res.status(201).send(await Product.create(req.body));
//   } catch (error) {
//     next(error);
//   }
// });
router.post('/', async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    res.send(product);
  } catch (err) {
    next(err);
  }
});

//   ADMIN VIEW: UPDATE A NEW PRODUCT TO SHOP PAGE
router.put('/:id', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id);
    const { name, imageURL, price, description, category, quantity } = req.body;
    const updatedProduct = await product.update({ name, imageURL, price, description, category, quantity });
    res.send(updatedProduct);
  } catch (error) {
    next(error);
  }
});

//   ADMIN VIEW: DELETE A PRODUCT FROM SHOP
router.delete('/:id', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id);
    await product.destroy();
    res.send(product);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
