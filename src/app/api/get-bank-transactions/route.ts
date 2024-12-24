import prisma from '@/db';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

export const GET = async () => {
	const session = await getServerSession(authOptions);
	if (session?.user.id) {
		try {
			const response = await prisma.bankToWalletTrxn.findMany({
				where: {
					Wallet: {
						userId: session.user.id,
					},
				},
				include: {
					Bank: true,
					Wallet: {
						include: {
							user: true,
						},
					},
				},
				orderBy: {
					timestamp: 'desc',
				},
			});
			return NextResponse.json({
				code: 1,
				data: response,
				message: 'Success',
			});
		} catch (error) {
			return NextResponse.json({
				code: 0,
				data: null,
				message: 'Error Getting Transactions',
			});
		}
	}
	return NextResponse.json({
		code: 0,
		data: null,
		message: 'User Not Authenticated',
	});
};
