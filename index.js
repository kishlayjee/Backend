require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('Kishlay Kumar')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login at chai aur codes</h1>')
})

app.get('/youtube', (req, res) =>{
    res.send('you are on youtube')
})



app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})