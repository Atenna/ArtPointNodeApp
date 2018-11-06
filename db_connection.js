/**
 * Created by liesky on 05/11/2018.
 */
var mysql = require('mysql')
var config = require('./config.js');
var connection = mysql.createConnection(config);


function getPoiByType(conn, typesArray) {
    var call = "CALL GetPoiByType(?)";
    connection.query(call, typesArray, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        console.log(results[0]);
});
}

var types = "1,2";
getPoiByType(connection, types);
