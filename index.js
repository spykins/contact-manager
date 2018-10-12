const express = require('express');
require('dotenv').config()

const app = express();
const route = require("./routes/api");
const bodyParser = require('body-parser');


const port = process.env.port || 4000;

app.use(express.static('public'));

app.use(bodyParser.json());
app.use("/api", route);

app.listen(port, () => {
    console.log("App is listening at port ", port);
})



