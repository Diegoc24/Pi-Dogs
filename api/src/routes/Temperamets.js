const {Router} = require("express")
const showTemperaments = require("../handlers/handlersTemperament")
const temperamentRouter = Router();

temperamentRouter.get("/", showTemperaments)


module.exports = temperamentRouter;