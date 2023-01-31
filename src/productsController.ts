import Product from "./product";
import { Request, Response } from "express";

class ProductController {
  async getAllproducts(req: Request, res: Response) {
    try {
      const products = await Product.find({});
      res.status(200).json(products);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new ProductController();
