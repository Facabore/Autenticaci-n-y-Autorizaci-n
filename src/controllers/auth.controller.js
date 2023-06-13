import userSchema from "../models/user";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import  Rol from "../models/role";
dotenv.config({ path: "./config/.env" }).parsed;

export const signUp = async (req, res) => {
  const { username, email, password, roles } = req.body;

  try {
    const newUser = new userSchema({
      username,
      email,
      password: await userSchema.encryptPassword(password),
    });

   if(roles){
      const foundRoles = await Rol.find({name: {$in: roles}})
      newUser.roles = foundRoles.map(role => role._id)
   }else {
      const role = await Rol.findOne({name: "user"})
      newUser.roles = [role._id]
   }

    const savedUser = await newUser.save();
    const token = jwt.sign({ id: savedUser._id }, process.env.SECRET, {
      expiresIn: 86400, // 24 hours
    });

    res.status(201).json({user: savedUser, token});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const signIn = async (req, res) => {
    const userExist = await userSchema.findOne({email: req.body.email}).populate("roles")
    if(!userExist) return res.status(400).json({message: "Oops! User not found"})
    const matchPassword = await userSchema.validatePassword(req.body.password, userExist.password)
    if(!matchPassword) return res.status(401).json({token: null, message: "Invalid password"})
    const token = jwt.sign({id: userExist._id}, process.env.SECRET, {
        expiresIn: 86400 // 24 hours
    });
    res.json({token})
  };
