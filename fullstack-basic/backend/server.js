import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

const jokes = [
    {
        id: 1,
        title: "Cache Broke",
        content: "Why did the developer go broke? Because they used up all their cache!"
    },
    {
        id: 2,
        title: "Dark Mode",
        content: "Why do programmers prefer dark mode? Because light attracts bugs!"
    },
    {
        id: 3,
        title: "Null Feelings",
        content: "Why was the JavaScript developer sad? Because they didn't know how to 'null' their feelings."
    },
    {
        id: 4,
        title: "Console Bug",
        content: "How do you comfort a JavaScript bug? You console it."
    },
    {
        id: 5,
        title: "Too Many Arguments",
        content: "Why did the function break up with its girlfriend? Because it had too many arguments!"
    }
];

app.use(express.static('dist'));

// app.get('/', (req, res) => {
//     res.send('Server is Ready')
// });

app.get('/api/jokes', (req, res) => {
    res.send(jokes);
})


app.listen(PORT, () => console.log(`Server is at port: ${PORT}`))