/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@mapbox/node-pre-gyp/lib/util sync recursive":
/*!**********************************************************!*\
  !*** ./node_modules/@mapbox/node-pre-gyp/lib/util/ sync ***!
  \**********************************************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "./node_modules/@mapbox/node-pre-gyp/lib/util sync recursive";
module.exports = webpackEmptyContext;

/***/ }),

/***/ "./node_modules/@mapbox/node-pre-gyp/lib sync recursive ^\\.\\/.*$":
/*!**************************************************************!*\
  !*** ./node_modules/@mapbox/node-pre-gyp/lib/ sync ^\.\/.*$ ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./build": "./node_modules/@mapbox/node-pre-gyp/lib/build.js",
	"./build.js": "./node_modules/@mapbox/node-pre-gyp/lib/build.js",
	"./clean": "./node_modules/@mapbox/node-pre-gyp/lib/clean.js",
	"./clean.js": "./node_modules/@mapbox/node-pre-gyp/lib/clean.js",
	"./configure": "./node_modules/@mapbox/node-pre-gyp/lib/configure.js",
	"./configure.js": "./node_modules/@mapbox/node-pre-gyp/lib/configure.js",
	"./info": "./node_modules/@mapbox/node-pre-gyp/lib/info.js",
	"./info.js": "./node_modules/@mapbox/node-pre-gyp/lib/info.js",
	"./install": "./node_modules/@mapbox/node-pre-gyp/lib/install.js",
	"./install.js": "./node_modules/@mapbox/node-pre-gyp/lib/install.js",
	"./main": "./node_modules/@mapbox/node-pre-gyp/lib/main.js",
	"./main.js": "./node_modules/@mapbox/node-pre-gyp/lib/main.js",
	"./node-pre-gyp": "./node_modules/@mapbox/node-pre-gyp/lib/node-pre-gyp.js",
	"./node-pre-gyp.js": "./node_modules/@mapbox/node-pre-gyp/lib/node-pre-gyp.js",
	"./package": "./node_modules/@mapbox/node-pre-gyp/lib/package.js",
	"./package.js": "./node_modules/@mapbox/node-pre-gyp/lib/package.js",
	"./pre-binding": "./node_modules/@mapbox/node-pre-gyp/lib/pre-binding.js",
	"./pre-binding.js": "./node_modules/@mapbox/node-pre-gyp/lib/pre-binding.js",
	"./publish": "./node_modules/@mapbox/node-pre-gyp/lib/publish.js",
	"./publish.js": "./node_modules/@mapbox/node-pre-gyp/lib/publish.js",
	"./rebuild": "./node_modules/@mapbox/node-pre-gyp/lib/rebuild.js",
	"./rebuild.js": "./node_modules/@mapbox/node-pre-gyp/lib/rebuild.js",
	"./reinstall": "./node_modules/@mapbox/node-pre-gyp/lib/reinstall.js",
	"./reinstall.js": "./node_modules/@mapbox/node-pre-gyp/lib/reinstall.js",
	"./reveal": "./node_modules/@mapbox/node-pre-gyp/lib/reveal.js",
	"./reveal.js": "./node_modules/@mapbox/node-pre-gyp/lib/reveal.js",
	"./testbinary": "./node_modules/@mapbox/node-pre-gyp/lib/testbinary.js",
	"./testbinary.js": "./node_modules/@mapbox/node-pre-gyp/lib/testbinary.js",
	"./testpackage": "./node_modules/@mapbox/node-pre-gyp/lib/testpackage.js",
	"./testpackage.js": "./node_modules/@mapbox/node-pre-gyp/lib/testpackage.js",
	"./unpublish": "./node_modules/@mapbox/node-pre-gyp/lib/unpublish.js",
	"./unpublish.js": "./node_modules/@mapbox/node-pre-gyp/lib/unpublish.js",
	"./util/abi_crosswalk": "./node_modules/@mapbox/node-pre-gyp/lib/util/abi_crosswalk.json",
	"./util/abi_crosswalk.json": "./node_modules/@mapbox/node-pre-gyp/lib/util/abi_crosswalk.json",
	"./util/compile": "./node_modules/@mapbox/node-pre-gyp/lib/util/compile.js",
	"./util/compile.js": "./node_modules/@mapbox/node-pre-gyp/lib/util/compile.js",
	"./util/handle_gyp_opts": "./node_modules/@mapbox/node-pre-gyp/lib/util/handle_gyp_opts.js",
	"./util/handle_gyp_opts.js": "./node_modules/@mapbox/node-pre-gyp/lib/util/handle_gyp_opts.js",
	"./util/napi": "./node_modules/@mapbox/node-pre-gyp/lib/util/napi.js",
	"./util/napi.js": "./node_modules/@mapbox/node-pre-gyp/lib/util/napi.js",
	"./util/nw-pre-gyp/index.html": "./node_modules/@mapbox/node-pre-gyp/lib/util/nw-pre-gyp/index.html",
	"./util/nw-pre-gyp/package": "./node_modules/@mapbox/node-pre-gyp/lib/util/nw-pre-gyp/package.json",
	"./util/nw-pre-gyp/package.json": "./node_modules/@mapbox/node-pre-gyp/lib/util/nw-pre-gyp/package.json",
	"./util/s3_setup": "./node_modules/@mapbox/node-pre-gyp/lib/util/s3_setup.js",
	"./util/s3_setup.js": "./node_modules/@mapbox/node-pre-gyp/lib/util/s3_setup.js",
	"./util/versioning": "./node_modules/@mapbox/node-pre-gyp/lib/util/versioning.js",
	"./util/versioning.js": "./node_modules/@mapbox/node-pre-gyp/lib/util/versioning.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/@mapbox/node-pre-gyp/lib sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./app-server.js":
/*!***********************!*\
  !*** ./app-server.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __dirname = "/";
const express = __webpack_require__(/*! express */ "./node_modules/express/index.js");
//const ensureLoggedIn = require('./config/ensureLoggedIn')
const app = express();
const path = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'path'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
const favicon = __webpack_require__(/*! serve-favicon */ "./node_modules/serve-favicon/index.js"); // shows emojis in the browser tab

