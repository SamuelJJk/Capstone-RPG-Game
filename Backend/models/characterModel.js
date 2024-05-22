const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
    name:String,
    charClass:String,
    health:Number,
    mana:Number,
    strength:Number,
    intelligence:Number,
});

const Character = mongoose.model("Character",characterSchema);
s
module.exports = Character;