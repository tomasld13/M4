const express = require('express');
const { Router } = require('express');
const { Op, Character, Role } = require('../db');
const router = Router();

router.use(express.json())

router.post("/", async (req, res) => {
    const { code, name, age, race, hp, mana, date_added } = req.body
    if(!code || !name ||!hp) return res.status(404).send("Falta enviar datos obligatorios")
    try{
        const c = await Character.create({ code, name, age, race, hp, mana, date_added })
        return res.status(201).json(c)
    }catch(e){ 
        return res.status(404).send("Error en alguno de los datos provistos")
    }
})

router.get("/", async (req, res) => {
    const { race, age} = req.query
    try{
        if(!race){
            const allCharacters = await Character.findAll();
            res.json(allCharacters)
        }else if(!age){
            const allCharacters = await Character.findAll({where: {race}});
            res.json(allCharacters)
        }else{
            const allCharacters = await Character.findAll({where: {race, age}});
            res.json(allCharacters)
        }
    }catch(e){ 
        res.status(404).send(e)
    }
})

module.exports = router;