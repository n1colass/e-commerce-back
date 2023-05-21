import Product from "./product";
import { Request, Response } from "express";
import { toFormatSearch } from "./utils/toFormatSearch";
import { ObjectId } from "bson";

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
      if (!searchProduct.length) {
        const allProducts = await Product.find({});
        res.status(200).json(allProducts);
      } else {
        const productsBySearch = await Product.find({
          title: searchProduct,
        });
        res.status(200).json(productsBySearch);
      }
    } catch (e) {
      console.log(e);
      res.status(500).json(e);
    }
  }

  async getProductsById(req: Request, res: Response) {
    try {
      const id = new ObjectId(req.params.id.trim());
      const productsBySearch = await Product.findOne({ _id: id });
      res.status(200).json(productsBySearch);
    } catch (e) {
      console.log(e);
      res.status(500).json(e);
    }
  }
}

export default new ProductController();
