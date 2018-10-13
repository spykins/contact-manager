/**
 * The api uses this to interface with the database repository layer
 */

//pass the dbName into the dbManager

const utils = require('../utils/utils')
const dbManager = require('./dbManager')({tableName: utils.tableName});

/**
 * @param contact of type object with key 
 * name: String,
 * phoneNumber: String,
 * address: String
 * 
 * @returns the latest updated data
 */
let saveContact = (contact, callback) => {
    if (dbManager.isDbConnected()) {
        dbManager.saveContactToDb(contact, callback);
    } else {
        dbManager.connect((error, success) => {
            if (error) {
                callback(error, null);
                return;
            }
            dbManager.saveContactToDb(contact, callback);
        })
    }
}

/**
 * returns all contact data in the database
 */
let fetchContacts = (callback) => {
    if (dbManager.isDbConnected()) {
        dbManager.fetchAllContacts(callback);
    } else {
        dbManager.connect((error, success) => {
            if (error) {
                callback(error, null);
                return;
            }
            dbManager.fetchAllContacts(callback);
        })
    }

}

module.exports = {
    saveContact,
    fetchContacts
}
