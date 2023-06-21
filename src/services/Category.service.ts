import { PrismaClient, Category } from '@prisma/client';

const prisma = new PrismaClient();

export default class CategoryService {

  public async createCategory(category: Category): Promise<Category> {
    return await prisma.category.create({
      data: category,
    });
  }

  public async getAllCategories(): Promise<Category[]> {
    return await prisma.category.findMany();
  }

  public async getCategoryById(categoryId: number): Promise<Category | null> {
    return await prisma.category.findUnique({
      where: {
        id: categoryId,
      },
    });
  }

  public async updateCategory(categoryId: number, category: Category): Promise<Category> {
    return await prisma.category.update({
      where: {
        id: categoryId,
      },
      data: category,
    });
  }

  public async deleteCategory(categoryId: number): Promise<Category> {
    return await prisma.category.delete({
      where: {
        id: categoryId,
      },
    });
  }

  public async getCategoryByName(id: number): Promise<Category | null> {
    return await prisma.category.findUnique({
      where: {
        id: id,
      },
    });
  }
}