import prisma from '@/db';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

export const GET = async () => {
	const session = await getServerSession(authOptions);
	try {
		if (session?.user) {
			const response = await prisma.user.findFirst({
				where: {
					id: session.user.id,
				},
			});
			if (response) {
				return NextResponse.json(
					{
						user: response,
						code: 1,
					},
					{
						status: 200,
					},
				);
			}
		}
		return NextResponse.json(
			{
				user: null,
				code: 0,
			},
			{
				status: 400,
			},
		);
	} catch (error) {
		return NextResponse.json(
			{
				user: null,
				code: 0,
			},
			{
				status: 500,
			},
		);
	}
};
