const UserModel = require('../models/User.model')

module.exports.usersController = {
    addUser: (req, res) => {
        UserModel.create({
            userName: req.body.userName,
            email: req.body.email
        }).then(() => res.json('user added'))
    },
    getUsers: (req, res) => {
        UserModel.find({})
        .then((data) => {
            res.json(data)
        })
    },
    getUser: (req, res) => {
        UserModel.findById(req.params.id)
        .then((data) => {
            res.json(data)
        })
    },
    updateUser: (req, res) => {
        UserModel.findByIdAndUpdate(req.params.id, {email: req.body.email, userName: req.body.userName})
        .then(() => {
            res.json('data updated')
        })
    },
    deleteUser: (req, res) => {
        UserModel.findByIdAndDelete(req.params.id) 
        .then(() => {
            res.json('data has been deleted')
        })
    },
    save: (req, res) => {
        UserModel.findByIdAndUpdate(req.params.id, {$push:{saves: req.body.tweetId}})
        .then(() => {
            res.json('saved')
        })
    }

    
}
