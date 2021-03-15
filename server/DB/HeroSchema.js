const Schema = require("mongoose").Schema;
var uniqueValidator = require('mongoose-unique-validator');

const HeroSchema = new Schema({
   nickName:{
      type: String,
      required: true,
      uniqueCaseInsensitive: true,
      unique: true,
      trim: true,
   },
   realName:{
      type: String,
      trim: true,
      
   },
   originDescription:{
      type: String,
      trim: true,
   },
   superpowers:{
      type: String,
      trim: true,
   },
   catchPhrase:{
      type: String,
      trim: true,
   },
   image:{
      type: String,
      trim: true,
   },
   createdAt:{
      type: Date,
      default: Date.now
   }
  
}, {timestamps: true})


HeroSchema.plugin(uniqueValidator);
module.exports = {
   HeroSchema,
 };