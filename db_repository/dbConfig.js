const mysql = require('mysql');
const dbName = "contactDb";

const dbConfig = () => {
    return mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: dbName
    });
}

module.exports = dbConfig;