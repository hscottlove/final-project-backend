const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');
const authRequired = require('../middleware/authRequired');

// const db = require('../models');

// Post Index
router.get('/', ctrl.posts.show);

// Post Create
router.post('/', ctrl.posts.create);

// Post Delete
// router.delete('/:_id', ctrl.posts.delete);

module.exports = router;



