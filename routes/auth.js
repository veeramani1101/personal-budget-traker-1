const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
const router = express.Router();

// Register
router.post('/register', async (req, res) => {
    // registration logic
});

// Login
router.post('/login', async (req, res) => {
    // login logic
});

module.exports = router;
