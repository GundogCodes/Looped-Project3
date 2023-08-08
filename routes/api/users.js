const express = require('express')
const router = express.Router()
const userCtrl = require('../../controllers/api/userController')

//INDUCES
router.get('/', userCtrl.auth, userCtrl.showAUser)
router.post('/new', userCtrl.createUser)
router.post('/login',  userCtrl.loginUser)
router.delete('/:id', userCtrl.auth, userCtrl.deleteUser)
router.put('/:id', userCtrl.auth, userCtrl.updateUser)

module.exports = router