const express = require("express");
const mongoose = require("mongoose");
const UserModel = require("./models/Schemas")
const bodyPaser = require("body-parser"); 
const cors = require("cors");

const app  = express();


app.use(bodyPaser.json())
app.use(cors())

const url = "mongodb+srv://EmilySbongile:Emily.20@cluster0.xwrzhfb.mongodb.net/?retryWrites=true&w=majority"
console.log(url)
mongoose.connect(url)


app.get("/users", (req, res) => {
  UserModel.find({}).then(function(users){
    res.json(users)
    
  }).catch(function(err){
    console.log(err)

  })
});

app.post("/users", async (req, res) => {
  try{
    const user = await new UserModel(req.body).save();
    res.send(200);
  }catch(e){
    console.log(e);
  }
});


app.listen(4000, () => {
  console.log("listening to port 4000");
})

