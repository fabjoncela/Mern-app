//imports
const mongoose = require("mongoose");

//load env variables
if (process.env.NODE_ENV != "production") {
  const dotenv = require("dotenv").config();
}

async function connectToDb() {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Connected to Db");
  } catch (err) {
    console.log(err);
  }
}
module.exports = connectToDb;
