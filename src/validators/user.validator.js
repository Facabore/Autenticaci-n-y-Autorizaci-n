import { body } from "express-validator";
import * as help from "./helper.validator";

export const userValidator = [
  body("username", "Username is required").exists().isAlphanumeric().not().isEmpty(),
  body("email", "Email is required").exists().isEmail(),
  body("password", "Password is required").exists().not().isEmpty(),
  (req, res, next) => help.helperValidator(req, res, next)
];
