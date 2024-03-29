const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema ({
    postimage: {
        type: String,
      },
    game: {
        type: String,
    },
    description: {
        type: String,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;