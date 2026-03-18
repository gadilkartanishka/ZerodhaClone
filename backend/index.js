require('dotenv').config();
const express=require('express');
const mongoose=require('mongoose');
const PORT=process.env.PORT || 3000;
const url=process.env.MONGO_URL;
mongoose.connect(url).then(
    console.log("database connected")
);

const app=express();
app.listen(PORT,()=>{
    console.log(`server started on port ${PORT}`);
});