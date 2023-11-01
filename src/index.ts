import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import ProductsController from "./productsController";
import connectDB from "./database";

dotenv.config();

connectDB();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post("/products/category", ProductsController.getProductsByCategory);

app.post("/products/search", ProductsController.getProductsBySearch);

app.get("/products/:id", ProductsController.getProductsById);

app.listen(PORT, () => {
  console.log("Server listen 5000 port...");
});
