
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
          { name: 'SR 2150 O', imageUrl: '/img/SR2150O.gif', category: categories[0], price: 695 },
          { name: 'Blu-Bleed 720', imageUrl: '/img/BluBleed720.gif', category: categories[0], price: 395 },
          { name: 'Ray Gun Mark I', imageUrl: '/img/rayGunMarkI.gif', category: categories[1], price: 1495 },
          { name: 'C-137 Portal Gun', imageUrl: '/img/portalGun.png', category: categories[1], price: 1395 },
          { name: 'Ray Gun Mark II', imageUrl: '/img/rayGunMarkII.png', category: categories[1], price: 2595 },
          { name: 'Taco', imageUrl: '/img/', category: categories[2], price: 195 },
          { name: 'Burrito', imageUrl: '/img/', category: categories[2], price: 495 },
          { name: 'Pizza Slice', imageUrl: '/img/', category: categories[3], price: 395 },
          { name: 'Spaghetti', imageUrl: '/img/', category: categories[3], price: 795 },
          { name: 'Garlic Bread', imageUrl: '/img/', category: categories[3], price: 195 },
          { name: 'French Fries', imageUrl: '/img/', category: categories[4], price: 295 },
          { name: 'Green Salad', imageUrl: '/img/', category: categories[4], price: 395 },
          { name: 'Ironman Helmet', imageUrl: '/img/ironmanHelmet.png', category: categories[5], price: 915 },
          { name: 'Cup Cake', imageUrl: '/img/', category: categories[5], price: 950 },
          { name: 'Custard', imageUrl: '/img/', category: categories[5], price: 295 },
          { name: 'Strawberry Shortcake', emoji: '🍰', category: categories[5], price: 395 },
          { name: 'Milk', imageUrl: '/img/', category: categories[6], price: 950 },
          { name: 'Coffee', imageUrl: '/img/', category: categories[6], price: 950 },
          { name: 'Mai Tai', imageUrl: '/img/', category: categories[6], price: 895 },
          { name: 'Beer', imageUrl: '/img/', category: categories[6], price: 395 },
          { name: 'Wine', imageUrl: '/img/', category: categories[6], price: 795 }
        ])
      
        console.log(items)
      
        process.exit()
      })()
})





