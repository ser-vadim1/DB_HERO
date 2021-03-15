const express = require("express")
const app = express()
const PORT = process.env.PORT || 3001;
const bodyParser = require("body-parser");
let cors = require("cors");
const Chalk = require('chalk')
const {CardHeroRouter} = require("./Routes/CardHero.routes")
const {errorHandler} = require("./middleware/handlerError")


app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors());
app.use("/", express.static("./public/uploaded_Image_Hero"));

app.use("/api", CardHeroRouter)
app.use(errorHandler)


app.listen(PORT, () => {
    console.log( Chalk.hex('#0388fc').italic(`Server run at port ${PORT}`));
  });
  