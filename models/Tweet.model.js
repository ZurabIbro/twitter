const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tweetSchema = new Schema({
    tweet: {
        type: String,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }, 
    likes: [
        {type: Schema.Types.ObjectId, ref:'users'}
    ]
    
   
})

module.exports = mongoose.model('tweets', tweetSchema)