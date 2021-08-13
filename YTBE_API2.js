const express = require('express');
const app = express();

const = [
    {id: 1, name: 'courseA'},
    {id: 2, name: 'courseB'},
    {id: 3, name: 'courseC'}, 
]

app.get('/', (req, res) => {
    res.send('I am alive');
});

app.get('/api/course', (req, res) => {
    res.send([1, 2, 3]);
});

app.get('/api/course/:id', (req, res) => {
    res.send(req.query);
});

const port = process.env.PORT || 3000; //17:15 mins
app.listen(port, () => console.log('Listening on ${port}...'));
