require('dotenv').config()
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req,res) => {
    res.send("Twitter hsatya")
})

app.get('/login', (req,res) => {
    res.send('<h1>Please Login</h1>')
})

app.get('/google', (req, res) => {
    res.send('<a href="https://www.google.com/">Google</a>')
})

app.listen(PORT, () => {
    console.log(`App Running at PORT:${PORT}`);
})