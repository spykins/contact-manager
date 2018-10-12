const express = require ('express');
const dbInterface = require('../db_repository/db_interface')
const router = express.Router();

/**
 * The post body should contain
 * name, phoneNumber and address
 */
router.post("/save_contact", (req, res) => {
    res.json(req.body);
});

/**
 * get request returns the list of contacts on the page
 */
router.get("/", (req, res) => {

    res.json({name: "Wale", phoneNumber: "438722", address: "somewhere in Canada" });
});

module.exports = router;