'use server';
import prisma from '@/db';
export const VerifyBankAccount = async ({ token }: { token: string }) => {
	try {
		const response = await prisma.$transaction(async (txn) => {
			const Verification = await txn.verificationToken.findFirst({
				where: {
					token: token,
				},
			});
			if (!Verification) {
				return {
					code: 0,
					message: 'InValid Verification Token',
					data: null,
				};
			}
			const BankAccount = await txn.bankAccount.update({
				where: {
					id: Verification.identifier,
				},
				data: {
					isVerified: true,
				},
			});
			if (BankAccount) {
				return {
					code: 1,
					message: 'Account Verified Successfully!',
					data: BankAccount,
				};
			}
		});
		if (response) {
			return {
				code: response.code,
				data: response.data,
				message: response.message,
			};
		}
	} catch (error) {
		return {
			code: 0,
			message: 'InValid Verification Token',
			data: null,
		};
	}
};
