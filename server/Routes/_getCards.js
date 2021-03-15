const { Hero } = require("../DB");

const _getCards = async (req, res, next)=>{
   let {skipCard} = req.query
  
   try {
     const TotalCountCards = await Hero.find().countDocuments()
     const Cards = await Hero.find().skip(Number(skipCard)).limit(5)
 
 
     res.status(200).json({
       Cards: Cards,
       TotalCountCards: TotalCountCards
     })
   } catch (error) {
     next(error)
   }
}


module.exports = _getCards