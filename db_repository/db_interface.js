/**
 * The api uses this to interface with the database repository layer
 */

const dbManager = require('./dbManager');
let dbName = "contactDb";


dbManager.connect((err, success) => {
    if (err) {
        console.log("** db_interface: error ", err);
        return;
    }

    console.log("** db_interface: success ", success);

}, dbName);

/**
 * @param contact of type object with key 
 * name: String,
 * phoneNumber: String,
 * address: String
 * 
 * @returns the latest updated data
 */
let saveContact = (contact) => {
    

}

/**
 * returns all contact data in the database
 */
let fetchContacts = () => {

}

module.exports = {
    saveContact,
    fetchContacts
}
