const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'lionstq',
    multipleStatements: true
});

module.exports = connection;
