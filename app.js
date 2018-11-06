/**
 * Created by liesky on 05/11/2018.
 */


function runServer(port)
{
    var http = require('http');
    var dt = require('./date_module');
    var url = require('url');
    var fs = require('fs');

    http.createServer(function(req, res)
    {
        var q = url.parse(req.url, true);
        var qdata = q.query;

        fs.readFile('index.html', function(err, data)
        {
            if(err)
            {
               res.writeHead(400, { 'Content-Type' : 'text/html'});
               return res.end("404 Not found");
            }
            else
            {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                res.write(qdata.type);
                res.end(q.search);
            }
        })
    }).listen(port);
}

runServer(8080);
