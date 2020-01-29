const express = require('express');
const adminRoute = express.Router();
const adminController = require('../controllers/adminController');
const { uploadPage  } = adminController;


adminRoute.get('/admin/upload',uploadPage)





module.exports = adminRoute;