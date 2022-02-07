const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/corona-virus'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', { root: 'dist/corona-virus/' }),
);

app.listen(process.env.PORT || 8080);