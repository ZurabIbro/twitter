const { Router } = require('express')
const { tweetsController } = require('../controllers/tweets.controller')
const router = Router()

router.get('/tweets', tweetsController.getTweets)
router.get('/tweets/:id', tweetsController.getTweet)
router.post('/tweets', tweetsController.addTweet) 
router.delete('/tweets/:id', tweetsController.deleteTweet)
router.patch('/tweets/:id', tweetsController.like)


module.exports = router