const express = require('express');
const cartRoute = express.Router();
const cartController = require('../controllers/cartController');
const userValiation = require('../middlewares/userValidation');
const {  validateToken  } = userValiation;
const { 
        addToCart,
        getAllCarts,
        getCartById,
        deleteUserCart,
        getUserCart,
        checkIfUserCubed
 } = cartController;


cartRoute.post('/carts/:token',validateToken,addToCart);
cartRoute.post('/carts/users/:userid/:token',validateToken,checkIfUserCubed)
cartRoute.get('/carts',getAllCarts);
cartRoute.get('/carts/:cartid',validateToken,getCartById);
cartRoute.get('/carts/:userid/:token',validateToken,getUserCart);
cartRoute.delete('/carts/:cartid',validateToken,deleteUserCart);


module.exports = cartRoute;
