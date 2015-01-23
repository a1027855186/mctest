/**
 * Created by MadCage on 2015/1/22.
 */
var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database:'mc',
    port: 3306
});
conn.connect();
conn.query('SELECT * from user', function(err, rows, fields) {
    if (err) throw err;
    console.log('YEAH!!!');
});
conn.end();
