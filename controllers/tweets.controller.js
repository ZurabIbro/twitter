const TweetModel = require('../models/Tweet.model')

module.exports.tweetsController = {
    addTweet: (req, res) => {
        TweetModel.create({
            tweet: req.body.tweet,
            userId: req.body.userId
        }).then(() => res.json('tweet added'))
    },
    getTweets: (req, res) => {
        TweetModel.find()
        .then((data) => {
            res.json(data)
        })
    },
    getTweet: (req, res) => {
        TweetModel.findById(req.params.id)
        .then((data) => {
            res.json(data)
        })
    },
    updateTweet: (req, res) => {
        TweetModel.findByIdAndUpdate(req.params.id, {tweet: req.body.tweet})
        .then(() => {
            res.json('data updated')
        })
    },
    deleteTweet: (req, res) => {
        TweetModel.findByIdAndDelete(req.params.id) 
        .then(() => {
            res.json('data has been deleted')   
        })
    },
    like: (req,res) => {
        TweetModel.findByIdAndUpdate(req.params.id, {$addToSet:{likes: req.body.userId}})
        .then(() => {
            res.json('liked')
        }).catch((err) => {
            res.json(err)})
    }
}