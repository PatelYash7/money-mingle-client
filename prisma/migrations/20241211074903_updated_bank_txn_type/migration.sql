/*
  Warnings:

  - You are about to drop the column `otp` on the `BankToWalletTrxn` table. All the data in the column will be lost.
  - Added the required column `TxnType` to the `BankToWalletTrxn` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TransactionType" AS ENUM ('CREDIT', 'DEBIT');

-- AlterTable
ALTER TABLE "BankToWalletTrxn" DROP COLUMN "otp",
ADD COLUMN     "TxnType" "TransactionType" NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "pin" INTEGER;
