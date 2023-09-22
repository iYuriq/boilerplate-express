let express = require('express');
let app = express();

console.log("Hello World");

app.get('/', (req, res) => res.send('Hello Express'));

// function handler(req, res) {
//     return res.send('Hello Express');
// }

// app.get('/', handler);





























 module.exports = app;
