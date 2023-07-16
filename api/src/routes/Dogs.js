const {Router} = require("express")



const dogsRouter = Router();
const {handlerGetDogs, handlerById, handlerPostDogs} = require("../handlers/handlersDogs");

dogsRouter.get("/", handlerGetDogs)

dogsRouter.get("/:idRaza", handlerById)

dogsRouter.post("/", handlerPostDogs);


module.exports = dogsRouter;