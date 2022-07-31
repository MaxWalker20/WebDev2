const express = require('express');
const path = require('path');

var app = express();
app.get('/', function (req, res) {
  app.use(express.static('images'));
  res.sendFile(path.join(__dirname+'/main.html'));
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
