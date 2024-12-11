'use server'
import prisma from '@/db';


export const searchUser = async ({ value }: { value: string }) => {
	const result = await prisma.user.findMany({
		where: {
			OR: [
				{
					isVerified: true,
				},
				{
					OR: [
						{
							MobileNumber: {
								startsWith: value,
							},
							Name: {
								startsWith: value,
							},
                            Email:{
                                startsWith:value
                            }
						},
					],
				},
			],
		},
        include:{
            Wallet:true
        }
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