const logger = __webpack_require__(/*! morgan */ "./node_modules/morgan/index.js");
const userRoutes = __webpack_require__(/*! ./routes/api/users */ "./routes/api/users.js");
const itemRoutes = __webpack_require__(/*! ./routes/api/items */ "./routes/api/items.js");
const orderRoutes = __webpack_require__(/*! ./routes/api/orders */ "./routes/api/orders.js");
app.use(express.json());
app.use((req, res, next) => {
  res.locals.data = {};
  next();
});
app.use(logger('dev'));
app.use(favicon(path.join(__dirname, 'public', 'img', 'logo.png')));
app.use(express.static(path.join(__dirname, 'public')));
const ensureLoggedIn = __webpack_require__(/*! ./config/ensureLoggedIn */ "./config/ensureLoggedIn.js");
app.use('/api/users', ensureLoggedIn, userRoutes);
app.use('/api/items', ensureLoggedIn, itemRoutes);
app.use('/api/orders', ensureLoggedIn, orderRoutes);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
}); // catch all for wrong routes
module.exports = app;

/***/ }),

/***/ "./config/checkToken.js":
/*!******************************!*\
  !*** ./config/checkToken.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const jwt = __webpack_require__(/*! jsonwebtoken */ "./node_modules/jsonwebtoken/index.js");
module.exports = (req, res, next) => {
  // Check for the token being sent in a header or a query parameter
  let token = req.get('Authorization') || req.query.token;
  if (token) {
    token = token.replace('Bearer ', '');
    // Check if token is valid and not expired
    jwt.verify(token, process.env.SECRET, function (err, decoded) {
      req.user = err ? null : decoded.user;
      // Can remove this...
      // If your app doesn't care
      req.exp = err ? null : new Date(decoded.exp * 1000);
    });
    return next();
  } else {
    // No token was sent
    req.user = null;
    return next();
  }
};

/***/ }),

/***/ "./config/database.js":
/*!****************************!*\
  !*** ./config/database.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const mongoose = __webpack_require__(/*! mongoose */ "./node_modules/mongoose/dist/browser.umd.js");
mongoose.connect(process.env.MONGODB_URI);
const db = mongoose.connection;
db.on('connected', () => {
  console.log("Mongoose is nice on ".concat(db.name, " at ").concat(db.host));
});
module.exports = mongoose;

/***/ }),

/***/ "./config/ensureLoggedIn.js":
/*!**********************************!*\
  !*** ./config/ensureLoggedIn.js ***!
  \**********************************/
/***/ ((module) => {

// /config/ensureLoggedIn.js
module.exports = (req, res, next) => {
  if (!req.user) return res.status(401).json('Unauthorized');
  next();
};

/***/ }),

/***/ "./controllers/api/itemsController.js":
/*!********************************************!*\
  !*** ./controllers/api/itemsController.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Item = __webpack_require__(/*! ../../models/item */ "./models/item.js");
module.exports = {
  index,
  show
};
async function index(req, res) {
  try {
    const items = await Item.find({}).sort('name').populate('category').exec();
    // re-sort based upon the sortOrder of the categories
    items.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
    res.status(200).json(items);
  } catch (e) {
    res.status(400).json({
      msg: e.message
    });
  }
}
async function show(req, res) {
  try {
    const item = await Item.findById(req.params.id);
    res.status(200).json(item);
  } catch (e) {
    res.status(400).json({
      msg: e.message
    });
  }
}

/*
exports.seeAllItems = async (req,res, next)=>{
    try {
        const items = await Item.find({})
        res.json(items)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

exports.seeAnItem = async (req,res, next)=>{
try {
    const item = await Item.findOne({_id:req.params.id})
    res.json(item)
    next()
    } catch (error) {
        
        res.status(400).json({error:error.message})
    }
}

exports.createItem = async (req,res, next)=>{
    try {
        const newItem = await Item.create(req.body)
        res.json(newItem)
        next()
    } catch (error) {
        res.status(400).json({error:error.message})
        
    }
}

exports.updateItem = async (req,res, next)=>{
    try {
        const findItem = await Item.findOneAndUpdate({_id:req.params.id}, req.body, {new:true}) 
        res.json(findItem)
        next()
    } catch (error) {
        res.status(400).json({error:error.message})
        
    }
}

exports.deleteItem = async (req,res, next)=>{
    try {
        await Item.findOneAndDelete({_id:req.params.id})
        res.json('Item Deleted')
        next()
    } catch (error) {
        
        res.status(400).json({error:error.message})
    }
}
*/

/***/ }),

/***/ "./controllers/api/orderController.js":
/*!********************************************!*\
  !*** ./controllers/api/orderController.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Order = __webpack_require__(/*! ../../models/order */ "./models/order.js");
// const Item = require('../../models/item');

module.exports = {
  cart,
  addToCart,
  setItemQtyInCart,
  checkout,
  history
};

// A cart is the unpaid order for a user
async function cart(req, res) {
  try {
    const cart = await Order.getCart(req.user._id);
    res.status(200).json(cart);
  } catch (e) {
    res.status(400).json({
      msg: e.message
    });
  }
}

// Add an item to the cart
async function addToCart(req, res) {
  try {
    const cart = await Order.getCart(req.user._id);
    await cart.addItemToCart(req.params.id);
    res.status(200).json(cart);
  } catch (e) {
    res.status(400).json({
      msg: e.message
    });
  }
}

// Updates an item's qty in the cart
async function setItemQtyInCart(req, res) {
  try {
    const cart = await Order.getCart(req.user._id);
    await cart.setItemQty(req.body.itemId, req.body.newQty);
    res.status(200).json(cart);
  } catch (e) {
    res.status(400).json({
      msg: e.message
    });
  }
}

