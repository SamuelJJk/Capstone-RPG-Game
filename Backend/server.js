const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const connectToDB = require('./config')
const Character = require('./models/characterModel')
const Item = require('./models/itemModel')
const Enemy = require('./models/enemyModel')
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
connectToDB();

app.get("/",(req,res)=>{
    res.send("index page")
})

// Character routes
// read
app.get("/character",async(req,res)=>{
    console.log(req.body)
    const character = await Character.find()
    res.json(character)
})
// create
app.post("/character",async(req,res)=>{
    const {name,charClass,health, mana,strenght,intelligence} = req.body
    const character = await Character.create({
        name:name,
        charClass:charClass,
        health:health,
        mana:mana,
        strenght:strenght,
        intelligence:intelligence
    })
    console.log(req.body)
    res.json(character)
})






app.listen(PORT,()=>{
    console.log(`Server has listening on port ${PORT}`)
})