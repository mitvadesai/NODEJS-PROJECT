
const express = require('express');

const routes = express.Router();

routes.use('/',require('./AuthRoutes'));
routes.use('/category',require('./CategoryRoute'));
routes.use('/subcategory',require('./subcategoryRoute'));
routes.use('/exsubcategory',require('./exsubcategoryRoute '));
routes.use('/product',require('./productrouts'));


module.exports = routes;
