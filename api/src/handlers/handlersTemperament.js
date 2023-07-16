const getTemperaments = require("../controllers/getTemperaments")
const showTemperaments = async (req,res)=>{
    const temperaments = await getTemperaments();
    res.status(200).json(temperaments)
}

module.exports = showTemperaments;