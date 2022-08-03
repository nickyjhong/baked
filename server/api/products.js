const express = require('express')
const router = require('express').Router()
const Product  = require('../db/models/product');

// USER VIEW: VIEW ALL PRODUCTS
router.get('/', async (req, res, next) => {
    try {
      const products = await Product.findAll();
  
      res.send(products)
    } catch (err) {
      next(err) 
    }
  })
  
//   USER VIEW: VIEW A SINGLE PRODUCT
  router.get('/:id', async (req, res, next) => {
    try {
      const products = await Product.findByPk(req.params.id)
      res.json(products)
    } catch (err) {
      next(err)
    }
  })
  
//   ADMIN VIEW: ADD A NEW PRODUCT TO SHOP PAGE
  router.post('/', async (req, res, next) => {
    try {
      res.status(201).send(await Product.create(req.body));
    } catch (error) {
      next(error);
    }
  });
  
  //   ADMIN VIEW: UPDATE A NEW PRODUCT TO SHOP PAGE
  router.put('/:id', async (req, res, next) => {
    try {
      const product = await Product.findByPk(req.params.id);
      res.send(await product.update(req.body));
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
  
  module.exports = router