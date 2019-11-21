const express = require("express");
const mysql = require("mysql");
const hb = require("express-handlebars");
const app = express();

app.use(express.json());
app.use(express.urlencoded( {extended: true} ));