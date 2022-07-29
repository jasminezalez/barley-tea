const server = require('/server.js')
const drinkController = require('/controller.js')
const drinkRouter = express.Router();

// what is the point of a Router?
// it needs to know what type of request is being sent to the endpoint
// GET POST UPDATE 

// only there to sort the routes

// middleware (most specific to least specific)


drinkRouter.post('/', drinkController.addTea, (req, res) => {
    res.status(200).json(res.locals.newDrink)
})

module.exports = drinkRouter;

