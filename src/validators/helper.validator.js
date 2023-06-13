import {validationResult} from "express-validator";

export const helperValidator = (req, res, next) => {
    try{
        console.log("helperValidator");
        validationResult(req).throw();
        next();
    }
    catch(err){
        res.status(422).json({errors: err.array()})
    }
  }