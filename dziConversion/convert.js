const sharp = require('sharp');
const inputFileName = 'heic1509a.tiff'; //file name inside dziConversion folder goes here.
const outputFileName = inputFileName.slice(0, inputFileName.lastIndexOf('.'));

console.log(outputFileName);
console.log(__dirname+'\\outputFile\\'+outputFileName+'.dz');

sharp(inputFileName)
  .tile({
    size: 512
  })
  .toFile(__dirname+'\\outputFile\\'+outputFileName+'.dz', function(err, info) {
    // output.dzi is the Deep Zoom XML definition
    // output_files contains 512x512 tiles grouped by zoom level
  });
