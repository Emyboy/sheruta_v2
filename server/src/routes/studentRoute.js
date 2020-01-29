const studentRoute = require('express').Router();
const studentController = require('../controllers/studentController');
const {
    addStudentHostel,
    getAllStudentHostels,
    getLatestHostelWithLimit,
    updateHostel,
    deleteHostel
} = studentController;

studentRoute.post('/student', addStudentHostel);
studentRoute.get('/student', getAllStudentHostels);
studentRoute.get('/student/:limit', getLatestHostelWithLimit);
studentRoute.put('/student/:hostelId', updateHostel);
studentRoute.delete('/student/:hostelId', deleteHostel);

module.exports = studentRoute;
