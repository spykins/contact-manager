const express = require('express');
const app = express();
const route = require("./routes/api");
const bodyParser = require('body-parser');


const port = process.env.port || 4000;


app.use(bodyParser.json());
app.use("", route);

app.listen(port, () => {
    console.log("App is listening at port ", port);
})



