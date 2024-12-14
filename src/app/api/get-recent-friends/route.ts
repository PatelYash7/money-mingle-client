import prisma from '@/db';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

export const GET = async () => {
	try {
		const session = await getServerSession(authOptions);
		if (session?.user.id) {
			const Transaction = await prisma.transactions.findMany({
				where: {
					SenderId: session.user.id,
				},
                distinct:['ReceiverId'],
				include: {
					Receiver: true,
				},
			});
			const sortedTransaction = Transaction.sort(
				(a, b) =>
					new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime(),
			);
			if (sortedTransaction) {
				return NextResponse.json({
					code: 1,
					data: sortedTransaction,
					message: 'Success',
				});
			}
			return NextResponse.json({
				code: 0,
				data: null,
				message: 'Failed',
			});
		}
		return NextResponse.json({
			code: 0,
			data: null,
			message: 'Unauthenticated',
		});
	} catch (error) {
		return NextResponse.json({
			code: 0,
			data: null,
			message: 'Error Finding!!',
		});
	}
};
