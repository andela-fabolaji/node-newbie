var fs = require('fs');
var filePath = process.argv[2];

function fileReader (filePath) {
  var files = fs.readFileSync(filePath, 'utf8');
  var count = files.split('\n').length - 1;
  console.log(count);
}

fileReader(filePath);