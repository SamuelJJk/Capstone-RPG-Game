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
app.get("/character/:name",async(req,res)=>{
    console.log(req.body)
    const characterName = req.params.name
    const character = await Character.findOne({name :characterName})
    res.json(character)
})
// create
app.post("/character",async(req,res)=>{
    const character = await Character.create(req.body)
    console.log(req.body)
    res.json(character)
})
//update
app.put("/character/:name",async(req,res)=>{
    const characterName = req.params.name
    const {health,mana} = req.body
    
    const character = await Character.findOne({name :characterName})
    const updatedCharacter = await Character.findOneAndUpdate(
        {name:characterName},
        {
            health: health,
            mana: mana
        }
    )
    console.log(req.body)
    res.json(character)
})






app.listen(PORT,()=>{
    console.log(`Server has listening on port ${PORT}`)
})