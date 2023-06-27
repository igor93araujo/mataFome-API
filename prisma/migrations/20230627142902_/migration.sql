/*
  Warnings:

  - You are about to drop the column `productId` on the `Sales` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Sales` DROP FOREIGN KEY `Sales_productId_fkey`;

-- AlterTable
ALTER TABLE `Product` MODIFY `image` TEXT NULL;

-- AlterTable
ALTER TABLE `Sales` DROP COLUMN `productId`;

-- CreateTable
CREATE TABLE `_ProductToSales` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ProductToSales_AB_unique`(`A`, `B`),
    INDEX `_ProductToSales_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_ProductToSales` ADD CONSTRAINT `_ProductToSales_A_fkey` FOREIGN KEY (`A`) REFERENCES `Product`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ProductToSales` ADD CONSTRAINT `_ProductToSales_B_fkey` FOREIGN KEY (`B`) REFERENCES `Sales`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
