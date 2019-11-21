const express = require("express");
const mysql = require("mysql");
const hb = require("express-handlebars");
const app = express();

app.use(express.json());
app.use(express.urlencoded( {extended: true} ));    

app.engine("handlebars", hb());
app.set("view engine", "handlebars");

const server = app.listen(PORT, () => {
    console.log(`Server started at ${server.address().address}:${server.address().port}`);
});