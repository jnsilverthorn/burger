var orm = require("../config/orm");

var burgers = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    insertOne: function (burger_name, cb) {
        orm.insertOne("burgers", burger_name, function (res) {
            cb(res);
        });
    },
    updateOne: function (id, cb) {
        orm.updateOne("burgers", id, function (res) {
            cb(res);
        });
        //location.reload();
    }
};

module.exports = burgers;