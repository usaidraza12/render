const express= require("express");
const userouter= require("./routes/router")
const cors= require("cors")
const app=express();
const connectDB= require('./module/db')
const mongoose= require("mongoose");
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 8001;
const dotenv = require('dotenv');
const path = require("path");

// Static folder serve
// app.use('./uploads', express.static(path.join(__dirname, 'image')));
// index.js ya app.js
// app.use('/uploads', express.static('uploads'));
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors({
  origin: ['http://localhost:5173','http://localhost:5174',"https://e-com-frontend-bvlmyujuc-usaidraza12s-projects.vercel.app/"],
  credentials: true
}))
app.use(cookieParser())
dotenv.config();


connectDB()


app.use("/",userouter);




// Update cart item quantity

app.listen(PORT,()=>{
    console.log(`express ${PORT}`)
})