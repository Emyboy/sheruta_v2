const express = require("express");
const hostelRoute = express.Router();
const hostelController = require("../controllers/hostelController");
const authMiddleware = require("../middlewares/auth.middleware");
const {
  addHostel,
  getHostelById,
  getAllHostels,
  searchHostel,
  updateHostelViews,
  updateHostel,
  deleteHostel,
  getSimilarHostels,
  getAllHostelsLimit
} = hostelController;

const { validateAdminPassword } = authMiddleware;

hostelRoute.post("/hostels", addHostel);
hostelRoute.get("/hostels", getAllHostels);
hostelRoute.get("/hostels/:hostelid", getHostelById);
hostelRoute.get("/hostels/limit/:limit", getAllHostelsLimit);
hostelRoute.post("/hostels/search", searchHostel);
hostelRoute.put("/hostels/views/:hostelid", updateHostelViews);
hostelRoute.put("/hostels/:hostelid", updateHostel);
hostelRoute.delete("/hostels/:hostelid", validateAdminPassword, deleteHostel);
hostelRoute.get("/hostels/similar", getSimilarHostels);

module.exports = hostelRoute;
