import mongoose from "mongoose";

const Product = new mongoose.Schema({
  title: { type: "string", require: true },
  category: { type: "string", require: true },
  price: { type: "number", require: true },
});

export default mongoose.model("Product", Product);
