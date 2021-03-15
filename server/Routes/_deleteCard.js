const { Hero } = require("../DB");
const Chalk = require("chalk")
const fs = require("fs")
const Path = require("path")

const _deleteCard = async (req, res, next)=>{
   const {idCard} = req.query
   try {
     const HeroDoc = await Hero.findById({_id: idCard})
     if(!HeroDoc){
       res.status(404).json({message: "no such card", err: true})
     }
 
     
     fs.unlink(Path.join(__dirname, `../public/uploaded_Image_Hero/${HeroDoc.image}`), async ()=>{
       await Hero.findByIdAndRemove({_id: idCard})
       res.status(200).json({message: "card was removed"})
     })
   } catch (error) {
     console.log(Chalk.red("error at delet card"), error);
     next(error)
   }
}


module.exports = _deleteCard