// Update the cart's isPaid property to true
async function checkout(req, res) {
  try {
    const cart = await Order.getCart(req.user._id);
    cart.isPaid = true;
    await cart.save();
    res.status(200).json(cart);
  } catch (e) {
    res.status(400).json({
      msg: e.message
    });
  }
}

// Return the logged in user's paid order history
async function history(req, res) {
  // Sort most recent orders first
  try {
    const orders = await Order.find({
      user: req.user._id,
      isPaid: true
    }).sort('-updatedAt').exec();
    res.status(200).json(orders);
  } catch (e) {
    res.status(400).json({
      msg: e.message
    });
  }
}

/***/ }),

/***/ "./controllers/api/userController.js":
/*!*******************************************!*\
  !*** ./controllers/api/userController.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const User = __webpack_require__(/*! ../../models/user */ "./models/user.js");
const jwt = __webpack_require__(/*! jsonwebtoken */ "./node_modules/jsonwebtoken/index.js");
const bcrypt = __webpack_require__(/*! bcrypt */ "./node_modules/bcrypt/bcrypt.js");
const checkToken = (req, res) => {
  console.log('req.user', req.user);
  res.json(req.exp);
};
const dataController = {
  async create(req, res, next) {
    try {
      const user = await User.create(req.body);
      console.log(req.body);
      // token will be a string
      const token = createJWT(user);
      // send back the token as a string
      // which we need to account for
      // in the client
      res.locals.data.user = user;
      res.locals.data.token = token;
      next();
    } catch (e) {
      console.log('you got a database problem');
      res.status(400).json(e);
    }
  },
  async login(req, res, next) {
    try {
      const user = await User.findOne({
        email: req.body.email
      });
      if (!user) throw new Error();
      const match = await bcrypt.compare(req.body.password, user.password);
      if (!match) throw new Error();
      res.locals.data.user = user;
      res.locals.data.token = createJWT(user);
      next();
    } catch (_unused) {
      res.status(400).json('Bad Credentials');
    }
  }
};
const apiController = {
  auth(req, res) {
    res.json(res.locals.data.token);
  }
};
module.exports = {
  checkToken,
  dataController,
  apiController
};

/* -- Helper Functions -- */

function createJWT(user) {
  return jwt.sign(
  // data payload
  {
    user
  }, process.env.SECRET, {
    expiresIn: '24h'
  });
}
/*
exports.auth = async (req,res,next)=>{
    try {
        const token =  req.header('Authorization').replace('Bearer ','')
        const data = jwt.verify(token, process.env.SECRET)
        const user = await User.findOne({_id: data._id})
        if(!user){
            res.json({message:`INVALID CREDENTIALS - PLEASE :OGIN`})
        }
        req.user = user
        next()

    } catch (error) {
        res.status(401).json({message: error.message})
    }
}


exports.loginUser = async (req,res,next)=>{
    try {
        const user = await User.findOne({email:req.body.email})
        if(!user || !await bcrypt.compare(req.body.password, user.password)){
            res.json({message:'INVALID CREDENTIALS'})
        } else{
            const token = await user.generateAuthToken()
            res.json({user:'User Logged In', token:token})
        }
        next()
    } catch (error) {
        res.status(400).json({message: error.message})
        
    }
}

exports.createUser = async (req,res,next)=>{
    try {
        const newUser = await User.create(req.body)
        await newUser.save()
        res.json({newUser:newUser})
        next()
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

exports.updateUser = async (req,res,next) =>{
    try {
        if(req.user.id !== req.params.id){
            res.json('INVALID CREDENTIALS - PLEASE LOGIN')
        } else if (req.user.id === req.params.id){
            const updatedUser = await User.findOneAndUpdate({_id:req.params.id},req.body, {new:true})
            res.json({userUpdates:updatedUser})
        }
        next()
    } catch (error) {
        res.status(400).json({message: error.message})
        
    }
}

exports.deleteUser = async (req,res,next)=>{
    try {
        if(req.user.id !== req.params.id){
            res.json('INVALID CREDENTIALS - PLEASE LOGIN')
        } else if(req.user.id === req.params.id){

            await User.findOneAndDelete({'_id':req.params.id})
            res.json({message:'User Deleted'})
        }
        next()
    } catch (error) {
        res.json({message:error.message})
    }
}

exports.showAUser =  async (req,res,next)=>{
    try {
        const user = await User.findOne({'_id':req.params.id})
        console.log('rpi',req.params.id)
        console.log('rui',req.user.id)
        if(req.user.id=== req.params.id){
            res.json({user:user.username,id:user.id,email:user.email,posts:user.posts,friends:user.friends,chats:user.chats})
        } else if(req.params.id !== req.user.id){
            res.json({user:user.username,id:user.id,posts:user.posts})
        }
        next()
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

exports.seeAllUsers = async (req,res,next)=>{
    try {
        const users = await User.find({})
        res.json(users)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}



exports.seeUserCart = async (req,res)=>{
    try {

    } catch (error) {
        res.status(400).json({message: error.message})
        
    }
}

exports.clearCart = async (req,res)=>{
    try {
        
    } catch (error) {
        
        res.status(400).json({message: error.message})
    }
}

exports.addItemToCart = async (req,res)=>{
    try {
        
    } catch (error) {
        res.status(400).json({message: error.message})
        
    }
}

exports.deleteItemInCart = async (req,res)=>{
    try {
        
    } catch (error) {
        res.status(400).json({message: error.message})
        
    }
}

exports.updateItemInCart = async (req,res)=>{
    try {
        
    } catch (error) {
        
    }
    res.status(400).json({message: error.message})
}


*/

/***/ }),

/***/ "./models/category.js":
/*!****************************!*\
  !*** ./models/category.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const mongoose = __webpack_require__(/*! mongoose */ "./node_modules/mongoose/dist/browser.umd.js");
