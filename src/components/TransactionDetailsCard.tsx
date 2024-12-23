'use client';

import { TransactionsWithUsers } from '@/types/type';
import { useSession } from 'next-auth/react';
import { ArrowDownLeft, ArrowUpRight, User } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import Image from 'next/image';

export const TransactionDetailsCard = ({
	Txn,
}: {
	Txn?: TransactionsWithUsers;
}) => {
	const { data: session } = useSession();

	if (!Txn || !session?.user.id) return null;

	const isReceiver = session.user.id === Txn.ReceiverId;
	const otherUser = isReceiver ? Txn.Sender : Txn.Receiver;
	const transactionType = isReceiver ? 'Received' : 'Sent';
	const amountColor = isReceiver ? 'text-green-600' : 'text-red-600';

	return (
		<div className='border-2 border-primary shadow-md rounded-lg px-4 py-3'>
			<div className='flex items-center justify-between'>
				<div className='flex items-center space-x-3'>
					{otherUser.picture ?
						<Image
							src={otherUser.picture}
							alt={otherUser.Name.charAt(0)}
							width={40}
							height={40}
							className='rounded-full  text-3xl bg-primary flex justify-center items-center sm:h-20 h-16 w-16 sm:w-20'
						/>
					:	<User
							className={` ${isReceiver ? 'text-green-600' : 'text-red-600'} h-10 w-10 text-gray-400`}
						/>
					}
					<div>
						<h3
							className={`${isReceiver ? 'text-green-600' : 'text-red-600'} text-lg font-bold`}
						>
							{otherUser.Name}
						</h3>
						<p className='text-sm text-gray-500'>{otherUser.Email}</p>
					</div>
				</div>
				<div className='text-right'>
					<p className={`font-bold ${amountColor} text-2xl sm:text-4xl`}>
						₹{Txn.Amount}
					</p>
					<p className='text-sm text-gray-500'>
						{formatDistanceToNow(new Date(Txn.timestamp), { addSuffix: true })}
					</p>
				</div>
			</div>
			<div className='mt-3 flex items-center justify-between'>
				<p className='text-sm text-gray-600'>
					Note:-
					<span className='text-gray-800 dark:text-gray-300 font-semibold'>
						{Txn.Note}
					</span>
				</p>
				<div className={`${isReceiver ? 'text-green-600' : 'text-red-600'}`}>
					{isReceiver ?
						<ArrowDownLeft
							strokeWidth={3}
							size={24}
							className='h-8 font-bold w-8'
						/>
					:	<ArrowUpRight
							size={24}
							strokeWidth={3}
							className='h-8 font-bold w-8'
						/>
					}
				</div>
			</div>
			<p
				className={`mt-2 text-base font-bold ${isReceiver ? 'text-green-600' : 'text-red-600'}`}
			>
				{transactionType}
			</p>
			<p className={`mt-2 text-base text-gray-400`}>id: {Txn.id}</p>
		</div>
	);
};
