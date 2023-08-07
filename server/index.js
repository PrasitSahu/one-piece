// imports
const express = require('express')
const path = require('path')

// variables
const PORT = 8000
const app = express()

// middlewares
app.use('/', express.static(path.join(__dirname, '../client', 'build')))


// routing
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'))
})


app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`)
})
