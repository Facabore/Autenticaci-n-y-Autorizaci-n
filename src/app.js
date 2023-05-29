import express from "express"
import cors from "cors"
import morgan from "morgan"
import pkg from "../package.json"

import productsRoutes from "./routes/products.routes";


const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.set('pkg', pkg);

app.use('/products',productsRoutes);

app.get("/", (req, res) => {
    res.json({
        name: app.get('pkg').name,
        version: app.get('pkg').version
    });
});

export default app;
