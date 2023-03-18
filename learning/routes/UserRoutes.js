const express = require("express");
const app = express();
const router = express.Router();
const userController = require("../controller/UserController");
const auth = require("../middleware/AuthMiddleware");
const tokenMiddleware = require("../middleware/TokenMiddleware");

/**
 * @swagger
 * components:
 *   schemas:
 *    User:
 *     type: object
 *     required:
 *      - name
 *      - email
 *      - password
 *    properties:
 *     id:
 *       type: string
 *       description: The auto-generated id of the user
 *    name:
 *      type: string
 *      description: The name of the user
 *    email:
 *     type: string
 *     description: The email of the user
 *    password:
 *      type: string
 *      description: The password of the user
 *   role:
 *    type: string
 *    description: The role of the user
  
 * 
 * 
 */
router.post("/user", userController.createUser);
router.post("/user1", userController.createUser1);
router.get("/user", tokenMiddleware.tokenMiddleware,userController.getAllUsers);
router.delete("/user/:id", userController.deleteUser);
router.put("/user/:id", userController.updateUser);
router.get("/user/:id", userController.getuserById);
router.post("/user/login", userController.login);


module.exports = router;
