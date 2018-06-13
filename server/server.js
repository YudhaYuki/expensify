const path = require('path'); // Remember path is build in, so no need to install manually
const express = require('express');

// create an express application
const app = express();
const publicPath = path.join(__dirname, '..', 'public');

// We tell server to use the public directory to serve up all of our static assets
app.use(express.static(publicPath));

// If what the person requested isnt in the public folder, just give them index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

// We told it to start up on port 3000
app.listen(3000, () => {
    console.log('Server is up!');
});