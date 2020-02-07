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
    burgerData.insertOne(req.body.burger_name, function (result) {
    });
});

router.put("/api/burgers/:id", function (req, res) {
    burgerData.updateOne(req.params.id, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;