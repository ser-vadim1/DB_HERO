require("dotenv").config();
const Chalk = require("chalk")

const mongoose = require("mongoose");
const { HeroSchema } = require("./HeroSchema");


async function startDB() {
   try {
      const connection =  await mongoose.connect(process.env.DB_URL, 
         {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
         }
       );
   } catch (error) {
      console.log(Chalk.red(`Error at connection MongoDb ${error.message}`));
      process.exit(1)
   }
}



 startDB()

 const Hero = mongoose.model("HeroModel", HeroSchema, "Hero")

 module.exports = {
   Hero,
 };