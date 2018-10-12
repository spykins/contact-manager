const dbConnector = require('./db_connector');

let isDbConnected = false;

dbConnector({}, (error, success) => {
    if(error) {
        console.log("error connecting to db");
        // problem connecting to database
        // return response error
        return;
    }
    console.log("connection successful");
    isDbConnected = true;
})

let saveContact = () => {

}

let fetchContacts = () => {

}

module.exports = {
    saveContact,
    fetchContacts
}
