require("dotenv").config();

const Chalk = require("chalk");
const express = require("express");
const CardHeroRouter = express.Router();
const { Hero } = require("../DB");
const MulterMiddleware = require("../middleware/Multer")
const fs = require("fs")
const Path = require("path")

CardHeroRouter.post("/adjustCardHero", async (req, res, next) => {
  try {
      let Card = await Hero.create({
        ...req.body
      })
      res.status(200).json({Card: Card })
  } catch (error) {
    console.log(Chalk.red(error.name));
    next(error)
  }
});

CardHeroRouter.post("/uploadImage", MulterMiddleware(),  async (req, res, next)=>{
  try {
    
    res.status(200).json({ImageName: req.file.filename})
  } catch (error) {
    next(error)
  }
})

CardHeroRouter.put("/updateImage", MulterMiddleware(), async (req, res, next)=>{
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
})


CardHeroRouter.delete("/deleteImage", async (req, res, next)=>{
  const {imageName, idCard} = req.query

  fs.unlink(Path.join(__dirname, `../public/uploaded_Image_Hero/${imageName}`), async ()=>{
    if(idCard){
      let Card = await Hero.findByIdAndUpdate(idCard, {image: ""})
    }
    res.status(200).json({ImageName: 'image was deleted'})
  })
})
CardHeroRouter.patch("/adjustCardHero", async (req, res, next)=>{
  const {idCard} = req.query
  try {
   let upDatedCard =  await Hero.findByIdAndUpdate(idCard, req.body, {new: true, runValidators: true, context: 'query'})
   res.status(200).json({card: upDatedCard})
  } catch (error) {
    console.log(Chalk.red("error at method patch"), error);
    next(error)
  }
})

CardHeroRouter.delete("/adjustCardHero", async (req, res, next)=>{
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
})

CardHeroRouter.get("/adjustCardHero", async(req, res, next)=>{
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
})

CardHeroRouter.get("/adjustCardHero/:idCard", async(req, res, next)=>{
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
})
module.exports = { CardHeroRouter };
