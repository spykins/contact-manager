const express = require('express');
const utils = require("./utils/utils");
require('dotenv').config()
require('./db_repository/dbSetUp')(utils.dbName, utils.tableName);

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



