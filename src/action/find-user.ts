'use server';

import prisma from '@/db';

export const FindUser = async (email: string) => {
	try {
		const User = await prisma.user.findFirst({
			where: {
				Email: email,
			},
		});
		if (User) {
			return User;
		}
		return null;
	} catch (error) {
		return null;
	}
};
export const FindUserId = async (id: string) => {
	try {
		const User = await prisma.user.findFirst({
			where: {
				id: id,
			},
		});
		if (User) {
			return User;
		}
		return null;
	} catch (error) {
		return null;
	}
};
