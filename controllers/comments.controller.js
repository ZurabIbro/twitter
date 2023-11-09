const CommentModel = require('../models/Comment.model')
const CommentsModel = require('../models/Comment.model')

module.exports.commentsController = {
    addComment: (req,res) => {
        CommentsModel.create({
            text: req.body.text,
            userId: req.body.userId,
            tweetId: req.body.tweetId

        }).then(() => res.json('comment added'))
    },
    getComments: (req, res) => {
        CommentsModel.find()
        .then((data) => {
            res.json(data)
        })
    },
    getComment: (req, res) => {
        CommentsModel.findById(req.params.id)
        .then((data) => {
            res.json(data)
        })
    },
    updateComment: (req, res) => {
        CommentsModel.findByIdAndUpdate(req.params.id, {text: req.body.text})
        .then(() => {
            res.json('data updated')
        })
    },
    deleteComment: (req, res) => {
        CommentModel.findByIdAndDelete(req.params.id) 
        .then(() => {
            res.json('data has been deleted')
        })
    }
 
}