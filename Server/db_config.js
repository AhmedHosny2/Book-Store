const mysql = require('mysql2')

const pool = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "bookStore"
}).promise()

module.exports = pool;
