/*
  Warnings:

  - You are about to drop the `_ProductToSales` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `productId` to the `Sales` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_ProductToSales` DROP FOREIGN KEY `_ProductToSales_A_fkey`;

-- DropForeignKey
ALTER TABLE `_ProductToSales` DROP FOREIGN KEY `_ProductToSales_B_fkey`;

-- AlterTable
ALTER TABLE `Sales` ADD COLUMN `productId` INTEGER NOT NULL DEFAULT 0;

-- DropTable
DROP TABLE `_ProductToSales`;

-- AddForeignKey
ALTER TABLE `Sales` ADD CONSTRAINT `Sales_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
