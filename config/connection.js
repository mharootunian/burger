const mysql = require("mysql");

db = mysql.createConnection({
    host: "localhost",
    port: 3388,
    user: "root",
    password: "",
    database: "burgers_db"
})

db.connect();

module.exports = db;