import { Request, Response } from "express";
import salesService from "../services/Sales.service";

export default class SalesController {
  constructor(private salesService: salesService) {}

  public async createSales(req: Request, res: Response): Promise<Response> {
    try {
     const sales = await this.salesService.createSales(req.body);
        return res.status(201).json({ message: 'Sales created', data: sales});
    } catch (e) {
        return res.status(500).json(e);
    }
  }

  public async getAllSales(req: Request, res: Response): Promise<Response> {
    try {
        const sales = await this.salesService.getAllSales();
        return res.status(200).json(sales);
    } catch (e) {
        return res.status(500).json(e);
    }
  }

  public async getSalesById(req: Request, res: Response): Promise<Response> {
    try {
        const sales = await this.salesService.getSalesById(Number(req.params.id));
        return res.status(200).json(sales);
    } catch (e) {
        return res.status(500).json(e);
    }
  }

  public async updateSales(req: Request, res: Response): Promise<Response> {
    try {
        const sales = await this.salesService.updateSales(Number(req.params.id), req.body);
        return res.status(200).json(sales);
    } catch (e) {
        return res.status(500).json(e);
    }
  }

  public async deleteSales(req: Request, res: Response): Promise<Response> {
    try {
        const sales = await this.salesService.deleteSales(Number(req.params.id));
        return res.status(200).json(sales);
    } catch (e) {
        return res.status(500).json(e);
    }
  }

}