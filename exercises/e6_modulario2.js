var [directory, ext] = [process.argv[2], process.argv[3]];
var fileReader = require('./e6_modulario');

function filePrinter(err, fileList) {
  if (err) throw new Error('Unable to read directory');
  fileList.forEach(function (file) {
    console.log(file);
  });
}

fileReader(directory, ext, filePrinter);