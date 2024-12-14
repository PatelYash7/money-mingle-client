'use client';

import { parseDateTime } from '@/lib/parseDate';
import { TransactionsWithUsers } from '@/types/type';
import { ArrowDown, ArrowUp, CircleUserRound } from 'lucide-react';
import { useSession } from 'next-auth/react';

export const TransactionCard = ({ txn }: { txn?: TransactionsWithUsers }) => {
	const session = useSession();
	if (session.data?.user.id == txn?.SenderId) {
		return (
			<div className='rounded-lg border-2 px-4 py-2 flex justify-between'>
				<div className='flex flex-col justify-center items-center'>
					<div className='flex justify-start gap-4 items-center'>
						<div className=' bg-red-500 py-2  px-2 rounded-full'>
							<ArrowUp
								size={30}
								className=' font-extrabold text-lg'
								strokeWidth={3}
							/>
						</div>
						<div className='space-y-2'>
							<div>
								<div className='text-gray-600 text-sm'>Sent To</div>
								<div className='text-red-500 font-bold text-lg'>
									{txn?.Receiver.Name}
								</div>
							</div>
							<div className='flex items-center gap-1  text-sm text-muted-foreground justify-start'>
								<CircleUserRound className='h-5 w-5' />
								<p className='font-semibold'>{txn?.Receiver.MobileNumber}</p>
							</div>
						</div>
					</div>
				</div>
				<div className='flex flex-col justify-between'>
					<div className='text-xs text-end text-muted-foreground'>
						<div>{parseDateTime(txn?.timestamp as Date).time}</div>
						<div>{parseDateTime(txn?.timestamp as Date).date}</div>
					</div>
					<div className='text-3xl text-end font-bold text-red-500'>
						₹{txn?.Amount}
					</div>
				</div>
			</div>
		);
	}
	if (session.data?.user.id == txn?.ReceiverId) {
		return (
			<div className='rounded-lg border-2 px-4 py-2 flex justify-between'>
				<div className='flex flex-col justify-center items-center'>
					<div className='flex justify-start gap-4 items-center'>
						<div className=' bg-green-500 py-2  px-2 rounded-full'>
							<ArrowDown
								size={30}
								className=' font-extrabold text-lg'
								strokeWidth={3}
							/>
						</div>
						<div className='space-y-2'>
							<div>
								<div className='text-gray-600 text-sm'>Received from</div>
								<div className='text-green-500 font-bold text-lg'>
									{txn?.Sender.Name}
								</div>
							</div>
							<div className='flex items-center gap-1  text-sm text-muted-foreground justify-start'>
								<CircleUserRound className='h-5 w-5' />
								<p className='font-semibold'>{txn?.Sender.MobileNumber}</p>
							</div>
						</div>
					</div>
				</div>
				<div className='flex flex-col justify-between'>
					<div className='text-xs text-end text-muted-foreground'>
						<div>{parseDateTime(txn?.timestamp as Date).time}</div>
						<div>{parseDateTime(txn?.timestamp as Date).date}</div>
					</div>
					<div className='text-3xl text-end font-bold text-green-500'>
						₹{txn?.Amount}
					</div>
				</div>
			</div>
		);
	}
};
