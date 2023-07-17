import { PrismaClient, Sales } from '@prisma/client';

const prisma = new PrismaClient();

export default class SalesService {
 
 public async createSales(sales: Sales): Promise<Sales> {
   return await prisma.sales.create({
     data: sales,
   });
 }

 public async getAllSales(): Promise<Sales[]> {
  return await prisma.sales.findMany();
}

public async getSalesById(salesId: number): Promise<Sales | null> {
  return await prisma.sales.findUnique({
    where: {
      id: salesId,
    },
  });
}

public async updateSales(salesId: number, sales: Sales): Promise<Sales> {
  return await prisma.sales.update({
    where: {
      id: salesId,
    },
    data: sales,
  });
}

public async deleteSales(salesId: number): Promise<Sales> {
  return await prisma.sales.delete({
    where: {
      id: salesId,
    },
  });
}

}
