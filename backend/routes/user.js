const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");
const requireAuth = require("../middleware/requireAuth");

router.post("/login", userController.loginUser)

router.post("/signup", userController.signupUser)

router.use(requireAuth)

router.delete("/:id", userController.deleteUser)

module.exports = router