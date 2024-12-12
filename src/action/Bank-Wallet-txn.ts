'use server';

import prisma from '@/db';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import bcrypt from 'bcrypt';
export const BankWalletTxn = async ({
	amount,
	bankAccount,
	bankPassword,
}: {
	amount: number;
	bankAccount: number;
	bankPassword: string;
}) => {
	const session = await getServerSession(authOptions);
	if (session?.user.id) {
		const Wallet = await prisma.wallet.findFirst({
			where: {
				userId: session.user.id,
			},
		});
		const BankAccount = await prisma.bankAccount.findFirst({
			where: {
				AccountNumber: bankAccount,
			},
		});
		if (!Wallet) {
			return {
				code: 0,
				message: 'User Not verified!!, Please try again after verification.',
			};
		}
		if (BankAccount) {
			const isVerified = await bcrypt.compare(
				bankPassword,
				BankAccount?.Password,
			);
			if (!isVerified) {
				return {
					code: 0,
					message: 'Incorrect Password, Please try again...',
				};
			}
		} else {
			return {
				code: 0,
				message:
					'Incorrect Bank Account Number, Please Create Account or add correct bank account number.',
			};
		}
		if (Number(BankAccount.Balance) / 100 < amount) {
			return {
				code: 0,
				message: 'Insufficient Balance in Account.',
			};
		}
		const response = await prisma.$transaction(async (txn) => {
			await txn.bankAccount.update({
				where: {
					id: BankAccount.id,
				},
				data: {
					Balance: {
						decrement: amount * 100,
					},
				},
			});
			await txn.wallet.update({
				where: {
					userId: session.user.id,
				},
				data: {
					Balance: {
						increment: amount * 100,
					},
				},
			});
			return {
				code: 1,
				message: 'Transaction Successfull.',
			};
		});
		return {
			code: response.code,
			message: response.message,
		};
	}
	return {
		code: 0,
		message: 'User Not Logged In..',
	};
};
