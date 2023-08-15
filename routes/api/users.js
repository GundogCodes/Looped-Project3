// /routes/api/users.js
const express = require('express')
const router = express.Router()
const userCtrl = require('../../controllers/api/userController')
//INDUCES

router.get('/', userCtrl.seeAllUsers)
// POST /api/users
router.post('/', userCtrl.createUser)
// POST /api/users/login
router.post('/login', userCtrl.login)
router.delete('/:id', userCtrl.auth, userCtrl.deleteUser)
router.put('/:id', userCtrl.auth, userCtrl.updateUser)
router.get('/:id', userCtrl.showAUser)

// GET /api/users/check-token


module.exports = router

/*
router.get('/', userCtrl.seeAllUsers) //works
router.get('/:id', userCtrl.auth, userCtrl.showAUser) //works
router.get('/user/')
router.post('/new', userCtrl.createUser) //works
router.post('/login',  userCtrl.loginUser) //works
router.delete('/:id', userCtrl.auth, userCtrl.deleteUser) //works
router.put('/:id', userCtrl.auth, userCtrl.updateUser) //works

module.exports = router

seeUserCart
clearCart
addItemToCart
deleteItemInCart
updateItemInCart
 */

/*
    "name":"Oppenhimer",
    "price":60,
    "category":"nuclearPower",
    "itemID":"423",
    "quantity":1
}
*/