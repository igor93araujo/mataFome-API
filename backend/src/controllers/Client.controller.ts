import { Request, Response } from "express";
import clientService from "../services/Client.service";


export default class ClientController {
    constructor(private ClientService: clientService) {}

    public async createClient(req: Request, res: Response): Promise<Response> {
        try {
         const client = await this.ClientService.createClient(req.body);
            return res.status(201).json({ message: 'Client created', data: client});
        } catch (e) {
            return res.status(500).json(e);
        }
    }

    public async getAllClients(req: Request, res: Response): Promise<Response> {
        try {
            const clients = await this.ClientService.getAllClients();
            return res.status(200).json(clients);
        } catch (e) {
            return res.status(500).json(e);
        }
    }

    public async getClientById(req: Request, res: Response): Promise<Response> {
        try {
            const client = await this.ClientService.getClientById(Number(req.params.id));
            return res.status(200).json(client);
        } catch (e) {
            return res.status(500).json(e);
        }
    }

    public async updateClient(req: Request, res: Response): Promise<Response> {
        try {
            const client = await this.ClientService.updateClient(Number(req.params.id), req.body);
            return res.status(200).json(client);
        } catch (e) {
            return res.status(500).json(e);
        }
    }

    public async deleteClient(req: Request, res: Response): Promise<Response> {
        try {
            const client = await this.ClientService.deleteClient(Number(req.params.id));
            return res.status(200).json(client);
        } catch (e) {
            return res.status(500).json(e);
        }
    }
}