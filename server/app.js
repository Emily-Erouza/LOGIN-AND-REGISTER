const express = require("express");
const mongoose = require("mongoose");

const app  = express();

const url = "mongodb+srv://EmilySbongile:Emily.20@cluster0.xwrzhfb.mongodb.net/?retryWrites=true&w=majority"
console.log(url)
mongoose.connect(url)


app.get("/getusers", (req, res) => {
  UserModel.find({}).then(function(users){
    res.json(users)
    
  }).catch(function(err){
    console.log(err)

  })
});

app.listen(4000, () => {
  console.log("listening to port 4000");
})

