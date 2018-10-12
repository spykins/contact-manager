const dbConnector = require('./db_connector');

/**
 * 
 * @param {*} callback when the database layer is connected
 * @param {*} dbName is the name of the database
 */
const DbConnectionManager = (callback, dbName) => {
    if (dbConnector.isAuthenticated) {
        dbConnector.connect((error, success) => {
            if(error) {
                callback(error, null);
                return;
            }
            callback(null, success);
        }, dbName);
    }
}

module.exports = {
    isDbConnected: dbConnector.isAuthenticated(),
    connect: DbConnectionManager
}