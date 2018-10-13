const mysql = require('mysql');
const query = require('./query');


const createTable = (connection, tableName) => {
    connection.query(query.createTable(tableName), (error, result) => {
        if (error) {
            console.log("Error creating Table ", error);
        }
    });
}

const createDatabase = (dbName, tableName) => {
    let connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database:dbName
    });

    console.log((dbName), tableName)
    connection.query(query.createDb(dbName), (err, result) => {
           console.log(err);
        if (err) {
         console.log(err);
         return;
        } 
        createTable(connection, tableName);
    });
}

const setUpDb = (dbName, tableName) => {
 let connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
    });

    connection.connect((err, success) => {
        if (err) {
            console.log("error connecting database ", err);
            return;
        };
        createDatabase(dbName, tableName);  
    });
}

module.exports = setUpDb;