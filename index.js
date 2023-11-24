const express = require('express')
const app = express()
const port = 8080

app.get('/', (req,res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get('/use', (req,res) => {
    res.sendFile(__dirname + "/use.html")
})

app.get('/use/example', (req,res) => {
    res.sendFile(__dirname + "/example.html")
})

app.listen(port, () => {
    console.log('sssssss')
})