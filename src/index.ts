import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import * as dotenv from "dotenv";
import ProductsController from "./productsController";

dotenv.config();
mongoose.set("strictQuery", false);

const app = express();
const PORT = 5000;

app.use(cors());

app.get("/", ProductsController.getAllproducts);

async function startApp() {
  try {
    await mongoose.connect(process.env.DB_URL as string);
    app.listen(PORT, () => console.log(`Listening ${PORT}..`));
  } catch (error) {
    console.log(error);
  }
}
startApp();
