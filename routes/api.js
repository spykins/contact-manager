const express = require ('express');
const routerDbInterface = require('../db_repository/router_db_interface')
const router = express.Router();

let isRequestBodyValid = (body) => {
    return body.name && body.address && body.phoneNumber;
}

/**
 * The post body should contain
 * name, phoneNumber and address
 */
router.post("/save_contact", (req, res) => {
    if (isRequestBodyValid(req.body)) {
        routerDbInterface.saveContact(req.body, (error, success) => {
            if (error) {
                return res.status(500).send(error);
            }
            res.status(200).send(req.body);
        })

    } else {
        res.status(400).send({...req.body, error: "ensure you pass in data  {name: String,phoneNumber: String, address: String}"});
    }
});

/**
 * get request returns the list of contacts on the page
 */
router.get("/", (req, res) => {
    routerDbInterface.fetchContacts((error, success) => {
        if (error) {
            return res.status(500).send({error})
        } 
        res.status(200).send(success);
    })
});

module.exports = router;