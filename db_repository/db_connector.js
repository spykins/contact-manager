const mysql = require('mysql');

let mysqlConnector = function(dbConfig, onMysqlConnected) {
    let con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Nigeria_1960"
      });
      
      con.connect(function(err, success) {
        if (err) {
            onMysqlConnected(err, null);
            return;
        };

        onMysqlConnected(null, "connected");
        console.log("Connected!");
      //   con.query("CREATE DATABASE mydb", function (err, result) {
      //     if (err) throw err;
      //     console.log("Database created");
      //   });
      });
}

module.exports = mysqlConnector;