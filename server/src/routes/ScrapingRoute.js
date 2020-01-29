const express = require('express');
const scrapingController = require('../controllers/ScrapingController');
const scrapingRoute = express.Router();

const { scrapeJiji } = scrapingController;

scrapingRoute.get('/scrapte/jiji', scrapeJiji);

module.exports = scrapingRoute;
