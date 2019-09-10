const express = require('express')
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const app = express()
const PORT = process.env.PORT || 4000;

const routes = require('./routes');

// SECTION Logger Middleware
app.use((req, res, next) => {
    const url = req.url;
    const method = req.method;
    const requestedAt = new Date().toLocaleString();
    console.table({ url, method, requestedAt });
    next();
});

// SECTION User Session
app.use(session({
    secret: 'I will never tell...',
    resave: false,
    saveUninitialized: false
  }));
  
  const corsOptions = {
    origin: ['http://localhost:3000'], 
    credentials: true, 
    optionsSuccessStatus: 200
  }
  app.use(cors(corsOptions));

// SECTION Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// SECTION Root Route
app.get('/', function (req, res) {
    res.send('<h1>The backend server is working so far...</h1>')
})

// SECTION Routes
app.use('/api/v1/auth', routes.auth);
app.use('/api/v1/users', routes.users);
app.use('/api/v1/posts', routes.posts);

// SECTION Server Listen
app.listen(PORT, () => console.log(`Server now connected to PORT ${PORT}!`))