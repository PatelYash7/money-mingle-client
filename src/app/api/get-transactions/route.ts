import prisma from '@/db';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

export const GET = async () => {
	const session = await getServerSession(authOptions);
	if (session?.user.id) {
		const response = await prisma.transactions.findMany({
			where: {
				OR: [{ SenderId: session.user.id }, { ReceiverId: session.user.id }],
			},
			include: {
				Sender: true,
				Receiver: true,
			},
			orderBy: {
				timestamp: 'desc',
			},
		});
		if (response) {
			return NextResponse.json({
				code: 1,
				message: 'success',
				data: response,
			});
		}
		return NextResponse.json({
			code: 0,
			message: 'Failed',
			data: null,
		});
	}
	return NextResponse.json({
		code: 0,
		message: 'User Not Authenticated,',
		data: null,
	});
};
