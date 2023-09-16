const mongoose = require("mongoose")
require('dotenv').config()
const MONGODB_URL = process.env.MONGODB_URL

//Database connect to the Atles
const DBconnection = ()=>{
    mongoose
    .connect(MONGODB_URL)
    .then(() => console.log("Database Connected."))
    .catch((error) => console.error("Connection Error:", error));
}

module.exports = DBconnection