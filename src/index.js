import app from "./app.js";
import dotenv from "dotenv";
import "./database.js"

dotenv.config({ path: "./config/.env" }).parsed;
const port = process.env.PORT || 8080;


app.listen(port, () => {
     console.log(`Server is running on port ${port}`);
    });