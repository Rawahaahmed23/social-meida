const mysql = require('mysql2');

const db  = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Urw@1177',
    database: 'social'
})


module.exports = db;