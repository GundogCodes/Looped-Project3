const express = require('express')
const router = express.Router()
const userCtrl = require('../../controllers/userController')

//INDUCES
router.get('/', userCtrl.auth, userCtrl.showAUser)
router.post('/', userCtrl.createUser)
router.post('/', userCtrl.auth, userCtrl.loginUser)
router.delete('/:id', userCtrl.auth, userCtrl.deleteUser)
router.put('/:id', userCtrl.auth, userCtrl.updateUser)

module.exports = router