import { ROLES } from "../models/role";
import userSchema from "../models/user";

export const existRole = async (req, res, next) => {
    if(req.body.roles){
        for(let i = 0; i < req.body.roles.lenght; i++){
            if(!ROLES.includes(req.body.roles[i])){
                return res.status(400).json({
                    message: `Role ${req.body.roles[i]} does not exist`
                })
            }
        }
    }
    next();
}

export const checkDuplicateUsernameOrEmail = async (req, res, next) => {
    const user = await userSchema.findOne({username: req.body.username})
    if(user) return res.status(400).json({message: "The user already exists"})
    const email = await userSchema.findOne({email: req.body.email})
    if(email) return res.status(400).json({message: "The email already exists"})
    next();

}