/**
 * Created by liesky on 05/11/2018.
 */
var mysql = require('mysql')

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "yourpasword",
    database: "artpointdb"
});

con.connect(function (err) {
    var type = '%Museum%';
    if(err) throw err;
    console.log("Connected!");
    var sql = "SELECT * from types WHERE type LIKE ?"
    con.query(sql, [type], function(err, result) {
        if (err) throw err;
        console.log(result); // result[2].type
    } )
});

