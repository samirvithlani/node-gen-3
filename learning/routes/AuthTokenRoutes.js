const express = require("express");
const app = express();
const router = express.Router();
const authTokenController = require("../controller/AuthTokenController");

router.post("/authToken", authTokenController.createAuthToken);



module.exports = router;