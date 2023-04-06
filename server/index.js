const express = require('express');
const app = express();
import { createApi } from 'unsplash-js';
require('dotenv').config();

app.get('/', function(req, res) {
    res.send("welcome to node server");
})

// const unsplash = createApi({
//     accessKey: process.env.ACCESS_KEY,
//   });

app.post('/signup', (req, res) => {
    const {email} = req.body;
    console.log(email);
})

app.listen(process.env.PORT, (err) => {
    if (process.env.PORT){
        console.log("app is listening to port " + process.env.PORT);
    }   else {
        console.log(err);
    }
})