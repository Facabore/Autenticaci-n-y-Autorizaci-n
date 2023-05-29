import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: "./config/.env" }).parsed;
const db = process.env.DATABASE_URI;

mongoose.set("strictQuery", true);
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));