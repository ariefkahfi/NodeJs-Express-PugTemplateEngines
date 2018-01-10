var express = require("express");

var pug = require("pug");
var app = express();

app.set("views",__dirname+"/views");
app.set("view engine","pug");

var compiledFunction1 = pug.compileFile(__dirname+"/views/test.pug");
// var compiledFunction2 = pug.compileFile(__dirname+"/views/attr.pug");

app.get("/",function(req,res){
    res.render("multi_attr");
});

app.listen(9600,function(){
    console.log("listening on port 9600");
});