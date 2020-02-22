const express = require('express');
const bodyParser = require('bodyParser');

const app = express();

app.set('view engine','ejs');

app.get("/", function(req,res){

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    var day = today.toLocaleDateString("en-US",options);
});

res.render("list", {
    kindOfDay: day
});

app.listen(3000,function(){
    console.log("Server Started on Port 3000");
})