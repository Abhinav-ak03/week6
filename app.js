const express=require("express")
const app=express()
const env=require("dotenv")
env.config()

const connectDB = require('./config/db');
connectDB()

const db= require("./config/db")

app.listen(process.env.PORT,()=>{
    console.log("server running....");
})

module.exports =app