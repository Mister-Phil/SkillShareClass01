const app = require('express')();
const app = express();
const PORT = 8080;
app.use(expres.json());

//The Get function
app.get("/games", (req, res) => {
    res.status(200).send({
        Game_Name: 'Prey 2', //Don't put space here; a "_" works.
        Company: 'Akane-Studios',
        Type: 'Horror'
    })
});

app.post('/games/:id', (req, res) => {
    
    const {id} = req.params;
    const {icon} = req.body;
    //const Image = URL("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.kindpng.com%2Fimgv%2Fibbxmh_gaming-icon-png-game-icon-png-yellow-transparent%2F&psig=AOvVaw1syH2aHiIi7lqYPygHk5gB&ust=1629748172080000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNCP_5uzxfICFQAAAAAdAAAAABAD")

    if (!icon) {
        res.status(418).send({message: 'Need a icon!'})
    }
    
    res.send({
        games: 'Here is your image for you game named' + id,
    });
});

app.listen( //This tells where to listen the app. 
    PORT,
    () => console.log('I am alive on http://localhost: ' + PORT)
)