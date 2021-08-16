const express = require('express');
const app = express();

app.use(express.json());

const courses = [
    {id: 1, name: 'courseA'},
    {id: 2, name: 'courseB'},
    {id: 3, name: 'courseC'}, 
];

const traveler = {
    name: 'John',
    Country: 'Canada',
    Age: 32,
};

const heroes = [
    {id: 1, name: 'Supa', Power: 'Speed', Age: 33},
    {id: 2, name: 'Vixxy', Power: 'Fire', Age: 28},
    {id: 3, name: 'Halo', Power: 'Wind', Age: 22},
    {id: 4, name: 'Yodette', Power: 'Light', Age: 19},
    {id: 5, name: 'Razor', Power: 'X-Vision', Age: 608},
    {id: 6, name: 'Boom', Power: 'Laser', Age: 55},
];

app.get('/', (req, res) => {
    res.send('I am alive');
});
//Just send a random list
app.get('/api/course', (req, res) => {
    res.send([1, 2, 3]);
});
//All the courses
app.get('/api/courses', (req, res) => {
    res.send(courses);
});
//Just for fun - All the Heroes
app.get('/api/heroes', (req, res) => {
    res.send(heroes);
});

//Only one course in the Array.
app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('Course not found');
    res.send(course);
});
//My own test
app.get('/api/traveler', (req, res) => {
    res.send(traveler);
});
//Create data + validation of the lenght
app.post('/api/courses', (req, res) => {
    if (!req.body.name || req.body.name.length < 3) {
    res.status(400).send('Your name must be 3+ characters...');
    return;
    }

    const course = {
        id: courses.length +1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

//Let's change some data.
app.put('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('Course not found');
    //If the lenght is TOO small...
    if (!req.body.name || req.body.name.length < 3) {
        res.status(400).send('Your name must be 3+ characters...');
        return;
        }
        //Here you are 
        course.name = req.body.name;
        res.send(course);
});

//Let's Delete some data...
app.delete('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('Course not found');
    //The delete part.
    const index = courses.indexOf(course);
    courses.splice(index, 1);
    //To get an answer back.
    res.send(course);
});

const port = process.env.PORT || 3000; 
app.listen(port, () => console.log('Listening on...' + port)); 
//You dont NEED to use "${port}!!!"
