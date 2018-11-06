/**
 * Created by liesky on 05/11/2018.
 */

var L = require('leaflet');

// Initialize the map
var map = L.map('map').setView([53.551086, 9.993682], 11);


var esri_NatGeoWorldMap = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',
    maxZoom: 16
}).addTo(map);


function runServer(port)
{
    var http = require('http');
    var dt = require('./date_module');
    var url = require('url');
    var fs = require('fs');

    http.createServer(function(req, res)
    {
        //var q = url.parse(req.url, true);
        //var qdata = q.query;

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
                //res.write(qdata.type);
                //res.end(q.search);
                res.end();
            }
        })
    }).listen(port);
}

//runServer(8080);
