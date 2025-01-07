const express = require("express");
const router = express.Router()
const userController = require("../controllers/user/userController")

// Route to load the homepage
router.get("/", userController.loadHomepage);

// Route to load the pageNotFound page
router.get("/pageNotFound",userController.pageNotFound)

// Route to load the signin page
router.get("/signin",userController.loadSignIn)

// Route to load the signup page
router.get("/signup",userController.loadSignUP)

// Route to post the signup page
router.post("/signup",userController.signUP)


module.exports = router; 