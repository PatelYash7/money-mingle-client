/*
  Warnings:

  - You are about to drop the column `pin` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "pin";

-- AlterTable
ALTER TABLE "Wallet" ADD COLUMN     "pin" INTEGER;