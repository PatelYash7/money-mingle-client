/*
  Warnings:

  - Added the required column `Password` to the `BankAccount` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BankAccount" ADD COLUMN     "Password" TEXT NOT NULL;
