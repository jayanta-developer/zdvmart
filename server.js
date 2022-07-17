const express = require('express');
const app = express();
const dotenv = require('dotenv');
const PORT =   3500 || process.env.PORT;  
dotenv.config({ path: './config.env' });


app.get('/', (req, res)=>{
  res.send("The page is working")
  console.log(process.env.PORT)
})

app.listen(PORT, () =>{
console.log(`server is running in port ${PORT}`)
})