'use client';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Skeleton } from '../ui/skeleton';
import { useEffect, useState } from 'react';
import { TransactionsWithReciever, UserWithWallet } from '@/types/type';
import { useRecoilValueLoadable } from 'recoil';
import { RecentFriends } from '@/store/TopFriends';
import { SearchCard } from '../SearchCard';
import { User } from '@prisma/client';
import Image from 'next/image';
import { User2 } from 'lucide-react';
import { useSetRecoilState } from 'recoil';
import { PaymentUser } from '@/store/PaymentUser';
import { useRouter } from 'next/navigation';

export const PayAgain = () => {
	const [loading, setLoading] = useState(false);
	const setPaymentUser = useSetRecoilState(PaymentUser);
	const [Users, setUsers] = useState<TransactionsWithReciever[]>();
	const RecentFriendsData = useRecoilValueLoadable(RecentFriends);
	const [error, setError] = useState(false);
	useEffect(() => {
		if (RecentFriendsData.state == 'loading') {
			setLoading(true);
		}
		if (RecentFriendsData.state == 'hasValue' && RecentFriendsData.contents) {
			if (RecentFriendsData.contents.length == 0) {
				setError(true);
			}
			setUsers(RecentFriendsData.contents);
			setLoading(false);
		}
	}, [RecentFriendsData.state]);
	const router = useRouter();
	return (
		<Card>
			<CardHeader>
				<CardTitle className='underline text-2xl text-primary'>
					Pay Again
				</CardTitle>
			</CardHeader>
			<CardContent className='space-y-4'>
				{loading &&
					Array.from({ length: 5 }).map((_, i) => (
						<div key={i} className='flex justify-between'>
							<div className='flex items-center gap-4'>
								<div>
									<Skeleton className='h-12 w-12 rounded-full' />
								</div>
								<div className='w-full space-y-2'>
									<Skeleton className='w-48 h-4' />
									<Skeleton className='w-20 h-2' />
								</div>
							</div>
							<div>
								<Link
									href={'/wallet-transfer'}
									className='px-4 py-2 bg-green-500 rounded-2xl font-bold'
								>
									Pay Now
								</Link>
							</div>
						</div>
					))}
				<div className='grid grid-cols-5 '>
					{Users &&
						Users.map((item: TransactionsWithReciever, i) => (
							<div
								key={i}
								onClick={() => {
									router.push('/wallet-transfers');
									setPaymentUser(item.Receiver);
								}}
								className='flex cursor-pointer flex-col justify-center items-center'
							>
								<div className='flex flex-col items-center justify-center rounded-full p-5'>
									<div className='text-3xl font-bold rounded-full border px-6 py-5 bg-blue-500'>
										{item.Receiver.Name.charAt(0) +
											item.Receiver.Name.charAt(item.Receiver.Name.length - 1)}
									</div>
									<div className='text-2xl font-bold text-blue-400'>
										{item.Receiver.Name.split(' ')[0]} ..
									</div>
								</div>
							</div>
						))}
				</div>
				{error && <div>Top Friends will show after some transactions</div>}
			</CardContent>
		</Card>
	);
};
