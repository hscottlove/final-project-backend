const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');
const authRequired = require('../middleware/authRequired');


// SECTION Post Index
router.get('/', ctrl.posts.show);

// SECTION Post Create
router.post('/', ctrl.posts.create);

// SECTION Post Delete
router.delete('/:_id', ctrl.posts.deletepost);

module.exports = router;



