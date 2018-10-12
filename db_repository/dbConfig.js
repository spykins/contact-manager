const mysql = require('mysql');
const dbName = "contactDb";

const dbConfig = () => {
    return mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Nigeria_1960",
        database: dbName
    });
}

module.exports = dbConfig;