const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  sortOrder: Number
}, {
  timestamps: true
});
const Category = mongoose.model('Category', categorySchema);
module.exports = Category;

/***/ }),

/***/ "./models/item.js":
/*!************************!*\
  !*** ./models/item.js ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const mongoose = __webpack_require__(/*! mongoose */ "./node_modules/mongoose/dist/browser.umd.js");
// Ensure the Category model is processed by Mongoose
__webpack_require__(/*! ./category */ "./models/category.js");
const itemSchema = __webpack_require__(/*! ./itemSchema */ "./models/itemSchema.js");
const Item = mongoose.model('Item', itemSchema);
module.exports = Item;

/***/ }),

/***/ "./models/itemSchema.js":
/*!******************************!*\
  !*** ./models/itemSchema.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const mongoose = __webpack_require__(/*! mongoose */ "./node_modules/mongoose/dist/browser.umd.js");
const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  emoji: String,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  },
  price: {
    type: Number,
    required: true,
    default: 0
  }
}, {
  timestamps: true
});
module.exports = itemSchema;

/***/ }),

/***/ "./models/order.js":
/*!*************************!*\
  !*** ./models/order.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const mongoose = __webpack_require__(/*! mongoose */ "./node_modules/mongoose/dist/browser.umd.js");
const Schema = mongoose.Schema;
const itemSchema = __webpack_require__(/*! ./itemSchema */ "./models/itemSchema.js");
const lineItemSchema = new Schema({
  qty: {
    type: Number,
    default: 1
  },
  item: itemSchema
}, {
  timestamps: true,
  toJSON: {
    virtuals: true
  }
});
lineItemSchema.virtual('extPrice').get(function () {
  // 'this' is bound to the lineItem subdoc
  return this.qty * this.item.price;
});
const orderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  lineItems: [lineItemSchema],
  isPaid: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true
  }
});
orderSchema.virtual('orderTotal').get(function () {
  return this.lineItems.reduce((total, item) => total + item.extPrice, 0);
});
orderSchema.virtual('totalQty').get(function () {
  return this.lineItems.reduce((total, item) => total + item.qty, 0);
});
orderSchema.virtual('orderId').get(function () {
  return this.id.slice(-6).toUpperCase();
});

// Fruit.getCart(req.params.id)

orderSchema.statics.getCart = function (userId) {
  // 'this' is the Order model
  return this.findOneAndUpdate(
  // query
  {
    user: userId,
    isPaid: false
  },
  // update
  {
    user: userId
  },
  // upsert option will create the doc if
  // it doesn't exist
  {
    upsert: true,
    new: true
  });
};

// const foundFruit = await Fruit.findById(req.params.id)
// foundFruit.addItemToCart

orderSchema.methods.addItemToCart = async function (itemId) {
  const cart = this;
  // Check if item already in cart
  const lineItem = cart.lineItems.find(lineItem => lineItem.item._id.equals(itemId));
  if (lineItem) {
    lineItem.qty += 1;
  } else {
    const item = await mongoose.model('Item').findById(itemId);
    cart.lineItems.push({
      item
    });
  }
  return cart.save();
};

// Instance method to set an item's qty in the cart (will add item if does not exist)
orderSchema.methods.setItemQty = function (itemId, newQty) {
  // this keyword is bound to the cart (order doc)
  const cart = this;
  // Find the line item in the cart for the menu item
  const lineItem = cart.lineItems.find(lineItem => lineItem.item._id.equals(itemId));
  if (lineItem && newQty <= 0) {
    // Calling remove, removes itself from the cart.lineItems array
    lineItem.remove();
  } else if (lineItem) {
    // Set the new qty - positive value is assured thanks to prev if
    lineItem.qty = newQty;
  }
  // return the save() method's promise
  return cart.save();
};
const Order = mongoose.model('Order', orderSchema);
module.exports = Order;

/***/ }),

/***/ "./models/user.js":
/*!************************!*\
  !*** ./models/user.js ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const mongoose = __webpack_require__(/*! mongoose */ "./node_modules/mongoose/dist/browser.umd.js");
const bcrypt = __webpack_require__(/*! bcrypt */ "./node_modules/bcrypt/bcrypt.js");
const SALT_ROUNDS = 6;
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    required: true
  },
  password: {
    type: String,
    trim: true,
    minlength: 3,
    required: true
  }
}, {
  timestamps: true,
  toJSON: {
    transform: function transform(doc, ret) {
      delete ret.password;
      return ret;
    }
  }
});
userSchema.pre('save', async function (next) {
  // 'this' is the use document
  if (!this.isModified('password')) return next();
  // update the password with the computed hash
  this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
  return next();
});
const User = mongoose.model('User', userSchema);
module.exports = User;

/***/ }),

/***/ "./routes/api/items.js":
/*!*****************************!*\
  !*** ./routes/api/items.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const express = __webpack_require__(/*! express */ "./node_modules/express/index.js");
const router = express.Router();
const itemsCtrl = __webpack_require__(/*! ../../controllers/api/itemsController */ "./controllers/api/itemsController.js");

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

/***/ }),

/***/ "./routes/api/orders.js":
/*!******************************!*\
  !*** ./routes/api/orders.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const express = __webpack_require__(/*! express */ "./node_modules/express/index.js");
const router = express.Router();
const ordersCtrl = __webpack_require__(/*! ../../controllers/api/orderController */ "./controllers/api/orderController.js");

// GET /api/orders/cart
router.get('/cart', ordersCtrl.cart);
// GET /api/orders/history
router.get('/history', ordersCtrl.history);
// POST /api/orders/cart/items/:id
router.post('/cart/items/:id', ordersCtrl.addToCart);
// POST /api/orders/cart/checkout
router.post('/cart/checkout', ordersCtrl.checkout);
// PUT /api/orders/cart/qty
router.put('/cart/qty', ordersCtrl.setItemQtyInCart);
module.exports = router;

