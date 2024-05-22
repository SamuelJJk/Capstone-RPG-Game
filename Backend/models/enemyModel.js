const mongoose = require('mongoose');

const enemySchema = new mongoose.Schema({
    name:String,
    health:Number,
    strenght:Number,
    intelligence:Number,
});

const Enemy = mongoose.model("Enemy",enemySchema);

module.exports = Enemy;