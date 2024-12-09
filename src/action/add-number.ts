'use server';

import prisma from '@/db';
import { SuccessResponse } from '@/lib/success';

export const addNumber = async ({
	id,
	MobileNumber,
}: {
	id: string;
	MobileNumber: string;
}) => {
	try {
		const response = await prisma.user.update({
			where: {
				id: id,
			},
			data: {
				MobileNumber: MobileNumber,
			},
		});
		if (response) {
			return {
				code: 1,
				message: 'Number Added Successfully',
			};
		}
	} catch (error) {
		return {
			code: 0,
			message: 'Error Adding the Nummber',
		};
	}
};
