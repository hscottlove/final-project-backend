const express = require('express')
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const app = express()
const PORT = process.env.PORT || 4000;

// SECTION Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// SECTION ROUTES
app.get('/', function (req, res) {
    res.send('GET request')
})

app.post('/', function (req, res) {
    res.send('POST request')
})

app.put('/user', function (req, res) {
    res.send('PUT request')
})

app.delete('/user', function (req, res) {
    res.send('DELETE request')
})

app.listen(PORT, () => console.log(`Server now connected to PORT ${port}!`))