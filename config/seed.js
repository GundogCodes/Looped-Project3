
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
          { name: 'Electric Vehicles', sortOrder: 10 },//0
          { name: 'Advance Weaponary', sortOrder: 20 },//1
          { name: 'Propulsions', sortOrder: 30 }, //2
          { name: 'Clean Energy Solutions', sortOrder: 40 },//3
          { name: 'Aerospace Techologies', sortOrder: 50 },//4
          { name: 'Robotics', sortOrder: 60 }, //5
          { name: 'Consumer Electronics', sortOrder: 70 }//6
        ])
      
        await Item.deleteMany({})
        const items = await Item.create([
          { name: 'Cybertruck', imageUrl:'/img/cyberTruck.gif' ,category: categories[0], price: 420000 , des:"The Cybertruck comes in three battery options: single motor rear-wheel drive (RWD) with an estimated range of over 250 miles, dual motor all-wheel drive (AWD) with an estimated range of over 300 miles, and tri motor AWD with an estimated range of over 500 miles.In terms of performance, the tri motor AWD variant can accelerate from 0 to 60 mph in less than 2.9 seconds, making it quite quick for a pickup truck. It also boasts a towing capacity of over 14,000 pounds and a payload capacity of around 3,500 pounds. The exterior is made of ultra-hard 30X cold-rolled stainless steel, providing durability and dent resistance. The Cybertruck features an adaptive air suspension that can adjust the ride height for various situations, such as off-roading or loading and unloading cargo. Inside, the truck accommodates up to six passengers with a front row bench seat. The dashboard includes a 17-inch central touchscreen for controls and infotainment. Autopilot features for assisted driving are also included. Overall, the Cybertruck combines unique design with impressive electric performance and utility features."},
          { name: 'SR 2150-O', imageUrl: '/img/SR2150O.gif', category: categories[0], price: 695 },
          { name: 'Blu-Bleed 720', imageUrl: '/img/BluBleed720.gif', category: categories[0], price: 395 },
          { name: 'C-137 Portal Gun', imageUrl: '/img/portalGun.png', category: categories[1], price: 1395 },
          { name: 'Ray Gun Mark I', imageUrl: '/img/rayGunMarkI.gif', category: categories[1], price: 1495 },
          { name: 'Ray Gun Mark II', imageUrl: '/img/rayGunMarkII.png', category: categories[1], price: 2595 },
          { name: 'Mr Fusion ', imageUrl: '/img/b2f.png', category: categories[2], price: 195 },
          { name: 'Model TX', imageUrl: '/img/flyingCar.png', category: categories[2], price: 495 },
          { name: 'Clean Fusion', imageUrl: '/img/atom.gif', category: categories[3], price: 395 },
          { name: 'Dark Energy', imageUrl: '/img/blackhole.gif', category: categories[3], price: 795 },
          { name: '__', imageUrl: '/imgblackhole.gif/', category: categories[3], price: 195 },
          { name: 'SR-71 Black Bird', imageUrl: '/img/sr71.png/', category: categories[4], price: 295 },
          { name: 'Green Salad', imageUrl: '/img/blackhole.gif', category: categories[4], price: 395 },
          { name: 'Titan 17', imageUrl: '/img/roboHand.gif', category: categories[5], price: 395 },
          { name: 'Ironman Helmet', imageUrl: '/img/ironmanHelmet.png', category: categories[5], price: 915 },
          { name: 'Iron Hand MK-8', imageUrl: '/img/ironHand.webp', category: categories[5], price: 950 },
          { name: 'CIAL Portal', imageUrl: '/img/portalG.png', category: categories[5], price: 295 },
          { name: 'Milk', imageUrl: '/img/blackhole.gif', category: categories[6], price: 950 },
          { name: 'Coffee', imageUrl: '/img/blackhole.gif', category: categories[6], price: 950 },
          { name: 'Mai Tai', imageUrl: '/img/blackhole.gif', category: categories[6], price: 895 },
          { name: 'Beer', imageUrl: '/img/blackhole.gif', category: categories[6], price: 395 },
          { name: 'Wine', imageUrl: '/img/blackhole.gif', category: categories[6], price: 795 }
        ])
      
        console.log(items)
      
        process.exit()
      })()
})