/***/ }),

/***/ "./routes/api/users.js":
/*!*****************************!*\
  !*** ./routes/api/users.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// /routes/api/users.js
const express = __webpack_require__(/*! express */ "./node_modules/express/index.js");
const router = express.Router();
const {
  checkToken,
  dataController,
  apiController
} = __webpack_require__(/*! ../../controllers/api/userController */ "./controllers/api/userController.js");
const ensureLoggedIn = __webpack_require__(/*! ../../config/ensureLoggedIn */ "./config/ensureLoggedIn.js");

// POST /api/users
router.post('/', dataController.create, apiController.auth);
// POST /api/users/login
router.post('/login', dataController.login, apiController.auth);

// GET /api/users/check-token
router.get('/check-token', ensureLoggedIn, checkToken);
module.exports = router;

/*

router.get('/', userCtrl.seeAllUsers)
// POST /api/users
router.post('/', userCtrl.createUser)
// POST /api/users/login
router.post('/login', userCtrl.login)
router.delete('/:id', userCtrl.auth, userCtrl.deleteUser)
router.put('/:id', userCtrl.auth, userCtrl.updateUser)
router.get('/:id', userCtrl.showAUser)

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

/***/ }),

/***/ "./server.js":
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

(__webpack_require__(/*! dotenv */ "./node_modules/dotenv/lib/main.js").config)();
__webpack_require__(/*! ./config/database */ "./config/database.js");
const app = __webpack_require__(/*! ./app-server */ "./app-server.js");
app.use(__webpack_require__(/*! ./config/checkToken */ "./config/checkToken.js"));
const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
  console.log("listening on ".concat(PORT, "."));
});

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export default */
/* harmony import */ var _components_loginForm_loginForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/loginForm/loginForm */ "./src/components/loginForm/loginForm.js");
/* harmony import */ var _components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/NavBar/NavBar */ "./src/components/NavBar/NavBar.js");
/* harmony import */ var _router_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router/router */ "./src/router/router.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");



function App(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    routes: _router_router__WEBPACK_IMPORTED_MODULE_2__["default"]
  }), /*#__PURE__*/React.createElement(_components_loginForm_loginForm__WEBPACK_IMPORTED_MODULE_0__["default"], null));
}

/***/ }),

/***/ "./src/components/NavBar/NavBar.js":
/*!*****************************************!*\
  !*** ./src/components/NavBar/NavBar.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NavBar)
/* harmony export */ });
/* harmony import */ var _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavBar.module.scss */ "./src/components/NavBar/NavBar.module.scss");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function NavBar() {
  return /*#__PURE__*/React.createElement("div", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].navBar
  }, /*#__PURE__*/React.createElement("h1", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].title
  }, " Looped"), /*#__PURE__*/React.createElement("div", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].center
  }, /*#__PURE__*/React.createElement("h3", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].products
  }, "About"), /*#__PURE__*/React.createElement("h3", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].discover
  }, "Home"), /*#__PURE__*/React.createElement("h3", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].shop
  }, "Contact")), /*#__PURE__*/React.createElement("h1", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].questionMark
  }, "?"));
}

/***/ }),

/***/ "./src/components/footer/footer.js":
/*!*****************************************!*\
  !*** ./src/components/footer/footer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var _Footer_modules_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer.modules.scss */ "./src/components/footer/Footer.modules.scss");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function Footer() {
  return /*#__PURE__*/React.createElement("div", {
    className: _Footer_modules_scss__WEBPACK_IMPORTED_MODULE_0__["default"].footer
  }, /*#__PURE__*/React.createElement("p", {
    className: _Footer_modules_scss__WEBPACK_IMPORTED_MODULE_0__["default"].name
  }, "GunDog ", /*#__PURE__*/React.createElement("span", null, "\xA9"), " 2023 "));
}

/***/ }),

/***/ "./src/components/loginForm/loginForm.js":
/*!***********************************************!*\
  !*** ./src/components/loginForm/loginForm.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LoginForm)
/* harmony export */ });
/* harmony import */ var _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoginForm.module.scss */ "./src/components/loginForm/LoginForm.module.scss");
/* harmony import */ var _footer_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../footer/footer */ "./src/components/footer/footer.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function LoginForm() {
  return /*#__PURE__*/React.createElement("div", {
    className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].loginDiv
  }, /*#__PURE__*/React.createElement("div", {
    className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].modal
  }, /*#__PURE__*/React.createElement("div", {
    className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].loginSide
  }, /*#__PURE__*/React.createElement("h1", {
    className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].loginText
  }, "Looped"), /*#__PURE__*/React.createElement("h3", {
    className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].createAccount
  }, "Create Account")), /*#__PURE__*/React.createElement("form", {
    className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].loginForm
  }, /*#__PURE__*/React.createElement("p", {
    className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].text
  }, "Username "), /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].inputText
  }), /*#__PURE__*/React.createElement("p", {
    className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].text
  }, "Password "), /*#__PURE__*/React.createElement("input", {
    type: "text ",
    className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].inputText
  }), /*#__PURE__*/React.createElement("input", {
    type: "submit",
    value: "Login",
    className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].submit
  }))), /*#__PURE__*/React.createElement(_footer_footer__WEBPACK_IMPORTED_MODULE_1__["default"], null));
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./router */ "./src/router/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ */ "./server.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(___WEBPACK_IMPORTED_MODULE_4__);
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");





const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(document.getElementById("app"));
root.render( /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode, null, /*#__PURE__*/React.createElement(_router__WEBPACK_IMPORTED_MODULE_3__["default"], null)));

/***/ }),

/***/ "./src/pages/AboutPage/AboutPage.js":
/*!******************************************!*\
  !*** ./src/pages/AboutPage/AboutPage.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ About)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function About(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "AboutPage"
  }, /*#__PURE__*/React.createElement("center", null, /*#__PURE__*/React.createElement("h1", null, "This is the ", props.page, " page ")));
}

