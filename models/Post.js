const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema ({
    game: {
        type: String,
    },
    description: {
        type: String,
    },
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;