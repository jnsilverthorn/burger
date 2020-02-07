var mysql = require("mysql");

var connection;

process.env.JAWSDB_URL
    ? connection = mysql.createConnection(process.env.JAWSDB_URL)
    : connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "root",
        database: "burger_db"
    })

connection.connect(function (err) {
    if (err) {
        console.error("Error Connecting: " + err.stack);
        return;
    }
    console.log("Connected as ID: " + connection.threadId);
});

module.exports = connection;