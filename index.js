const express = require("express");
const mongoose = require("mongoose");

// set up our express app
const app = express();

//connect to mongodb

app.get("/api",(req,res) => res.send("It's working"));

app.listen(process.env.port || 3000,function(){
    console.log("now listening for request");
});