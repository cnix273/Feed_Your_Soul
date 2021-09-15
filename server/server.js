// Express settings
// ================
const express        = require('express');
const path           = require('path');

// instantiate our app
const app            = express();

// require('./routes')(app);

app.get('*', (req, res) => {
  // res.sendFile(__dirname + "/public/index.html");
  const rootHtmlPath = path.resolve(__dirname, '..', 'public', 'index.html');
  res.sendFile(rootHtmlPath);
})

// our module get's exported as app.
module.exports = app;