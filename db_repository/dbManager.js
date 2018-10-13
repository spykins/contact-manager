const dbConnector = require('./db_connector');

/**
 * @param {*} callback when the database layer is connected
 */
let databaseSetup;
const DbConnectionManager = (callback) => {

    if (dbConnector.isAuthenticated) {

        dbConnector.connect((error, success) => {
            if(error) {

                callback(error, null);
                return;
            }
            callback(null, success);
        });
    } 
};

let saveContactToDb = (contact, callback) => {
    let tableName = databaseSetup.tableName ? databaseSetup.tableName : "myTableName";
    dbConnector.saveContactToDb(contact, callback, tableName);
}

let fetchAllContacts = (callback) => {
    let tableName = databaseSetup.tableName ? databaseSetup.tableName : "myTableName";
    dbConnector.fetchAllContacts(callback, tableName);
};

module.exports = (dbInfo)  => {
    databaseSetup = dbInfo;
    return {
        isDbConnected: () => dbConnector.isAuthenticated(),
        connect: DbConnectionManager,
        fetchAllContacts,
        saveContactToDb
    }
    
}