import { PrismaClient, Product } from '@prisma/client';

const prisma = new PrismaClient();

export default class ProductService {

 public async createProduct(product: Product): Promise<Product> {
   return await prisma.product.create({
     data: product,
   });
 }

 public async getAllProducts(): Promise<Product[]> {
  return await prisma.product.findMany();
}

public async getProductById(ProductId: number): Promise<Product | null> {
  return await prisma.product.findUnique({
    where: {
      id: ProductId,
    },
  });
}

public async updateProduct(ProductId: number, Product: Product): Promise<Product> {
  return await prisma.product.update({
    where: {
      id: ProductId,
    },
    data: Product,
  });
}

public async deleteProduct(ProductId: number): Promise<Product> {
  return await prisma.product.delete({
    where: {
      id: ProductId,
    },
  });
}

public async getProductByName(id: number): Promise<Product | null> {
  return await prisma.product.findUnique({
    where: {
      id: id,
    },
  });
}
}