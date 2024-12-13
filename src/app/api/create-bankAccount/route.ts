import prisma from '@/db';
import { BankDetailsSchemaType } from '@/zod/authentication';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { v4 } from 'uuid';
import { SendBankDetails, sendEmail } from '@/lib/sendEmail';
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
		const response = await prisma.$transaction(async (txn) => {
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
			if (Verification.token && confirmationLink) {
				await sendEmail(response.Email, confirmationLink, Verification.type);
				return {
					code: 1,
					message: 'Verification Mail Sent!!',
				};
			}
			return {
				code: 0,
				message: 'Error Sending Mail.',
				data:response
			};
		});
		if (response.code == 1 && response.data) {
			await SendBankDetails({BankDetails:response.data,email:response.data?.Email})
			return NextResponse.json({
				code: response.code,
				message: response.message,
			});
		}
		NextResponse.json({
			code: 0,
			message: 'No Data Uploaded',
		});
	} else {
		NextResponse.json({
			code: 0,
			message: 'No Data Uploaded',
		});
	}
};
