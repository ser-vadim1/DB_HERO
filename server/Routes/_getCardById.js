const { Hero } = require("../DB");

const _getCardById = async (req, res, next) =>{
   const {idCard} = req.params
   try {
 
     const OneCard = await Hero.findById({_id: idCard})
 
     if(!OneCard){
       res.status(404).json({message: "no such card"})
     }else{
       res.status(200).json({OneCard: OneCard})
 
     }
 
   } catch (error) {
     next(error)
   }
}



module.exports = _getCardById