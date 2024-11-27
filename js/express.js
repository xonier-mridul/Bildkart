const express = require('express')
const app = express();

const post = 8000;

app.get("/",(req,res)=>
{
    res.send('Responce send successfully')
})

