/**
 *  Connects to the underlying database and creates the database
 */

const configureDb = require('./dbConfig');
const query = require('./query');

let connection = configureDb();
/**
 * 
 * @param {*} onMysqlConnected is the callback when the database is connected
 */
let connect = (onMysqlConnected) => {

    connection.connect((err, success) => {
        if (err) {
            return onMysqlConnected(err, null);
        };

        connection.query(query.createDb(), (err, result) => {
            if (err) {
                return onMysqlConnected(err, null);
            }
            isAuthenticated();

            onMysqlConnected(null, result);
        });
    });
}

let createTable = (tableName, callback) => {
    connection.query(query.createTable(tableName), (error, result) => {
        if (error) {
            return callback(error, null);
        }
        callback(null, result);
    });
};

/**
 * @param contact of type object with key 
 * name: String,
 * phoneNumber: String,
 * address: String
 * 
 */
let writeContactToDb = (contact, callback, tableName) => {
    connection.query(
        query.insertContact(tableName, contact.address, contact.name, contact.phoneNumber),
        (error, success) => {
            if (error) {
                return callback(error, null);
            }
            callback(null, success);
        }
    )
}

let saveContactToDb = (contact, callback, tableName) => {
    if (isAuthenticated) {
        createTable(tableName, (error, success) => {
            if (error) {                
                return callback(error, null);
            }
            writeContactToDb(contact, callback, tableName);
        })
    }
    //TODO: handle case when not connected

}

let fetchAllContacts = (callback, tableName) => {
    connection.query(
        query.fetchAllContacts(tableName),
        (error, success) => {
            if (error) {
                return callback(error, null);
            }
            callback(null, success);
        }
    )
};

let isAuthenticated = () => connection.state === "authenticated";

module.exports = {
    connect,
    isAuthenticated,
    connection,
    saveContactToDb,
    fetchAllContacts
};