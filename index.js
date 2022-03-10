const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

var score = { firstTeam:
    {name: "Default 1", score: 0},
    secondTeam:
    {name: "Default 2", score: 1}
}


app.use(express.static('public'))
app.use(bodyParser.json())

app.get('/update', (req, res) => {
    res.json(score)
})

app.post('/update', (req, res) => {
    score = req.body
    res.send('success');
})

app.listen(port);
