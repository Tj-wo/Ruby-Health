const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();  // Load environment variables from .env

const app = express();
const port = process.env.PORT || 3000; // Use port from .env or fallback to 3000

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Import routes
const routes = require('./routes/routes');
app.use('/', routes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
