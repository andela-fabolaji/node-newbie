var fs = require('fs');
var path = require('path');

function fileReader(dirName, fileExt, cb) {
  fs.readdir(dirName, 'utf8', function (err, data) {
    if (!err && data) {
      var files = data.filter(function(eachFile) {
        if (path.extname(eachFile) === `.${fileExt}`) {
          return eachFile;
        }
      });

      return cb(null, files);
    }
    cb(err);
  });
}

module.exports = fileReader;