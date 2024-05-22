const mongoose = require('mongoose');
require("dotenv").config();


const connectToDB =async()=>{
    await mongoose.connect(process.env.DB_URL);
    console.log("Currently connected to MongoDB Cluster")
};

module.exports = connectToDB;