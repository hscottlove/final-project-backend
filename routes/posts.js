const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

const db = require('../models');

// Post Index
router.get('/', ctrl.index);


