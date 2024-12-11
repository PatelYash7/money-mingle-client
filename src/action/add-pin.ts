'use server';

import prisma from '@/db';

export const addBankPin = async (pin: number, id: string) => {
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


export const addWalletPin = async (pin: number, id: string) => {
	try {
		const result = await prisma.wallet.update({
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
