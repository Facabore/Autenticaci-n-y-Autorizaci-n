import { body } from "express-validator";
import * as help from "./helper.validator";

export const productValidator = [
  body("name", "name is required").exists().isAlpha().not().isEmpty(),
  body("category", "category is required").exists().isAlpha().not().isEmpty(),
  body("price", "price is required").exists().isNumeric(),
  (req, res, next) => help.helperValidator(req, res, next)
];
