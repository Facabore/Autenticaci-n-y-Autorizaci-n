import express from "express"
import cors from "cors"
import morgan from "morgan"
import pkg from "../package.json"

import { createRoles } from "./libs/initialSetup";

import productsRoutes from "./routes/products.routes";
import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";


const app = express();
createRoles();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.set('pkg', pkg);

app.use('/api/products',productsRoutes);
app.use('/api/auth',authRoutes);
app.use('/api/users',userRoutes);

app.get("/", (req, res) => {
    res.json({
        name: app.get('pkg').name,
        version: app.get('pkg').version
    });
});

export default app;
