/*
  Warnings:

  - You are about to drop the column `pin` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "BankAccount" ADD COLUMN     "pin" INTEGER;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "pin";