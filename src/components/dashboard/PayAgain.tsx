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
				<div className='grid grid-cols-3 sm:grid-cols-5 gap-4'>
					{loading &&
						Array.from({ length: 5 }).map((_, i) => (
							<div
								key={i}
								className='flex flex-col items-center gap-4 border justify-center rounded-3xl border-primary-foreground p-2 sm:p-5'
							>
								<Skeleton className='sm:h-20 h-10 w-10 sm:w-20 rounded-full' />
								<div className='text-2xl font-bold text-blue-400'>
									<Skeleton className='h-2 sm:h-4  w-10 sm:w-20 rounded-full' />
								</div>
							</div>
						))}
				</div>
				<div className='grid grid-cols-3 sm:grid-cols-5 gap-4'>
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
								<div className='flex flex-col items-center border justify-center gap-4 rounded-3xl border-primary-foreground p-2 sm:p-5'>
									{item.Receiver.picture && (
										<Image
											src={item.Receiver.picture}
											alt={item.Receiver.Name.charAt(0)}
											width={28}
											height={28}
											className='rounded-full sm:h-20  text-3xl font-semibold w-10 h-10 sm:w-20 border'
										/>
									)}
									<div className='text-base  sm:text-2xl font-bold text-blue-400'>
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
