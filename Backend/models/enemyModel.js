const mongoose = require('mongoose');

const enemySchema = new mongoose.Schema({
    name:String,
    health:Number,
    strength:Number,
    intelligence:Number,
});

const Enemy = mongoose.model("Enemy",enemySchema);

module.exports = Enemy;