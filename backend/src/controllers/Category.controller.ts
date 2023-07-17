import { Request, Response } from "express";
import categoryService from "../services/Category.service";

export default class CategoryController {

  constructor(private CategoryService: categoryService) {}

  public async createCategory(req: Request, res: Response): Promise<Response> {
    try {
     const category = await this.CategoryService.createCategory(req.body);
        return res.status(201).json({ message: 'Category created', data: category});
    } catch (e) {
        return res.status(500).json(e);
    }
  }

  public async getAllCategories(req: Request, res: Response): Promise<Response> {
    try {
        const categories = await this.CategoryService.getAllCategories();
        return res.status(200).json(categories);
    } catch (e) {
        return res.status(500).json(e);
    }
  }

  public async getCategoryById(req: Request, res: Response): Promise<Response> {
    try {
        const category = await this.CategoryService.getCategoryById(Number(req.params.id));
        return res.status(200).json(category);
    } catch (e) {
        return res.status(500).json(e);
    }
  }

  public async updateCategory(req: Request, res: Response): Promise<Response> {
    try {
        const category = await this.CategoryService.updateCategory(Number(req.params.id), req.body);
        return res.status(200).json(category);
    } catch (e) {
        return res.status(500).json(e);
    }
  }

  public async deleteCategory(req: Request, res: Response): Promise<Response> {
    try {
        const category = await this.CategoryService.deleteCategory(Number(req.params.id));
        return res.status(200).json(category);
    } catch (e) {
        return res.status(500).json(e);
    }
  }
}