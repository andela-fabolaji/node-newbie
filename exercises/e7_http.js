var http = require('http');
var url = process.argv[2];

function getRequest(url) {
  http
    .get(url, function (res) {
      res
        .setEncoding('utf8')
        .on('data', function (data) {
          console.log(data.toString());
        })
        .on('error', function (error) {
          console.error(error)
        });
    })
    .end();
}

getRequest(url);