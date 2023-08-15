const express = require('express');
const router = express.Router();
const itemsCtrl = require('../../controllers/api/itemsController');

// GET /api/items
router.get('/', itemsCtrl.index);
// GET /api/items/:id
router.get('/:id', itemsCtrl.show);

module.exports = router;

/*
router.get('/', itemsCtrl.seeAllItems) //works

router.get('/:id', itemsCtrl.seeAnItem) //works

router.post('/new', itemsCtrl.createItem) //works

router.put('/:id', itemsCtrl.updateItem) //works

router.delete('/:id', itemsCtrl.deleteItem) //works

module.exports =  router
*/