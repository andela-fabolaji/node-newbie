var http = require('http');
var bl = require('bl');
var url = process.argv[2];

function printContent(err, data) {
  if (err) throw new Error(err);
  var length = data.length;
  console.log(length);
  console.log(data);
}

function makeRequest(url, cb) {
  var chunk;
  http
    .get(url, function (res) {
      res
        .setEncoding('utf8')
        .pipe(bl(function (err, data) {
          if (!err && data) return cb(null, data.toString());
          cb(err);
        }));
    })
    .on('error', function (e) {
      console.error(e);
    })
    .end();
}

makeRequest(url, printContent);