import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import userSchema from "../models/user";
import Rol from "../models/role";

dotenv.config({ path: "./config/.env" }).parsed;

export const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];
    if (!token) return res.status(403).json({ message: "No token provided" });
    const decoded = jwt.verify(token, process.env.SECRET);
    req.userId = decoded.id;
    const user = await userSchema.findById(req.userId, { password: 0 });
    if (!user) return res.status(404).json({ message: "No user found" });
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

export const isModerator = async (req, res, next) => {
  const user = await userSchema.findById(req.userId);
  const roles = await Rol.find({ _id: { $in: user.roles } });
  for (let i = 0; i < roles.length; i++) {
    if (roles[i].name === "moderator") {
      next();
      return;
    }
  }
  return res.status(403).json({ message: "Require moderator role" });
};

export const isAdmin = async (req, res, next) => {
  const user = await userSchema.findById(req.userId);
  const roles = await Rol.find({ _id: { $in: user.roles } });
  for (let i = 0; i < roles.length; i++) {
    if (roles[i].name === "admin") {
      next();
      return;
    }
  }
  return res.status(403).json({ message: "Require admin role" });
};
