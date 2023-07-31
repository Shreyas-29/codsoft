
const express = require('express');
const app = express();
const path = require('path');

// Serve static files (HTML, CSS, etc.)
app.use(express.static(path.join(__dirname, 'src')));

// Start the server
const port = 3000; // Replace with your desired port number
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});
