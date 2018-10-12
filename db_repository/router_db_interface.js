/**
 * The api uses this to interface with the database repository layer
 */

//pass the dbName into the dbManager
const dbManager = require('./dbManager')({tableName: "contacts"});


dbManager.connect((err, success) => {
    if (err) {
        console.log("** db_interface: error ", err);
        return;
    }
});


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
            console.log(error)

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
    dbManager.fetchAllContacts(callback);
}

module.exports = {
    saveContact,
    fetchContacts
}
