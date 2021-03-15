const { Hero } = require("../DB");
const Chalk = require("chalk")
const fs = require("fs")
const Path = require("path");


const _upDateImage = async (req, res, next) =>{
   const {idCard} = req.query
   try {
   let HeroDoc = await Hero.findOne({_id: idCard})
   if(!HeroDoc){
     res.status(404).json({message: 'no such card'})
   }
   fs.unlink(Path.join(__dirname, `../public/uploaded_Image_Hero/${HeroDoc.image}`), async ()=>{
     await Hero.findByIdAndUpdate(HeroDoc._id, {image: req.file.filename}, {new: true})
     res.status(200).json({ImageName: req.file.filename})
   })
   } catch (error) {
     console.log('error', error);
     next(error)
   }
}


module.exports = _upDateImage