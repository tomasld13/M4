const { Router } = require('express');
const { Ability } = require('../db');
const router = Router();

router.post("/", async (req, res) => {
    const { name, description, mana_cost } = req.body
    if(!name ||!mana_cost) return res.status(404).send("Falta enviar datos obligatorios")
    try{
        const c = await Ability.create({ name, description, mana_cost })
        return res.status(201).json(c)
    }catch(e){ 
        return res.status(404).send("Error en alguno de los datos provistos")
    }
})

module.exports = router;