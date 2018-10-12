const express = require('express');
const app = express();
const route = require("./routes/api");

const port = process.env.port || 4000;



app.use("", route);

app.listen(port, () => {
    console.log("App is listening at port ", port);
})



