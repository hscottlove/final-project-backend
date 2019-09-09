const db = require('../models');

// SECTION Show Post
// SHOW SHOULD FIND ONE POST BY ID
const show = (req, res) => {
    db.Post.findById(req.params.id, (err, allPosts) => {
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

const index = (req, res) => {
    db.Post.find({ user: req.session.currentUser.id }, (err, userPosts) => {
        if (err) return res.status(400).json({
            status: 400,
            message: 'Please try again.',
        });

        res.status(200).json({
            status: 200,
            data: userPosts,
        });
    });
};

// SECTION Create Post
const create = (req, res) => {
    const newPost = req.body;

    db.Post.create(newPost, (err, createdPost) => {
        if (err) return res.status(400).json({
            status: 400,
            message: 'Please try again.',
        });

        createdPost.user = req.session.currentUser.id;

        createdPost.save((err, savedPost) => {
            if (err) return res.status(400).json({
                status: 400,
                message: 'Please try again.',
            });

            res.status(201).json({
                status: 201,
                data: savedPost,
            });
        })

    });
};

// SECTION Update Post
const update = (req, res) => {
    console.log(req.body);
    db.Post.findByIdAndUpdate(req.params._id, req.body, { new: true }, (err, updatedPost) => {
        console.log(updatedPost)
        if(err) return res.status(400).json({
            status: 400,
            message: 'Please try again.',
        });

        res.status(202).json({
            status: 202,
            data: updatedPost,
        });
    });
};

// SECTION  Delete Post
const deletepost = (req, res) => {
    db.Post.findByIdAndDelete(req.params._id, (err, deletedPost) => {
        if (err) return res.status(400).json({
            status: 400,
            message: 'Please try again.',
        });

        console.log(deletedPost);
        res.status(200).json({
            status: 200,
            message: 'Success',
        });
    });
};


module.exports = {
    index,
    show,
    create,
    update,
    deletepost,
  };