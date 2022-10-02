const fs = require('fs/promises')
const express = require('express')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const app = express()
const port = 3000

var score = { firstTeam:
    {name: "Default 1", score: 0, logo: "dair.png"},
    secondTeam:
    {name: "Default 2", score: 1, logo: "ivc.png"}
}


app.use(express.static('public'))
app.use(bodyParser.json())

app.get('/update', (req, res) => {
    res.json(score)
})

app.post('/update', (req, res) => {
    score = req.body
    res.send('success')
})

app.get('/logos', (req, res) => {
    fs.readdir("public/logos").then((json) => res.json(json))
})

app.post('/logos', fileUpload({
  limits: { fileSize: 50 * 1024 * 1024 },
}), (req, res) => {
    req.files.newicon.mv(__dirname + "/public/logos/" + req.files.newicon.name)
        .then(res.send('success'))
        .catch(res.code(500))
})

app.listen(port, () => { fs.mkdir(__dirname + "/public/logos").catch(() => {}) });
