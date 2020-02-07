var express = require("express");

var router = express.Router();

var burgerData = require("../models/burger");

router.get("/", function (req, res) {
    burgerData.selectAll((data) => {
        var object = {
            burgers: data
        };
        res.render("index", object);
    });
});

router.post("/api/burgers", function (req, res) {
    burgerData.insertOne([
        "burger_name"
    ], [
        req.body.burger_name
    ], function (result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burgerData.updateOne(condition, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;