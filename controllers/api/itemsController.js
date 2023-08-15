const Item = require('../../models/item');

module.exports = {
  index,
  show
};

async function index(req, res) {
  try{
    const items = await Item.find({}).sort('name').populate('category').exec();
    // re-sort based upon the sortOrder of the categories
    items.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
    res.status(200).json(items);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }
}

async function show(req, res) {
  try{
    const item = await Item.findById(req.params.id);
    res.status(200).json(item);
  }catch(e){
    res.status(400).json({ msg: e.message });
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