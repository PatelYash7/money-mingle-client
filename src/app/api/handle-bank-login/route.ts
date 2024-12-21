import prisma from '@/db';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
export const POST = async (req: NextRequest) => {
	try {
		const data: {
			mobileNumber: string;
			password: string;
		} = await req.json();

		const response = await prisma.$transaction(async (txn) => {
			const Value = await txn.bankAccount.findFirst({
				where: {
					MobileNumber: data.mobileNumber,
				},
			});
			if (!Value) {
				return {
					code: 0,
					message: 'Cannot Find Account associated with this Number',
					data: null,
				};
			}
			const isPasswordMatch = data.password == Value.Password;
			if (isPasswordMatch) {
				return {
					code: 1,
					message: 'Login Successfull',
					data: Value.id,
				};
			}
			return {
				code: 0,
				message: 'Enter The Correct password',
				data: null,
			};
		});
		return NextResponse.json({
			code: response.code,
			message: response.message,
			token: response.data,
		});
	} catch (error) {
		return NextResponse.json({
			code: 0,
			message: 'Login UnSuccessfull',
			token: null,
		});
	}
};
