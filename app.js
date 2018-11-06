/**
 * Created by liesky on 05/11/2018.
 */

var L = require('leaflet');

// Initialize the map
var map = L.map('map').setView([53.551086, 9.993682], 11);

// For different tile layers visit: https://leaflet-extras.github.io/leaflet-providers/preview/
var Wikimedia = L.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png', {
    attribution: '<a href="https://wikimediafoundation.org/wiki/Maps_Terms_of_Use">Wikimedia</a>',
    maxZoom: 19
}).addTo(map);

var pinIcon = L.icon({
    iconUrl: 'public/images/pin.png',
    iconSize: [39, 39],
    iconAnchor: [18, 39],
    popupAnchor: [10, -35]
});


var marker = L.marker([53.551086, 9.993682], {icon: pinIcon}).addTo(map);
marker.bindPopup("<b>Hamburg</b>");

// when running app as node app.js without browserify
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
