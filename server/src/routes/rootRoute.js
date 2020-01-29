const express = require('express');
const rootRoute = express.Router();
const hostelRoute = require('./hostelRoute');
const sharedRoute = require('./sharedRoute');
const userRoute = require('./userRoute');
const cartRoute = require('./cartRoute');
const sharingRoute = require('./sharingRoute');
const adminRoute = require('./adminRoute')
const cubeRoute = require('./cubeRoute');
const studentRoute = require('./studentRoute');
const shareUploadRoute = require('./shareUploadRoute');
const blogRoute = require('./blogRoute');
const scrapingRoute = require('./ScrapingRoute');
const messageRoute = require('./messageRoute');
const viewRoute = require('./viewRoute');

rootRoute.use(sharedRoute);
rootRoute.use(hostelRoute);
rootRoute.use(userRoute);
rootRoute.use(cartRoute);
rootRoute.use(sharingRoute);
rootRoute.use(adminRoute);
rootRoute.use(cubeRoute);
rootRoute.use(studentRoute);
rootRoute.use(shareUploadRoute);
rootRoute.use(blogRoute);
rootRoute.use(scrapingRoute);
rootRoute.use(messageRoute);
rootRoute.use(viewRoute);



module.exports = rootRoute;