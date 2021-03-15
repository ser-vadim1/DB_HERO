
const _upLoadImg = (req, res, next)=>{
   try {
    
      res.status(200).json({ImageName: req.file.filename})
    } catch (error) {
      next(error)
    }
}

module.exports = _upLoadImg