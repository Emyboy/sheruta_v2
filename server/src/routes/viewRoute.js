const express = require('express');
const viewRoute = express.Router();

const viewController = require('../controllers/viewController')
const { getAllAreas, Search } = viewController;

viewRoute.get('/views', getAllAreas);
viewRoute.post('/search/:area/:bedrooms/:bathrooms/:type/:price', Search);

module.exports = viewRoute;
