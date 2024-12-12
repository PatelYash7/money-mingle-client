/*
  Warnings:

  - You are about to alter the column `Balance` on the `BankAccount` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `Balance` on the `Wallet` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- AlterTable
ALTER TABLE "BankAccount" ALTER COLUMN "Balance" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "Wallet" ALTER COLUMN "Balance" SET DATA TYPE INTEGER;
