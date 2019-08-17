const mysql = require('mysql2');

const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'2716223',
    database:'führerschein'
});

module.exports = pool.promise();