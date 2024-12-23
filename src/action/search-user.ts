'use server';
import prisma from '@/db';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';

export const searchUser = async ({ value }: { value: string }) => {
	const session = await getServerSession(authOptions);
	let result = await prisma.user.findMany({
		where: {
			AND: [
				{
					OR: [
						{ MobileNumber: { startsWith: value } },
						{ Name: { startsWith: value, mode: 'insensitive' } },
						{ Email: { startsWith: value } },
					],
				},
				{
					isVerified: true,
				},
			],
			NOT: {
				id: session?.user.id,
			},
		},
		include: {
			Wallet: true,
		},
	});
	if (result.length < 5) {
		result = await prisma.user.findMany({
			where: {
				isVerified: true,
				NOT: {
					id: session?.user.id,
				},
			},
			include: {
				Wallet: true,
			},
		});
	}
	if (result.length > 0) {
		return {
			code: 1,
			data: result,
			message: 'Success',
		};
	}
	return {
		code: 0,
		data: null,
		message: 'Error finding any verified User with this name',
	};
};
