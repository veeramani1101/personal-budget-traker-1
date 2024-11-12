const express = require('express');
const { Transaction } = require('../models');
const router = express.Router();

router.post('/add', async (req, res) => {
    // add transaction logic
});

router.get('/user/:userId', async (req, res) => {
    // retrieve transactions
});

module.exports = router;
