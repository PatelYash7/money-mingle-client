-- CreateEnum
CREATE TYPE "Role" AS ENUM ('Admin', 'User');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Name" TEXT NOT NULL,
    "Password" TEXT,
    "MobileNumber" TEXT,
    "picture" TEXT,
    "role" "Role" NOT NULL DEFAULT 'User',
    "iSGoogle" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_Email_key" ON "User"("Email");

-- CreateIndex
CREATE UNIQUE INDEX "User_MobileNumber_key" ON "User"("MobileNumber");
