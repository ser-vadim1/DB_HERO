const { Hero } = require("../DB");

const _upDateCard = async (req, res, next) =>{
   const {idCard} = req.query
   try {
    let upDatedCard =  await Hero.findByIdAndUpdate(idCard, req.body, {new: true, runValidators: true, context: 'query'})
    res.status(200).json({card: upDatedCard})
   } catch (error) {
     console.log(Chalk.red("error at method patch"), error);
     next(error)
   }
}


module.exports = _upDateCard