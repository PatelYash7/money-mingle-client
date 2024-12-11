'use server';

import prisma from '@/db';

export const VerifyWallet = async ({ token }: { token: string }) => {
	try {
		const response = await prisma.$transaction(async (txn) => {
			const verificationToken = await txn.verificationToken.findFirst({
				where: {
					token: token,
					type: 'WALLET_VERIFICATION',
				},
			});
			if (!verificationToken) {
				return {
					code: 0,
					message: 'Verification Token Wrong. Please try Sending Mail again.',
				};
			}
			const response = await txn.wallet.create({
				data: {
					userId: verificationToken.identifier,
				},
			});
			const result = await txn.user.update({
				where: {
					id: verificationToken.identifier,
				},
				data: {
					isVerified: true,
				},
			});
			return {
				code: 1,
				message: 'Your Account Has been verified!!',
				id: response.id,
			};
		});
		if (response) {
			return {
				code: response.code,
				message: response.message,
				id: response.id,
			};
		}
	} catch (error) {
		return {
			code: 0,
			message: 'Error in Verification Please try again!!!',
			id: null,
		};
	}
};
