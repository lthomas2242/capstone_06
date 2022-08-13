const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8000;
const server = require('http').Server(app);

app.use(express.static(capstone_06, 'dist', {index: false}));


server.listen(port, function() {
    console.log("App running on port " + port);
})

// PathLocationStrategy

app.get('', function(req, res) {
    res.sendFile(path.join(capstone_06, 'src', 'index.html'));
});

app.get('/', function(req, res) {
    res.sendFile(path.join(capstone_06, 'src', 'index.html'));
});