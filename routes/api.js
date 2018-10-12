const express = require ('express');
const router = express.Router();

router.post("/save_contact", (req, res) => {
    res.json({type: "post request sent"});
});

router.get("/", (req, res) => {

    res.json({name: "Wale", phoneNumber: "438722", address: "somewhere in Canada" });
});

module.exports = router;