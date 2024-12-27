require('dotenv').config()
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const data = {
    "username": "hsatya",
    "repos": 60,
    "location": "India",
    "bio": "I am a Software Enginner and a Teacher"
}

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

app.get('/github', (req, res) => {
    res.json(data);
})

app.listen(PORT, () => {
    console.log(`App Running at PORT:${PORT}`);
})