-- CreateEnum
CREATE TYPE "AccountType" AS ENUM ('CLIENT', 'MERCHANT');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('Admin', 'User');

-- CreateEnum
CREATE TYPE "TransactionType" AS ENUM ('CREDIT', 'DEBIT');

-- CreateEnum
CREATE TYPE "TokenType" AS ENUM ('BANK_VERIFICATION', 'RESET_PASSWORD', 'WALLET_VERIFICATION');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Name" TEXT NOT NULL,
    "Password" TEXT,
    "MobileNumber" TEXT,
    "picture" TEXT,
    "AccountType" "AccountType" NOT NULL DEFAULT 'CLIENT',
    "role" "Role" NOT NULL DEFAULT 'User',
    "iSGoogle" BOOLEAN NOT NULL DEFAULT false,
    "isVerified" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Wallet" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "pin" TEXT,
    "Balance" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Wallet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transactions" (
    "id" TEXT NOT NULL,
    "SenderId" TEXT NOT NULL,
    "ReceiverId" TEXT NOT NULL,
    "Note" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Amount" INTEGER NOT NULL,

    CONSTRAINT "Transactions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BankToWalletTrxn" (
    "id" TEXT NOT NULL,
    "Amount" INTEGER NOT NULL,
    "Locked" INTEGER NOT NULL,
    "Token" TEXT,
    "BankId" TEXT NOT NULL,
    "WalletId" TEXT NOT NULL,
    "TxnType" "TransactionType" NOT NULL,

    CONSTRAINT "BankToWalletTrxn_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BankAccount" (
    "id" TEXT NOT NULL,
    "MobileNumber" TEXT NOT NULL,
    "Name" TEXT NOT NULL,
    "Password" TEXT NOT NULL,
    "pin" INTEGER,
    "AccountNumber" INTEGER NOT NULL,
    "Email" TEXT NOT NULL,
    "Balance" INTEGER NOT NULL DEFAULT 2000000,
    "isVerified" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "BankAccount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "token" TEXT NOT NULL,
    "identifier" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "type" "TokenType" NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_Email_key" ON "User"("Email");

-- CreateIndex
CREATE UNIQUE INDEX "User_MobileNumber_key" ON "User"("MobileNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Wallet_userId_key" ON "Wallet"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "BankAccount_MobileNumber_key" ON "BankAccount"("MobileNumber");

-- CreateIndex
CREATE UNIQUE INDEX "BankAccount_AccountNumber_key" ON "BankAccount"("AccountNumber");

-- CreateIndex
CREATE UNIQUE INDEX "BankAccount_Email_key" ON "BankAccount"("Email");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_identifier_key" ON "VerificationToken"("token", "identifier");

-- AddForeignKey
ALTER TABLE "Wallet" ADD CONSTRAINT "Wallet_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transactions" ADD CONSTRAINT "Transactions_SenderId_fkey" FOREIGN KEY ("SenderId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transactions" ADD CONSTRAINT "Transactions_ReceiverId_fkey" FOREIGN KEY ("ReceiverId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BankToWalletTrxn" ADD CONSTRAINT "BankToWalletTrxn_BankId_fkey" FOREIGN KEY ("BankId") REFERENCES "BankAccount"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BankToWalletTrxn" ADD CONSTRAINT "BankToWalletTrxn_WalletId_fkey" FOREIGN KEY ("WalletId") REFERENCES "Wallet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
