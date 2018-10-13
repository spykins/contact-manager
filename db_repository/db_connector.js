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
        onMysqlConnected(null, success);
    });
}

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
    if (isAuthenticated()) {
        writeContactToDb(contact, callback, tableName);
    } else {
        connect((error, success) => {
            if (error) {
                return callback(error, null);
            }
            writeContactToDb(contact, callback, tableName);
        })
    }

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