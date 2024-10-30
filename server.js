//load env variables
if (process.env.NODE_ENV != "production") {
  const dotenv = require("dotenv").config();
}

//import dependencies
const express = require("express");
const connectToDb = require("./config/connectToDb");

//create an express app
const app = express();

//connect to DB
connectToDb();

//routing
app.get("/", (req, res) => {
  res.json({ hello: "world" });
});

//start server

app.listen(process.env.PORT);
