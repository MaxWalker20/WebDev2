const express = require('express');
const path = require('path');

var app = express();
app.use('/images', express.static(__dirname+'/images'));
app.use('/openseadragon', express.static(__dirname+'/openseadragon'));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/main.html'));
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
