'use server'
import prisma from '@/db';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';

export const p2pTransfer = async ({
	receiverId,
	amount,
	note,
	Pin,
}: {
	receiverId: string;
	amount: number;
	note: string;
	Pin: number;
}) => {
	const session = await getServerSession(authOptions);
	if (session?.user.id) {
		const Sender = await prisma.user.findFirst({
			where: {
				id: session.user.id,
				Wallet: {
					pin: Pin,
				},
			},
		});
		if (!Sender) {
			return {
				code: 0,
				message: 'Invalid Pin, Please enter correct Pin.',
			};
		}
		const response = await prisma.$transaction(async (txn) => {
			const response = await txn.transactions.create({
				data: {
					ReceiverId: receiverId,
					SenderId: Sender.id,
					Note: note,
					timestamp: new Date(),
					Amount: amount,
				},
			});
			await txn.wallet.update({
				where: {
					userId: Sender.id,
				},
				data: {
					Balance: {
						decrement: amount * 100,
					},
				},
			});
			await txn.wallet.update({
				where: {
					userId: receiverId,
				},
				data: {
					Balance: {
						increment: amount * 100,
					},
				},
			});
			return {
				code: 1,
				message: 'Transaction Succesfull !',
			};
		});
		if (response) {
			return {
				code: response.code,
				message: response.message,
			};
		}
		return {
			code: 0,
			message: 'Transaction Failed!',
		};
	} else {
		return {
			code: 0,
			message: "You're not Logged In, Please Login..",
		};
	}
};
