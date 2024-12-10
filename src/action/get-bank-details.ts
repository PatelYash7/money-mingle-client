'use server';

import prisma from '@/db';

export const getBankDetails = async ({ token }: { token: string }) => {
	try {
		const response = await prisma.bankAccount.findFirst({
			where: {
				id: token,
			},
		});
		return { code: 1, message: 'Data Got!!', data: response };
	} catch (error) {
		return {
			code: 0,
			data: null,
			message: 'Invalid Token',
		};
	}
};
