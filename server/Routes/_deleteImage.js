const { Hero } = require("../DB");
const Chalk = require("chalk")
const fs = require("fs")
const Path = require("path");


const _deleteImage = async (req, res, next)=>{
   const {imageName, idCard} = req.query

   fs.unlink(Path.join(__dirname, `../public/uploaded_Image_Hero/${imageName}`), async ()=>{
     if(idCard){
       let Card = await Hero.findByIdAndUpdate(idCard, {image: ""})
     }
     res.status(200).json({ImageName: 'image was deleted'})
   })
}


module.exports = _deleteImage