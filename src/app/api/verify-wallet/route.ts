import prisma from '@/db';
import { sendEmail } from '@/lib/sendEmail';
import { TokenType } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { v4 } from 'uuid';

export const POST = async (req: NextRequest) => {
	const data: {
		id: string;
		email: string;
	} = await req.json();
	try {
		const response = await prisma.$transaction(async (txn) => {
			const token = await txn.verificationToken.create({
			    data:{
			        token:v4(),
			        identifier:data.id,
			        type:'WALLET_VERIFICATION'
			    }
			})
			const confirmationLink = `${process.env.NEXTAUTH_URL}/verify-wallet/${token.token}`;
			await sendEmail(data.email,confirmationLink,token.type)
			return {
				code: 1,
				message: 'Wallet Verification Done',
			};
		});
		if (response.code == 1) {
			return NextResponse.json({
				code: 1,
				message: 'Wallet Verification Done.',
			});
		}
		return NextResponse.json({
			code: 0,
			message: 'Please try Again!!!',
		});
	} catch (error) {
		return NextResponse.json({
			code: 0,
			message: 'Please try Again!!!',
		});
	}
};
