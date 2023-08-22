
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
          { name: 'Cybertruck', imageUrl:'/img/cyberTruck.gif' ,category: categories[0], price: 42000 , des:"The Cybertruck comes in three battery options: single motor rear-wheel drive (RWD) with an estimated range of over 250 miles, dual motor all-wheel drive (AWD) with an estimated range of over 300 miles, and tri motor AWD with an estimated range of over 500 miles.In terms of performance, the tri motor AWD variant can accelerate from 0 to 60 mph in less than 2.9 seconds, making it quite quick for a pickup truck. It also boasts a towing capacity of over 14,000 pounds and a payload capacity of around 3,500 pounds. The exterior is made of ultra-hard 30X cold-rolled stainless steel, providing durability and dent resistance. The Cybertruck features an adaptive air suspension that can adjust the ride height for various situations, such as off-roading or loading and unloading cargo. Inside, the truck accommodates up to six passengers with a front row bench seat. The dashboard includes a 17-inch central touchscreen for controls and infotainment. Autopilot features for assisted driving are also included. Overall, the Cybertruck combines unique design with impressive electric performance and utility features."},
          { name: 'SR 2150-O', imageUrl: '/img/SR2150O.gif', category: categories[0], price: 69500 },
          { name: 'Blu-Bleed 720', imageUrl: '/img/BluBleed720.gif', category: categories[0], price: 39500 },
          { name: 'C-137 Portal Gun', imageUrl: '/img/portalGun.png', category: categories[1], price: 13950 },
          { name: 'Ray Gun Mark I', imageUrl: '/img/rayGunMarkI.gif', category: categories[1], price: 14950 },
          { name: 'Ray Gun Mark II', imageUrl: '/img/rayGunMarkII.png', category: categories[1], price: 25950 },
          { name: 'Mr Fusion ', imageUrl: '/img/b2f.png', category: categories[2], price: 19500 },
          { name: 'Model TX', imageUrl: '/img/flyingCar.png', category: categories[2], price: 49500 },
          { name: 'Clean Fusion', imageUrl: '/img/atom.gif', category: categories[3], price: 39500 },
          { name: 'Dark Energy', imageUrl: '/img/blackhole.gif', category: categories[3], price: 7950 },
          { name: 'Ion Drive', imageUrl: '/img/ionDrive.png', category: categories[3], price: 195000 },
          { name: 'SR-71 Black Bird', imageUrl: '/img/sr71.png', category: categories[4], price: 29500 },
          { name: 'UAP', imageUrl: '/img/ufo.png', category: categories[4], price: 39500 },
          { name: 'Titan 17', imageUrl: '/img/roboHand.gif', category: categories[5], price: 39500 },
          { name: 'Ironman Helmet', imageUrl: '/img/ironmanHelmet.png', category: categories[5], price: 91005 },
          { name: 'Iron Hand MK-8', imageUrl: '/img/ironHand.webp', category: categories[5], price: 9500 },
          { name: 'CIAL Portal', imageUrl: '/img/portalG.png', category: categories[5], price: 2950 },
          { name: 'Dread Cowl', imageUrl: '/img/cowl.png', category: categories[6], price: 9500 },
          { name: 'Shooters', imageUrl: '/img/webShooter.png', category: categories[6], price: 950 },
          { name: 'Traverse 2099', imageUrl: '/img/2099.png.webp', category: categories[6], price: 8905 },
          { name: 'Dream Detector', imageUrl: '/img/todem.png', category: categories[6], price: 3950},
          { name: 'Roadster', imageUrl: '/img/roadster.png', category: categories[6], price: 790005 }
        ])
      
        console.log(items)
      
        process.exit()
      })()
})


