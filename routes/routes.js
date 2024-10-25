const express = require('express');
const router = express.Router();
const db = require('../models/db'); // Import your database connection

// Home route
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Example route for user login
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    // Add logic to validate user and return a response
});

module.exports = router;
