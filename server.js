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