/***/ }),

/***/ "./src/pages/ContactPage/ContactPage.js":
/*!**********************************************!*\
  !*** ./src/pages/ContactPage/ContactPage.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Contact)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function Contact(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "ContactPage"
  }, /*#__PURE__*/React.createElement("center", null, /*#__PURE__*/React.createElement("h1", null, "This is the ", props.page, " page"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "https://media.git.generalassemb.ly/user/15881/files/8b5cd280-1f37-11ea-9c27-c9bb294aa61f"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "https://lh4.googleusercontent.com/Wp6jVNMlvYa2Q8BZ6kIzCbbasfZmNSaWIBJjLKEIDzYB9O6skIt3zyrpqPUjTSXG9WQF23WihWl43h_9UHZtugB96EAulCDDqNtB-KtWYWXJbTTMgHGrG7WU881GACAsrZXe8pJlux6xqGlB46AQliYn=s2048"
  }))));
}

/***/ }),

/***/ "./src/router/index.js":
/*!*****************************!*\
  !*** ./src/router/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppRouter)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../components/NavBar'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './routes'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");



function AppRouter() {
  return /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.BrowserRouter, null, /*#__PURE__*/React.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../components/NavBar'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    routes: Object(function webpackMissingModule() { var e = new Error("Cannot find module './routes'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Routes, null, Object(function webpackMissingModule() { var e = new Error("Cannot find module './routes'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_ref => {
    let {
      Component,
      key,
      path
    } = _ref;
    return /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
      key: key,
      path: path,
      element: /*#__PURE__*/React.createElement(Component, {
        page: key
      })
    });
  })));
}
;
ç;

/***/ }),

/***/ "./src/router/router.js":
/*!******************************!*\
  !*** ./src/router/router.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../pages/LoginPage'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _pages_ContactPage_ContactPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/ContactPage/ContactPage */ "./src/pages/ContactPage/ContactPage.js");
/* harmony import */ var _pages_AboutPage_AboutPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/AboutPage/AboutPage */ "./src/pages/AboutPage/AboutPage.js");



const routes = [{
  Component: _pages_ContactPage_ContactPage__WEBPACK_IMPORTED_MODULE_1__["default"],
  key: 'Contact',
  path: '/contact'
}, {
  Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../pages/LoginPage'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  key: 'Login',
  path: '/'
}, {
  Component: _pages_AboutPage_AboutPage__WEBPACK_IMPORTED_MODULE_2__["default"],
  key: 'About',
  path: '/about'
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);

/***/ }),

