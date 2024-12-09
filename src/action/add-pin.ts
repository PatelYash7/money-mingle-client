'use server';

import prisma from '@/db';

export const addPin = async (pin: number, id: string) => {
	try {
		const result = await prisma.bankAccount.update({
			where: {
				id: id,
			},
			data: {
				pin: pin,
			},
		});
		if (result) {
			return {
				code: 1,
				message: 'Pin Updated',
			};
		}
		return {
			code: 0,
			message: 'Cannot Update Pin',
		};
	} catch (error) {
		return {
			code: 0,
			message: 'Cannot Update Pin',
		};
	}
};
