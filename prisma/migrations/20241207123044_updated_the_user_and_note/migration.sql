/*
  Warnings:

  - Added the required column `Note` to the `Transactions` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "AccountType" AS ENUM ('CLIENT', 'MERCHANT');

-- AlterTable
ALTER TABLE "Transactions" ADD COLUMN     "Note" TEXT NOT NULL,
ADD COLUMN     "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "AccountType" "AccountType" NOT NULL DEFAULT 'CLIENT',
ADD COLUMN     "pin" INTEGER;
