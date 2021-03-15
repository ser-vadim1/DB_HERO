function errorHandler(err, req, res, next) {
   switch(true){
      case err.name === "ValidationError":
         // Validation error
         let PathError = Object.keys(err.errors)[0]
         let kindError = err.errors[PathError].kind
         let message = kindError === 'unique' ? `${PathError} has been taken` : `${PathError} is requried`
         return res.status(400).send({message: message, err: true})

         default:
            return res.status(500).json({ message: err.message, err: true });
   }

}




module.exports={errorHandler}