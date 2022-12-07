const express = require("express");
const app = express();
const router = express.Router()
const userController = require("../controller/UserController");

router.post('/user',userController.createUser)
router.get('/user',userController.getAllUsers)
router.delete('/user/:id',userController.deleteUser)
router.put('/user/:id',userController.updateUser)
router.get('/user/:id',userController.getuserById)

module.exports = router;