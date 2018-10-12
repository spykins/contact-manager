const express = require('express');
const app = express();

const port = process.env.port || 4000;

app.get("/", (req, res) => {

    res.json({name: "Wale", phoneNumber: "438722", address: "somewhere in Canada" });
});

app.listen(port, () => {
    console.log("App is listening at port ", port);
})



