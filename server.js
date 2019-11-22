const express = require("express");
const mysql = require("mysql");
const hb = require("express-handlebars");
const app = express();
const routes = require("./controllers/burgers_controller");

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded( {extended: true} ));    
app.use("/", routes);

app.engine("handlebars", hb());
app.set("view engine", "handlebars");

const server = app.listen(PORT, () => {
    console.log(`Server started at ${server.address().address}:${server.address().port}`);
}); 