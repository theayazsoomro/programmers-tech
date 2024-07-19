const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getAllUsers } = require('../controllers/users.controller');

// @route POST /api/users/register
// @desc Register user
router.post('/register', registerUser);

// @route POST /api/users/login
// @desc Login user
router.post('/login', loginUser);

// get all users
router.get('/', getAllUsers);

module.exports = router;
