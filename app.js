//eshint esversion:6

const express=require("express");
const bodyParser=require("body-parser");

const date= require(__dirname + "/date.js");


const app=express();

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.set('view engine','ejs');


//const is used for array evenif new items r pushed to it.
const newListItems=["Buy Food","Cook Food","Eat Food"];

let workItems=[];

app.get("/",function(req,res){

  let day=date.getDate();

  res.render("list",{listTitle:day,newListItems:newListItems});

});

app.post("/",function(req,res){
  console.log(req.body);

  const item=req.body.newItem;

if(req.body.list==="Work"){
  workItems.push(item);
  res.redirect("/Work");
}
else{
  newListItems.push(item);
  res.redirect("/");
}

});

app.get("/work",function(req,res){
    res.render("list",{listTitle:"Work List",newListItems:workItems});

});
app.get("/about",function(req,res){
  res.render("about");
});

app.listen(3000,function(){
  console.log("server started on port 3000");
});