/***/ "./node_modules/bcrypt sync recursive":
/*!***********************************!*\
  !*** ./node_modules/bcrypt/ sync ***!
  \***********************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "./node_modules/bcrypt sync recursive";
module.exports = webpackEmptyContext;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/NavBar/NavBar.module.scss":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/NavBar/NavBar.module.scss ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.vvRkfX7_KayhoDGHadgp {
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  border: 2px solid white;
  color: white;
  text-align: center;
}

.uHPMBSEvh_wKqGtsHFje {
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: larger;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: white;
  background-color: black;
  background-image: url(https://i.pinimg.com/originals/81/26/7d/81267dec1d4578c4a954894cf7609415.gif);
  background-size: cover;
}
.uHPMBSEvh_wKqGtsHFje .XHs06ExTx6s2MKYHPMDt {
  display: flex;
  justify-content: space-around;
  width: 0.3vw;
}
.uHPMBSEvh_wKqGtsHFje .yO6peHgUWkLrjEeOxzNq {
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
  font-family: "Lucida Console", "Courier New", monospace;
}
.uHPMBSEvh_wKqGtsHFje .qL29mohwNI4jmAapxA8d {
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
  padding-left: 3rem;
  padding-right: 3rem;
}
.uHPMBSEvh_wKqGtsHFje .sB1yQVD9OfTmmuB6WL9H {
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
  padding-left: 3rem;
  padding-right: 3rem;
}
.uHPMBSEvh_wKqGtsHFje .RwZxlnV1cCev6i2DFX7_ {
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
  padding-left: 3rem;
  padding-right: 3rem;
}
.uHPMBSEvh_wKqGtsHFje .qL29mohwNI4jmAapxA8d:hover {
  color: rgb(43, 43, 127);
}
.uHPMBSEvh_wKqGtsHFje .sB1yQVD9OfTmmuB6WL9H:hover {
  color: rgb(43, 43, 127);
}
.uHPMBSEvh_wKqGtsHFje .RwZxlnV1cCev6i2DFX7_:hover {
  color: rgb(43, 43, 127);
}
.uHPMBSEvh_wKqGtsHFje .vvRkfX7_KayhoDGHadgp:hover {
  color: rgb(43, 43, 127);
  border: 2px solid rgb(43, 43, 127);
}

/*
           <h1 className={styles.title}>Site Title</h1>
            <h3 className={styles.products}>Products</h3>
            <h3 className={styles.discover}>Discover</h3>
            <h3 className={styles.shop}>Shop</h3>
           <h1 className={styles.questionMark}>?</h1>
*/`, "",{"version":3,"sources":["webpack://./src/components/NavBar/NavBar.module.scss"],"names":[],"mappings":"AAAA;EACI,kBAAA;EACA,qBAAA;EACA,kBAAA;EACA,aAAA;EACA,cAAA;EACA,uBAAA;EACA,YAAA;EACA,kBAAA;AACJ;;AAMA;EACI,0DAAA;EACA,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,6BAAA;EACA,YAAA;EACA,uBAAA;EACA,mGAAA;EACA,sBAAA;AAHJ;AAKI;EACI,aAAA;EACA,6BAAA;EACA,YAAA;AAHR;AAMI;EACI,kBAAA;EACA,qBAAA;EACA,uDAAA;AAJR;AAOI;EACI,kBAAA;EACA,qBAAA;EACA,kBAAA;EACA,mBAAA;AALR;AAOI;EACI,kBAAA;EACA,qBAAA;EACA,kBAAA;EACA,mBAAA;AALR;AAQI;EACI,kBAAA;EACA,qBAAA;EACA,kBAAA;EACA,mBAAA;AANR;AAUA;EACI,uBAAA;AARJ;AAUA;EACI,uBAAA;AARJ;AAUA;EACI,uBAAA;AARJ;AAUA;EACI,uBAAA;EACA,kCAAA;AARJ;;AAaA;;;;;;CAAA","sourcesContent":[".questionMark{\n    margin-top: 0.3rem;\n    margin-bottom: 0.3rem;\n    border-radius: 50%;\n    width: 1.5rem;\n    height: 1.5rem;\n    border: 2px solid white;\n    color: white;\n    text-align: center;\n\n    \n    }\n\n\n\n.navBar{\n    font-family: -apple-system, BlinkMacSystemFont, sans-serif;\n    font-size: larger;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    color:white;\n    background-color: black;\n    background-image: url(https://i.pinimg.com/originals/81/26/7d/81267dec1d4578c4a954894cf7609415.gif);\n    background-size: cover;\n\n    .center{\n        display: flex;\n        justify-content: space-around;\n        width: 0.3vw;\n    }\n\n    .title{\n        margin-top: 0.3rem;\n        margin-bottom: 0.3rem;\n        font-family: \"Lucida Console\", \"Courier New\", monospace;    \n    \n}\n    .products{\n        margin-top: 0.3rem;\n        margin-bottom: 0.3rem;\n        padding-left: 3rem;    \n        padding-right: 3rem;    \n    }\n    .discover{\n        margin-top: 0.3rem;\n        margin-bottom: 0.3rem;\n        padding-left: 3rem;    \n        padding-right: 3rem;    \n        \n    }\n    .shop{\n        margin-top: 0.3rem;\n        margin-bottom: 0.3rem;\n        padding-left: 3rem;    \n        padding-right: 3rem;    \n    \n}\n\n.products:hover{\n    color:rgb(43, 43, 127);\n}\n.discover:hover{\n    color:rgb(43, 43, 127);\n}\n.shop:hover{\n    color:rgb(43, 43, 127);\n}\n.questionMark:hover{\n    color:rgb(43, 43, 127);\n    border: 2px solid rgb(43, 43, 127);\n}\n\n}\n\n/*\n           <h1 className={styles.title}>Site Title</h1>\n            <h3 className={styles.products}>Products</h3>\n            <h3 className={styles.discover}>Discover</h3>\n            <h3 className={styles.shop}>Shop</h3>\n           <h1 className={styles.questionMark}>?</h1>\n*/"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"questionMark": `vvRkfX7_KayhoDGHadgp`,
	"navBar": `uHPMBSEvh_wKqGtsHFje`,
	"center": `XHs06ExTx6s2MKYHPMDt`,
	"title": `yO6peHgUWkLrjEeOxzNq`,
	"products": `qL29mohwNI4jmAapxA8d`,
	"discover": `sB1yQVD9OfTmmuB6WL9H`,
	"shop": `RwZxlnV1cCev6i2DFX7_`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/footer/Footer.modules.scss":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/footer/Footer.modules.scss ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.LU8SffqZRTEb9r0kuW5M {
  display: flex;
  flex-direction: row;
  width: 100vw;
  justify-content: center;
  position: fixed;
  bottom: 0;
  padding-bottom: 1vmin;
}

.wazTrmjbiQ53MjS2tKj_ {
  font-size: 100px;
  color: white;
  font-size: smaller;
}`, "",{"version":3,"sources":["webpack://./src/components/footer/Footer.modules.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,mBAAA;EACA,YAAA;EACA,uBAAA;EACA,eAAA;EACA,SAAA;EACA,qBAAA;AACJ;;AACA;EACI,gBAAA;EACA,YAAA;EACA,kBAAA;AAEJ","sourcesContent":[".footer{\n    display: flex;\n    flex-direction: row;\n    width: 100vw;\n    justify-content: center;\n    position: fixed;\n    bottom: 0;\n    padding-bottom: 1vmin;\n}\n.name {\n    font-size: 100px;\n    color:white;\n    font-size: smaller;\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"footer": `LU8SffqZRTEb9r0kuW5M`,
	"name": `wazTrmjbiQ53MjS2tKj_`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/loginForm/LoginForm.module.scss":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/loginForm/LoginForm.module.scss ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.CqGtYk3Xu6elStpL07lH {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  background-color: black;
  color: white;
  position: relative;
  height: 100vh;
  background-image: url(https://i.pinimg.com/originals/81/26/7d/81267dec1d4578c4a954894cf7609415.gif);
  background-size: cover;
}
.CqGtYk3Xu6elStpL07lH .bfMlLGv4l7qszyqTkNxJ {
  display: flex;
  flex-direction: row;
  width: 100vmin;
  justify-content: space-around;
}
.CqGtYk3Xu6elStpL07lH .bfMlLGv4l7qszyqTkNxJ .IoBh5PCLHLDuYXe9_4e8 {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.CqGtYk3Xu6elStpL07lH .bfMlLGv4l7qszyqTkNxJ .IoBh5PCLHLDuYXe9_4e8 .VhI2fokXlEWOAaeiTXzG {
  align-self: center;
  padding: 1rem;
}
.CqGtYk3Xu6elStpL07lH .bfMlLGv4l7qszyqTkNxJ .IoBh5PCLHLDuYXe9_4e8 .VhI2fokXlEWOAaeiTXzG:hover {
  color: rgb(43, 43, 127);
}
.CqGtYk3Xu6elStpL07lH .QqR8nAOxvFYkEuFPCNSZ {
  color: white;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
}
.CqGtYk3Xu6elStpL07lH .onx3ZbT8FopRDif2NTlV {
  font-size: larger;
  position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: xxx-large;
  font-family: "Lucida Console", "Courier New", monospace;
}
.CqGtYk3Xu6elStpL07lH .T7sUzcHbKhyCXzchKuki {
  display: flex;
  flex-direction: column;
}
.CqGtYk3Xu6elStpL07lH .DEaZlCj7ISqb1pKAnX61 {
  padding: 1vmin;
  border-radius: 5px;
  background-color: rgb(255, 255, 255);
}
.CqGtYk3Xu6elStpL07lH .CgzozCOl24Gi1p_BPL6G {
  color: white;
  background-color: black;
  height: 2.5rem;
  margin: 0.5rem;
  width: 20rem;
  border-color: white;
  border-width: 0.2rem;
}
.CqGtYk3Xu6elStpL07lH .f0c7G27Uihc8x7ud4GAV {
  display: flex;
  flex-direction: column;
}`, "",{"version":3,"sources":["webpack://./src/components/loginForm/LoginForm.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,0DAAA;EACA,uBAAA;EACA,YAAA;EACA,kBAAA;EACA,aAAA;EACA,mGAAA;EACA,sBAAA;AACJ;AAAI;EACI,aAAA;EACA,mBAAA;EACA,cAAA;EACA,6BAAA;AAER;AADQ;EACI,aAAA;EACA,sBAAA;EACA,uBAAA;AAGZ;AAFY;EACI,kBAAA;EACA,aAAA;AAIhB;AAFY;EACI,uBAAA;AAIhB;AAAI;EACI,YAAA;EACA,sBAAA;EACA,mBAAA;AAER;AACI;EACI,iBAAA;EACA,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,oBAAA;EACA,uDAAA;AACR;AAEI;EACI,aAAA;EACA,sBAAA;AAAR;AAGI;EACI,cAAA;EACA,kBAAA;EACA,oCAAA;AADR;AAGI;EACI,YAAA;EACA,uBAAA;EACA,cAAA;EACA,cAAA;EACA,YAAA;EACA,mBAAA;EACA,oBAAA;AADR;AAGI;EACI,aAAA;EACA,sBAAA;AADR","sourcesContent":[".loginDiv{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    font-family: -apple-system, BlinkMacSystemFont, sans-serif;\n    background-color: black;\n    color:white;\n    position: relative;\n    height: 100vh;\n    background-image: url(https://i.pinimg.com/originals/81/26/7d/81267dec1d4578c4a954894cf7609415.gif);\n    background-size: cover;\n    .modal{\n        display: flex;\n        flex-direction: row;\n        width: 100vmin;\n        justify-content: space-around;\n        .loginSide{\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            .createAccount{\n                align-self: center;\n                padding: 1rem;\n            }\n            .createAccount:hover{\n                color:rgb(43, 43, 127);\n            }\n        }\n    }\n    .text{\n        color:white;\n        padding-bottom: 0.5rem;\n        padding-top: 0.5rem;\n    }\n    \n    .loginText{\n        font-size: larger;\n        position: center;\n        display: flex;\n        flex-direction:column;\n        justify-content: center;\n        font-size: xxx-large;\n        font-family: \"Lucida Console\", \"Courier New\", monospace;       \n        \n    }\n    .loginForm{\n        display: flex;\n        flex-direction: column;\n    }\n    \n    .inputText{\n        padding: 1vmin;\n        border-radius: 5px;\n        background-color: rgb(255, 255, 255);\n    }\n    .submit{\n        color:white;\n        background-color: black;\n        height: 2.5rem;\n        margin:0.5rem;\n        width:20rem;\n        border-color: white;\n        border-width: 0.2rem;\n    }\n    .page{\n        display: flex;\n        flex-direction: column;\n       \n    }\n    \n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"loginDiv": `CqGtYk3Xu6elStpL07lH`,
	"modal": `bfMlLGv4l7qszyqTkNxJ`,
	"loginSide": `IoBh5PCLHLDuYXe9_4e8`,
	"createAccount": `VhI2fokXlEWOAaeiTXzG`,
	"text": `QqR8nAOxvFYkEuFPCNSZ`,
	"loginText": `onx3ZbT8FopRDif2NTlV`,
	"loginForm": `T7sUzcHbKhyCXzchKuki`,
	"inputText": `DEaZlCj7ISqb1pKAnX61`,
	"submit": `CgzozCOl24Gi1p_BPL6G`,
	"page": `f0c7G27Uihc8x7ud4GAV`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/express/lib sync recursive":
/*!****************************************!*\
  !*** ./node_modules/express/lib/ sync ***!
  \****************************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "./node_modules/express/lib sync recursive";
module.exports = webpackEmptyContext;

/***/ }),

/***/ "./src/components/NavBar/NavBar.module.scss":
/*!**************************************************!*\
  !*** ./src/components/NavBar/NavBar.module.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./NavBar.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/NavBar/NavBar.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/footer/Footer.modules.scss":
/*!***************************************************!*\
  !*** ./src/components/footer/Footer.modules.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Footer_modules_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./Footer.modules.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/footer/Footer.modules.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Footer_modules_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Footer_modules_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Footer_modules_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Footer_modules_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/loginForm/LoginForm.module.scss":
/*!********************************************************!*\
  !*** ./src/components/loginForm/LoginForm.module.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./LoginForm.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/loginForm/LoginForm.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "?f1b7":
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?1a4a":
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?a0c3":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?5438":
/*!*******************************!*\
  !*** ./extend-node (ignored) ***!
  \*******************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?5997":
/*!***************************!*\
  !*** ./streams (ignored) ***!
  \***************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?e38f":
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?4f7e":
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"App": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkbig_poppa_code_react_starter_kit"] = self["webpackChunkbig_poppa_code_react_starter_kit"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_mapbox_node-pre-gyp_lib_util_nw-pre-gyp_index_html-node_modules_mapbox_n-da1252"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=App.42a2040c1362c84e1066cf13ec322d22.js.map