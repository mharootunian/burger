const express = require("express");
const router = express.Router();
const db = require("../config/orm");


router.get("/", (req, res) => {
    const info = db.selectAll();
    console.log("-----")
    console.log(info)
    res.json(info);
});

module.exports = router;