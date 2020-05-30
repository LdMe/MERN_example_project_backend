/*
**********************************************************
*   Main Router, include here the new routers you create *
**********************************************************
*/
const router=require('express').Router();

//-- Router for Login/Register
const authRouter = require('./authRouter');
router.use(authRouter);
//-- Router for User related routes
const userRouter = require('./userRouter');
router.use(userRouter);
//-- Router for Post related routes
//const PostRouter = require('./PostRouter');
//router.use(PostRouter);
//-- Router for Product related routes
//const ProductRouter = require('./ProductRouter');
//router.use(ProductRouter);
//-- Router for Category related routes
//const CategoryRouter = require('./CategoryRouter');
//router.use(CategoryRouter);
//-- Router for Order related routes
//const OrderRouter = require('./OrderRouter');
//router.use(OrderRouter);
//-- Router for readme
const readmeRouter = require('./readmeRouter');
router.use(readmeRouter);

module.exports=router;