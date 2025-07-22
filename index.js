require('dotenv').config();

const express=require('express');
const app =express();
const port=5000;

app.get('/',(req,res)=>{
  res.send("this is a manin page:")
})
app.listen(port,()=>{
  console.log(`server is running on port ${port}`);
})  