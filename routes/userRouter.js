const express = require("express");
const router = express.Router()
const userController = require("../controllers/user/userController")

// Route to load the homepage
router.get("/", userController.loadHomepage);

router.get("/pageNotFound",userController.pageNotFound)


module.exports = router; 