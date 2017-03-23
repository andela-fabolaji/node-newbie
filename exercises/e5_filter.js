var fs = require('fs');
var path = require('path');
var [dirpath, ext] = [process.argv[2], process.argv[3]];

function printFileList(err, fileList) {
  if (err) throw new Error('Unable to read directory');
  
  fileList.forEach(function (file) {
    if (path.extname(file) === `.${ext}`) {
      console.log(file);
    }
  })
}

function readDir(dirpath, cb) {
  fs.readdir(dirpath, 'utf8', function (err, files) {
    if (!err && files) return cb(null, files);
    cb(err);
  });
}

readDir(dirpath, printFileList);