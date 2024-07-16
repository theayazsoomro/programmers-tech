const express = require('express');
const router = express.Router();
const { createCourse, getCourses } = require('../controllers/courses');

// @route POST /api/courses
// @desc Create a new course
router.post('/', createCourse);

// @route GET /api/courses
// @desc Get all courses
router.get('/', getCourses);

module.exports = router;
