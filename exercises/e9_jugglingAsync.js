var https = require('http');
var bl = require('bl');
var urls = process.argv;

function makeRequest (urlList) {
  for (var i = 2; i < urlList.length; i++) {
    handleHttp(urlList[i]);
  }
}

function handleHttp (url) {
  https
    .get(url, function (res) {
      res
        .pipe(bl(function (err, data) {
          if (err) console.error(err);
          console.log(data.toString());
        }));
    })
    .on('error', function (err) {
      console.error(err);
    })
    .end();
}

makeRequest(urls);
