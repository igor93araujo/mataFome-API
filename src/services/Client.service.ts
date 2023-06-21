import { PrismaClient, Client } from '@prisma/client';

const prisma = new PrismaClient();

export default class ClientService {
    public async createClient(client: Client): Promise<Client> {
        return await prisma.client.create({
        data: client,
        });
    }
    
    public async getAllClients(): Promise<Client[]> {
        return await prisma.client.findMany();
    }
    
    public async getClientById(clientId: number): Promise<Client | null> {
        return await prisma.client.findUnique({
        where: {
            id: clientId,
        },
        });
    }
    
    public async updateClient(clientId: number, client: Client): Promise<Client> {
        return await prisma.client.update({
        where: {
            id: clientId,
        },
        data: client,
        });
    }
    
    public async deleteClient(clientId: number): Promise<Client> {
        return await prisma.client.delete({
        where: {
            id: clientId,
        },
        });
    }

    public async getClientByEmail(email: string): Promise<Client | null> {
        return await prisma.client.findUnique({
            where: {
                email: email,
            },
        });
    }
}