'use server';
import prisma from '@/db';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';

export const searchUser = async ({ value }: { value: string }) => {
	const session = await getServerSession(authOptions);
	const result = await prisma.user.findMany({
		where: {
			AND: [
				{
					OR: [
						{ MobileNumber: { startsWith: value } },
						{ Name: { startsWith: value } },
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
	if (result) {
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
