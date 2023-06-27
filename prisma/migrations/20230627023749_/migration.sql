/*
  Warnings:

  - You are about to alter the column `image` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `VarChar(1000)` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `Product` MODIFY `image` VARCHAR(1000) NULL;
