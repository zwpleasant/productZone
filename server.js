var express = require("express");
var bodyParser = require("body-parser");
var exprhbs = require("express-handlebars");
var htmlRouter = require("./routes/htmlRoutes");
var apiRouter = require("./routes/apiRoutes");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine("handlebars", exprhbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(htmlRouter);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});