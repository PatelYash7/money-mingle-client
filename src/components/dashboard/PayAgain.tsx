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

export const PayAgain = () => {
	const [loading, setLoading] = useState(false);
	const [Users, setUsers] = useState<TransactionsWithReciever[]>();
	const RecentFriendsData = useRecoilValueLoadable(RecentFriends);
    console.log(Users)
	useEffect(() => {
		if (RecentFriendsData.state == 'loading') {
			setLoading(true);
		}
		if (RecentFriendsData.state == 'hasValue' && RecentFriendsData.contents) {
			setUsers(RecentFriendsData.contents);
			setLoading(false);
		}
	}, [RecentFriendsData.state]);
	return (
		<Card>
			<CardHeader>
				<CardTitle className='underline text-2xl'>Pay Again</CardTitle>
			</CardHeader>
			<CardContent className='space-y-4'>
				{loading &&
					Array.from({ length: 5 }).map((_, i) => (
						<div className='flex justify-between'>
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
                    {
                        Users && Users.map((item:TransactionsWithReciever,i)=> <div>{item.Receiver.Name}</div> )
                    }
			</CardContent>
		</Card>
	);
};
