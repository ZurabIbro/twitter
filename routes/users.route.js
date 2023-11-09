const { Router } = require('express')
const { usersController } = require('../controllers/users.controller')
const router = Router()

router.get('/users', usersController.getUsers)
router.get('/users/:id', usersController.getUser)
router.post('/users', usersController.addUser)
router.patch('/users/:id', usersController.updateUser)
router.delete('/users/:id', usersController.deleteUser)
router.patch('/users/save/:id', usersController.save)


module.exports = router