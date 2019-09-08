const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');
const authRequired = require('../middleware/authRequired');

// const db = require('../models');

// Post Index
// router.get('/', ctrl.index);

// Post Create
// router.post('/', ctrl.create);

module.exports = router;



