import Product from "./product";
import { Request, Response } from "express";
import { toFormatSearch } from "./utils/toFormatSearch";

class ProductController {
  async getProductsByCategory(req: Request, res: Response) {
    try {
      const categories: string[] = req.body;

      if (categories.length === 0 || categories.length === 6) {
        const allProducts = await Product.find({});
        res.status(200).json(allProducts);
      } else {
        const productsByCategory = await Product.find({
          category: { $in: [...categories] },
        });
        res.status(200).json(productsByCategory);
      }
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async getProductsBySearch(req: Request, res: Response) {
    try {
      const searchProduct: string = toFormatSearch(req.body.search);
      const productsBySearch = await Product.find({
        title: searchProduct,
      });
      console.log(productsBySearch);
      res.status(200).json(productsBySearch);
    } catch (e) {
      console.log(e);
      res.status(500).json(e);
    }
  }
}

export default new ProductController();
