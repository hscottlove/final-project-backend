const express = require('express')
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const app = express()
const PORT = process.env.PORT || 4000;

const routes = require('./routes');

// Custom Logger Middleware
app.use((req, res, next) => {
    const url = req.url;
    const method = req.method;
    const requestedAt = new Date().toLocaleString();
    console.table({ url, method, requestedAt });
    next();
});

// User Session
app.use(session({
    secret: 'Shhhh, this is a secret...!',
    resave: false,
    saveUninitialized: false // Only save the session if a property has been added to req.session
  }));
  
  const corsOptions = {
    origin: ['http://localhost:3000'], // string or array
    credentials: true, // This allows the session cookie to be sent back and forth
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
  app.use(cors(corsOptions));

// SECTION Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// SECTION ROUTES
// Root Route
app.get('/', function (req, res) {
    res.send('<h1>The backend server is working so far...</h1>')
})

// Auth Routes
app.use('/api/v1/auth', routes.auth);
app.use('/api/v1/users', routes.users);

app.listen(PORT, () => console.log(`Server now connected to PORT ${PORT}!`))