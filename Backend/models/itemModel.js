const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    name:String,
    type:String,
    effect:String,
    value:Number
});

const Item = mongoose.model("Item",itemSchema);

module.exports = Item;