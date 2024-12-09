import prisma from '@/db';
import { BankDetailsSchemaType } from '@/zod/authentication';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { v4 } from 'uuid';
import { sendEmail } from '@/lib/sendEmail';
const GenerateAccountNumber = () => {
	const AccountNumber = Math.floor(10000000 + Math.random() * 90000000);
	return AccountNumber;
};

const getAccountNumber = async () => {
	while (true) {
		const AccountNumber = GenerateAccountNumber();
		const isExsist = await prisma.bankAccount.findFirst({
			where: {
				AccountNumber: AccountNumber,
			},
		});
		if (!isExsist) {
			return AccountNumber;
		}
	}
};

export const POST = async (req: NextRequest) => {
	const data: BankDetailsSchemaType = await req.json();
	const AccountNumber = await getAccountNumber();
	const hasedPassword = await bcrypt.hash(data.Password, 10);
	if (data && AccountNumber) {
		const isExistAccount = await prisma.bankAccount.findFirst({
			where: {
				OR: [{ Email: data.Email }, { MobileNumber: data.MobileNumber }],
			},
		});
		if (isExistAccount) {
			return NextResponse.json({
				code: 0,
				message: 'Account Already Exsist',
			});
		}
		const response = await prisma.$transaction(
			async (txn) => {
				const response = await txn.bankAccount.create({
					data: {
						Email: data.Email,
						MobileNumber: data.MobileNumber,
						Name: data.Name,
						Password: hasedPassword,
						AccountNumber: AccountNumber,
					},
				});
				const Verification = await txn.verificationToken.create({
					data: {
						identifier: response.id,
						token: v4(),
						type: 'BANK_VERIFICATION',
					},
				});
				const confirmationLink = `${process.env.NEXTAUTH_URL}/verify-bank-account/${Verification.token}`;
				await sendEmail(response.Email, confirmationLink, Verification.type);
				return {
					code: 1,
					message: 'Verification Mail Sent to Application',
				};
			},
			{
				timeout: 10000,
				maxWait: 5000,
			},
		);
		if (response.code == 1) {
			return NextResponse.json({
				code: 1,
				message: response.message,
			});
		}
	} else {
		NextResponse.json(
			{
				code: 0,
				message: 'No Data Uploaded',
			},
			{
				status: 500,
			},
		);
	}
};
