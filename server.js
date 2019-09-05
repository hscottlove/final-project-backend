const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000;

// SECTION ROUTES
app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.post('/', function (req, res) {
    res.send('Got a POST request')
})

app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user')
})

app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user')
})

app.listen(PORT, () => console.log(`Server now connected to PORT ${port}!`))