
require('dotenv').config()
const mongoose = require('mongoose')

const Category = require('../models/category')
const Item = require('../models/item');

mongoose.connect(process.env.MONGODB_URI)

const db = mongoose.connection

db.on('connected', () => {
    (async function () {
        await Category.deleteMany({})
        const categories = await Category.create([
          { name: 'Electric Vehicles', sortOrder: 10 },
          { name: 'Advance Weaponary', sortOrder: 20 },
          { name: 'Propulsions', sortOrder: 30 },
          { name: 'Clean Energy Solutions', sortOrder: 40 },
          { name: 'Aerospace Techologies', sortOrder: 50 },
          { name: 'Robotics', sortOrder: 60 },
          { name: 'Consumer Electronics', sortOrder: 70 }
        ])
      
        await Item.deleteMany({})
        const items = await Item.create([
          { name: 'Cyber Truck', imageUrl:'/img/cyberTruck.gif' , category: categories[0], price: 420000 },
          { name: 'SR 2150 O', imageUrl: '/img/SR2150O.gif', category: categories[0], price: 6.95 },
          { name: 'Blu-Bleed 720', imageUrl: '/img/BluBleed720.gif', category: categories[0], price: 3.95 },
          { name: 'Crab Plate', imageUrl: '🦀', category: categories[1], price: 14.95 },
          { name: 'Fried Shrimp', imageUrl: '🍤', category: categories[1], price: 13.95 },
          { name: 'Whole Lobster', imageUrl: '🦞', category: categories[1], price: 25.95 },
          { name: 'Taco', imageUrl: '🌮', category: categories[2], price: 1.95 },
          { name: 'Burrito', imageUrl: '🌯', category: categories[2], price: 4.95 },
          { name: 'Pizza Slice', imageUrl: '🍕', category: categories[3], price: 3.95 },
          { name: 'Spaghetti', imageUrl: '🍝', category: categories[3], price: 7.95 },
          { name: 'Garlic Bread', imageUrl: '🍞', category: categories[3], price: 1.95 },
          { name: 'French Fries', imageUrl: '🍟', category: categories[4], price: 2.95 },
          { name: 'Green Salad', imageUrl: '🥗', category: categories[4], price: 3.95 },
          { name: 'Ice Cream', imageUrl: '🍨', category: categories[5], price: 1.95 },
          { name: 'Cup Cake', imageUrl: '🧁', category: categories[5], price: 0.95 },
          { name: 'Custard', imageUrl: '🍮', category: categories[5], price: 2.95 },
          { name: 'Strawberry Shortcake', emoji: '🍰', category: categories[5], price: 3.95 },
          { name: 'Milk', imageUrl: '🥛', category: categories[6], price: 0.95 },
          { name: 'Coffee', imageUrl: '☕', category: categories[6], price: 0.95 },
          { name: 'Mai Tai', imageUrl: '🍹', category: categories[6], price: 8.95 },
          { name: 'Beer', imageUrl: '🍺', category: categories[6], price: 3.95 },
          { name: 'Wine', imageUrl: '🍷', category: categories[6], price: 7.95 }
        ])
      
        console.log(items)
      
        process.exit()
      })()
})





