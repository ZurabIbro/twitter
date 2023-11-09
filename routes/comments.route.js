const { Router } = require('express')
const { commentsController } = require('../controllers/comments.controller')
const router = Router()

router.get('/comments', commentsController.getComments)
router.get('/comments/:id', commentsController.getComment)
router.post('/comments', commentsController.addComment) 
router.patch('/comments/:id', commentsController.updateComment)
router.delete('/comments/:id', commentsController.deleteComment)

module.exports = router