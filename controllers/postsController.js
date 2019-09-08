const db = require('../models');

// Show Post
const index = (req, res) => {
    db.Post.find({}, (err, allPosts) => {
        if (err) return res.status(400).json({
            status: 400,
            message: 'Please try again.',
        });

        res.status(200).json({
            status: 200,
            data: allPosts,
        });
    });
};

// Create Post
const create = (req, res) => {
    const newPost = req.body;

    db.Post.create(newPost, (err, createdPost) => {
        if (err) return res.status(400).json({
            status: 400,
            message: 'Please try again.',
        });

        res.status(201).json({
            status: 201,
            data: createdPost,
        });
    });
};


module.exports = {
    index,
    create,
  };