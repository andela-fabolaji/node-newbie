var fs = require('fs');
var filepath = process.argv[2];

function callback(err, data) {
  if (err) throw 'Unable to read file';
  var count = data.split('\n').length - 1;
  console.log(count);
}

function fileReader(path, cb) {
  fs.readFile(path, 'utf8', function (err, data) {
    if (!err && data) return cb(null, data);
    cb(err);
  });
}

fileReader(filepath, callback);