var connection = require("./connection");

var orm = {
    selectAll: function (cb) {
        var queryString = "SELECT * FROM burgers;";
        connection.query(queryString, function (err, result) {
            if (err) throw (err);
            cb(result);
        });
    },
    insertOne: function (burger_name, cb) {
        var queryString = "INSERT INTO burgers(burger_name, devoured) VALUES(?, false);";

        connection.query(queryString, burger_name, function (err, result) {
            if (err) throw (err);
            cb(result);
        });
    },
    updateOne: function (id, cb) {
        var queryString = "UPDATE burgers SET devoured = true WHERE id = ?;";
        console.log(id);
        connection.query(queryString, id, function (err, result) {
            if (err) throw (err);
            cb(result);
        });
    }
}

module.exports = orm;