const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/users');

// @route POST /api/users/register
// @desc Register user
router.post('/register', registerUser);

// @route POST /api/users/login
// @desc Login user
router.post('/login', loginUser);

module.exports = router;
