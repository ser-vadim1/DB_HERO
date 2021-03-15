require("dotenv").config();


const express = require("express");
const CardHeroRouter = express.Router();
const { Hero } = require("../DB");
const MulterMiddleware = require("../middleware/Multer")
const fs = require("fs")
const Path = require("path")
const _CreateCards = require("./_CreateCards")
const _upDateCard = require("./_upDateCard")
const _deleteCard = require("./_deleteCard")
const _getCards = require("./_getCards")
const _getCardById = require("./_getCardById")
const _upLoadImg = require("./_uploadImg")
const _upDateImage = require("./_upDateImage")
const _deleteImage = require("./_deleteImage")

CardHeroRouter
.route("/adjustCardHero")
.get(_getCards)
.post(_CreateCards)
.patch(_upDateCard)
.delete(_deleteCard)

CardHeroRouter
.route("/adjustCardHero/:idCard")
.get(_getCardById)



CardHeroRouter
.route("/uploadImage")
.post(MulterMiddleware(), _upLoadImg)


CardHeroRouter
.route("/updateImage")
.put(MulterMiddleware(), _upDateImage)


CardHeroRouter
.route("/deleteImage")
.delete(_deleteImage)




module.exports = { CardHeroRouter };
