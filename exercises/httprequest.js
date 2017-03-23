var https = require('https');
var buffer = require('bl');
var username = 'andela-fabolaji';


function getGithubData(user) {
  var options = {
    hostname: 'api.github.com',
    path: `/users/${user}`,
    headers: {
      'User-Agent': `${user}`,
      'accept': 'application/json'
    },
    method: 'GET'
  };
  var chunk;

  https
    .request(options, function (res) {
      res
        .on('data', function (data) {
          chunk += data;
        })
        .on('end', function () {
          return console.log('Data: ', chunk.toString());
        });
    })
    .on('error', function (err) {
      throw new Error(err.message);
    })
    .end();
}

function getGithubDataStream(user) {
  var options = {
    hostname: 'api.github.com',
    path: `/users/${user}`,
    headers: {
      'User-Agent': `${user}`,
      'accept': 'application/json'
    },
    method: 'GET'
  };
  var chunk;

  https
    .request(options, function (res) {
      res
        .setEncoding('utf8')
        .pipe(buffer(function (err, data) {
          if (err) throw new Error('unable to read url');
          data = data.toString();
          process.stdout.write(data);
        }));
    })
    .on('error', function (err) {
      throw new Error(err.message);
    })
    .end();
}

getGithubDataStream(username);