const express = require('express');
const sharedUploadRoute = express.Router();
const shareduploadController = require('../controllers/shareUploadController');

const {
    uploadShareData
} = shareduploadController;

sharedUploadRoute.post('/share/upload', uploadShareData);

module.exports = sharedUploadRoute;
