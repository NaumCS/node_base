const Animal = require('../models/Animal');
const sequelize = require('sequelize');

class AnimalController{
    async store(req, res){
        try{
            const result = await sequelize.Transaction(async (t) => {
                const newAnimal = await Animal.create(req.body);
                return res.status(200).json(newAnimal);
            });
        }catch(e){
            console.log(e)
            return res.status(400).json({ erro: e })
        }  
    }
    async select(req,res){
        try{
            const result = await sequelize.Transaction(async (t) => {
                const animal = await Animal.findByPk(req.params.id);
                return res.json(animal);
            });
        }catch(e){ 
            return res.status(400).json({ erro: e })
        }
    }
    async allAnimals(req, res){
        try{
            const result = await sequelize.Transaction(async (t) => {
                const animals = await Animal.findAll()
                return res.json(animals);
            });
        }catch(e){
            console.log(e)
            res.status(400).json({ erro: e })
        }
    }
    async update(req, res){
        try{
            const result = await sequelize.Transaction(async (t) => {
                const animal = await Animal.findByPk(req.params.id);
                const newAnimal = animal.update(req.body);
                return res.json(newAnimal);
            });
        }catch(e){
            return res.json({ erro: e })
        }
    }
    async delete(req, res){
        try{
            const result = await sequelize.Transaction(async (t) => {
                const { id } = req.params;
                if(!id){
                    return res.status(400).json({erro: 'id não informado'})
                }
                const animal = await Animal.findByPk(id);
                if(!arena){
                    return res.status(400).json({ erro: "Animal não encontrado" });
                }
                await animal.destroy();
                return res.json(animal);
            });
        }catch(e){
            return res.json({ erro: e })
        }
    }
   
}

module.exports = AnimalController;