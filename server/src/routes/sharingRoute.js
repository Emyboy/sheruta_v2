const express = require('express');
const userValidation = require('../middlewares/userValidation');
const { validateToken } = userValidation;
const sharingController = require('../controllers/sharingController');
const {
    shareSignup,
    updateUserSharingStatus
} = sharingController;
const sharingRoute = express();




sharingRoute.post('/sharing/signup', shareSignup);
sharingRoute.post('/sharing/update/:userid/:token', validateToken, updateUserSharingStatus);



module.exports = sharingRoute;