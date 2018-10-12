/**
 *  Connects to the underlying database and creates the database
 */

 const configureDb = require('./dbConfig');
const query = require('./query');

let connection = configureDb();
/**
 * 
 * @param {*} onMysqlConnected is the callback when the database is connected
 * @param {*} dbName is the name of the database
 */
let connect = (onMysqlConnected, dbName) => {
    connection.connect((err, success) => {
        if (err) {
            onMysqlConnected(err, null);
            return;
        };

        connection.query(query.createDb(dbName), (err, result) => {
            if (err) throw err;
            onMysqlConnected(null, success);
        });
    });
}

let isAuthenticated = () => connection.state === "authenticated";

module.exports = {
    connect,
    isAuthenticated,
    connection
};