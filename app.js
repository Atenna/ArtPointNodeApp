/**
 * Created by liesky on 05/11/2018.
 */


function sayHello(name) {
    var http = require('http');
    var dt = require('./date_module');
    var url = require('url');
    var fs = require('fs');

    http.createServer(function(req, res){

        //res.end('Hello ' + name + ' ,it is ' + dt.currentDateTime());

        fs.readFile('index.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            var q = url.parse(req.url, true).query;
            var text = q.type + " " + q.parking;
            res.end(text);
        })
    }).listen(8080);
}

sayHello('Ivanka');
