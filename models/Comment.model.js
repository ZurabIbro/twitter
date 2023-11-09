const mongoose = require("mongoose")
const Schema = mongoose.Schema

const commentSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId, 
        ref: 'users'
    },
    tweetId: {
        type: Schema.Types.ObjectId,
        ref: 'tweets'
    }
})

module.exports = mongoose.model('comments', commentSchema)