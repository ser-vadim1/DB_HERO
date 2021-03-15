const multer = require("multer");
const path = require('path');
const storage = multer.diskStorage({
   destination: function (req, file, cb) {
     cb(null, './public/uploaded_Image_Hero')
   },
   filename: function (req, file, cb) {
    let extArray = file.mimetype.split("/");
    let extension = extArray[extArray.length - 1];
     cb(null, file.fieldname + '-' + Date.now() + '.' + extension)
   }
 })


 const upload = multer({storage: storage })

 module.exports = function MulterMiddleware() {
   return upload.single("ImageHero");
 };