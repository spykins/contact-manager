const mysql = require('mysql');

let dbConfig = () => {
    return mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Nigeria_1960",
    });
}

module.exports = dbConfig;