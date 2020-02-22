const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

var listItems = ["Buy Food","Eat Food","Get More Food"];

app.set('view engine','ejs');

app.get("/", function(req,res){

    var today = new Date();

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    var day = today.toLocaleDateString("en-US",options);

    res.render("list", {
        items: listItems,
        kindOfDay: day
    });

});

app.post("/", function(req,res){
    listItems.push(req.body.newItem);
    res.redirect("/");
});

app.listen(3000,function(){
    console.log("Server Started on Port 3000");
})