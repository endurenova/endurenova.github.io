var https = require('https');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
var path = require('path');
var sanitizeHtml = require('sanitize-html');

var app = http.createServer(function (request, response) {
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var pathname = url.parse(_url, true).pathname;
  if (pathname === '/') {
    if (queryData.id === undefined) {

      response.writeHead(200);
      response.end('success');
    }
  }else {
    response.writeHead(404);
    response.end('Not found');
  }
});

app.listen(3000);