const express = require('express');
const app = express();

const courses = [
    {id: 1, name: 'courseA'},
    {id: 2, name: 'courseB'},
    {id: 3, name: 'courseC'}, 
];
/*
app.get('/', (req, res) => {
    res.send('I am alive');
});

app.get('/api/course', (req, res) => {
    res.send([1, 2, 3]);
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});
*/
app.get('/api/courses/:id', (req, res) => {
    const courses = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('Course not fount');
    res.send(course);
});

const port = process.env.PORT || 3000; 
app.listen(port, () => console.log('Listening on ${port}...'));
