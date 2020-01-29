const express = require('express');
const hostelRoute = express.Router();
const hostelController = require('../controllers/sharedController');
const authMiddleware = require('../middlewares/auth.middleware');
const {
  addSharedHostel,
  getSharedHostelById,
  updateSharedHostel,
  deleteSharedHostel,
  searchSharedHostel,
  updateSharedHostelViews,
  getLatestSharedApartments,
  getAllSharedHostels
} = hostelController;

const {
  validateAdminPassword
} = authMiddleware;

hostelRoute.post('/shared',  addSharedHostel);
hostelRoute.get('/shared/:hostelid', getSharedHostelById);
hostelRoute.get('/shared', getLatestSharedApartments);
hostelRoute.get('/shareds', getAllSharedHostels);
hostelRoute.post('/shared/search', searchSharedHostel);
hostelRoute.put('/shared/views/:hostelid', updateSharedHostelViews);
hostelRoute.put('/shared/:hostelid', updateSharedHostel);
hostelRoute.delete('/shared/:hostelid', validateAdminPassword, deleteSharedHostel);

module.exports = hostelRoute;
