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
		<div className={`border-2 shadow-md rounded-lg px-2 py-2 ${isReceiver ? 'bg-gradient-to-t from-transparent to-green-500/15':'bg-gradient-to-t from-transparent to-red-500/20'}`}>
			<div className='flex items-center justify-between'>
				<div className='flex items-center space-x-2'>
					{otherUser.picture ?
						<Image
							src={otherUser.picture}
							alt={otherUser.Name.charAt(0)}
							width={40}
							height={40}
							className='rounded-full text-2xl bg-primary flex justify-center items-center sm:h-16 h-12 w-12 sm:w-16'
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
					<p className={`font-bold ${amountColor} text-xl sm:text-3xl`}>
						₹{Txn.Amount}
					</p>
					<p className='text-sm text-gray-500'>
						{formatDistanceToNow(new Date(Txn.timestamp), { addSuffix: true })}
					</p>
				</div>
			</div>
			<div className='mt-1 flex items-center justify-between'>
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
							className='h-6 font-bold w-6'
						/>
					:	<ArrowUpRight
							size={24}
							strokeWidth={3}
							className='h-6 font-bold w-6'
						/>
					}
				</div>
			</div>
			<p
				className={`mt-2 text-sm font-bold ${isReceiver ? 'text-green-600' : 'text-red-600'}`}
			>
				{transactionType}
			</p>
			<p className={`mt-1 text-sm text-gray-400`}>id: {Txn.id}</p>
		</div>
	);
};
