/* npm libiraries */
const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.use (bodyParser.urlencoded({ extended: true }))

app.set('view engine','ejs');

app.use(express.static("public"));

const PORT  = 3000;

/* Defualt List */
var listItems = ["Drink Coffee" , "Read 1 hr" , "Take breakfast"];

var workItems = [];

/* Routes */
app.get("/",function(req,res){

    const options = {weekday:"long", day:"numeric", month:"long"};

    var day = new Date().toLocaleDateString('en-us',options); 

    res.render("list",{listTitle:day ,listItems:listItems});

})


app.get("/work",function(req,res){
    res.render("list",{listTitle:"Work list",listItems:workItems});
})


/* Post requests */

app.post("/",function(req,res){

    if(req.body.submit === "Work list"){

        var addItem = req.body.addItem;

        workItems.push(addItem);

        res.redirect("/work");
    }
    else{

    var addItem = req.body.addItem;

    listItems.push(addItem);

    res.redirect("/");    
}
});

app.listen(PORT,function(){
    console.log("Port 3000 is running successfully ");
});



