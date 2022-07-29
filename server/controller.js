const { use } = require('express/lib/application');
// importing my schema
const Drink = require('./model');

// CRUD 
const drinkController = {}
// collection would be the database???

drinkController.addTea =  (req, res, next) => {
    let { drink } = req.body
    // create a document in the schema
    // all db modifications are asychronous
    Drink.create({ drink }) //unsure if this returns the actual created object
    // Drink.find() //finding the 
    .then((data) => {
       res.locals.newDrink = data
       return next();
    })
    
    
}

module.exports = drinkController;