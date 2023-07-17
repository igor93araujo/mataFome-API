//Criando um middleware para impedir a criação de usuarios com cpf igual

import { Request, Response, NextFunction } from "express";
import clientService from "../services/Client.service";

const ClientService = new clientService();

export default async function clientValidates(req: Request, res: Response, next: NextFunction) {
    const { email } = req.body;

    const client = await ClientService.getClientByEmail(email);

    if (client) {
        return res.status(400).json({ message: 'Client already exists' });
    }

    next();
}

