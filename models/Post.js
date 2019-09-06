const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema ({
    image: {
        type: String,
      },
    game: {
        type: String,
    },
    description: {
        type: String,
    },
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;