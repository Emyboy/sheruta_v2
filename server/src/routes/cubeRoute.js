const express = require('express');
const cubeController = require('../controllers/cubeController');
const cubeRoute = express.Router();
const {
    addToCube,
    removeCube,
    getAllCubes,
    checkIfUserCube,
    getUserCubes
} = cubeController;

cubeRoute.get('/cubes', getAllCubes);
cubeRoute.get('/user/cube/:userid', getUserCubes);
cubeRoute.post('/cube/:userid', addToCube);
cubeRoute.post('/user/cube', checkIfUserCube);
cubeRoute.delete('/cube', removeCube);

module.exports = cubeRoute;
