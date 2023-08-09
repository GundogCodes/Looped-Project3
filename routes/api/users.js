const express = require('express')
const router = express.Router()
const userCtrl = require('../../controllers/api/userController')

//INDUCES

router.get('/', userCtrl.seeAllUsers) //works
router.get('/:id', userCtrl.auth, userCtrl.showAUser) //works
router.post('/new', userCtrl.createUser) //works
router.post('/login',  userCtrl.loginUser) //works
router.delete('/:id', userCtrl.auth, userCtrl.deleteUser) //works
router.put('/:id', userCtrl.auth, userCtrl.updateUser) //works

module.exports = router

/*
    "name":"Oppenhimer",
    "price":60,
    "category":"nuclearPower",
    "itemID":"423",
    "quantity":1
}
*/