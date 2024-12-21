'use server';

import prisma from '@/db';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import bcrypt from 'bcrypt';

export const UpdatePassword = async (
	password: string,
	email?: string,
	number?: string,
) => {
	const session = await getServerSession(authOptions);
	const User = await prisma.user.findFirst({
		where: {
			OR: [
				{ id: session?.user.id },
				{
					Email: email,
				},
				{
					MobileNumber: number,
				},
			],
		},
	});
	if (!User) {
		return {
			code: 0,
			message: 'No User found with this Email or Number',
		};
	}
	if (User?.iSGoogle) {
		return {
			code: 0,
			message: 'Your Account is Linked with Goggle',
		};
	}
	const hasedPassword = await bcrypt.hash(password, 10);
	const UserUpdated = await prisma.user.update({
		where: {
			id: User.id,
		},
		data: {
			Password: hasedPassword,
		},
	});
	if (UserUpdated) {
		return {
			code: 1,
			message: 'Your Password has been Updated Please try Login!',
		};
	}
	return {
		code: 0,
		message: 'Error Updating the User Please try again!!',
	};
};
