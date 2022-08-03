const express = require('express');
const path = require('path');
const fs = require('fs');

var app = express();

app.use('/public', express.static(__dirname+'/public'));
app.use('/images', express.static(__dirname+'/images'));
app.use('/openseadragon', express.static(__dirname+'/openseadragon'));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/main.html'));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.get('/imageOptions', function(req, res){
  const testFolder = './images/';
  var fileNames = [];

  fs.readdirSync(testFolder).forEach(file => {
    fileNames.push(file);
  });
  res.send(fileNames);
});
