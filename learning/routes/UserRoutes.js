const express = require("express");
const app = express();
const router = express.Router()
const userController = require("../controller/UserController");

router.post('/user',userController.createUser)
router.get('/user',userController.getAllUsers)


module.exports = router;