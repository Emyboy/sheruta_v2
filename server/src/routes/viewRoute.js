const express = require('express');
const viewRoute = express.Router();

const viewController = require('../controllers/viewController')
const { getAllAreas, Search } = viewController;

viewRoute.get('/views/area', getAllAreas);
viewRoute.post('/search/:area/:bedrooms/:sittingrooms/:type/:price', Search);

module.exports = viewRoute;
