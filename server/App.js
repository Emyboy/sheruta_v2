const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');

app.use(express.static('build'));
app.use(express.static(path.join(__dirname, "/", "../build/")));

app.get('*', (req, res) => {
    res.sendfile(path.join(__dirname, "/", "../build/index.html"));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});
