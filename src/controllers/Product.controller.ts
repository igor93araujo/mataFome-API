import { Request, Response } from "express";
import productService from "../services/Product.service";

export default class CategoryController {

  constructor(private ProductService: productService) {}

  public async createProduct(req: Request, res: Response): Promise<Response> {
    try {
     const product = await this.ProductService.createProduct(req.body);
        return res.status(201).json({ message: 'Category created', data: product});
    } catch (e) {
        return res.status(500).json(e);
    }
  }

  public async getAllProducts(req: Request, res: Response): Promise<Response> {
    try {
        const products = await this.ProductService.getAllProducts();
        return res.status(200).json(products);
    } catch (e) {
        return res.status(500).json(e);
    }
  }

  public async getProductById(req: Request, res: Response): Promise<Response> {
    try {
        const product = await this.ProductService.getProductById(Number(req.params.id));
        return res.status(200).json(product);
    } catch (e) {
        return res.status(500).json(e);
    }
  }

  public async updateProduct(req: Request, res: Response): Promise<Response> {
    try {
        const product = await this.ProductService.updateProduct(Number(req.params.id), req.body);
        return res.status(200).json(product);
    } catch (e) {
        return res.status(500).json(e);
    }
  }

  public async deleteProduct(req: Request, res: Response): Promise<Response> {
    try {
        const product = await this.ProductService.deleteProduct(Number(req.params.id));
        return res.status(200).json(product);
    } catch (e) {
        return res.status(500).json(e);
    }
  }
}