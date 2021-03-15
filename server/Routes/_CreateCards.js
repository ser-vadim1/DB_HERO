const { Hero } = require("../DB");
const _CreateCards =  async (req, res, next)=>{
   try {
      let Card = await Hero.create({
        ...req.body
      })
      res.status(200).json({Card: Card })
  } catch (error) {
    console.log(Chalk.red(error.name));
    next(error)
  }
}

module.exports = _CreateCards