const express = require('express');
const router = express.Router();
const StudentController = require('../controller/StudentController');
const StudentSchemaValidationUtil = require('../util/StudentSchemaValidationUtil');
const validate  = require('../middleware/ZodMiddleware');

router.post('/student',validate(StudentSchemaValidationUtil),StudentController.createStudent);

module.exports = router;