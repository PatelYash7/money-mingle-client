'use client';
import { useRecoilValueLoadable } from 'recoil';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Skeleton } from '../ui/skeleton';
import { transactionsSelector } from '@/store/transaction';
import { TransactionsWithUsers } from '@/types/type';
import { TransactionCard } from '../TransactionCard';
import { useRouter } from 'next/navigation';
import { ChevronsDown } from 'lucide-react';
import { useEffect, useState } from 'react';

export const RecentTransaction = () => {
	const Transactions = useRecoilValueLoadable(transactionsSelector);
	const [RecentTransaction, setRecentTransaction] =
		useState<TransactionsWithUsers[]>();
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		if (Transactions.state == 'loading') {
			setLoading(true);
		}
		if (Transactions.state == 'hasValue' && Transactions.contents) {
			setLoading(false);
			setRecentTransaction(Transactions.contents);
		}
	}, [Transactions.state]);
	const router = useRouter();
	return (
		<Card className='  '>
			<CardHeader>
				<CardTitle className='underline'>Recent Transaction</CardTitle>
			</CardHeader>
			<CardContent className='space-y-2'>
				{loading && (
					<>
						<Skeleton className='h-24 w-full' />
						<Skeleton className='h-24 w-full' />
						<Skeleton className='h-24 w-full' />
						<Skeleton className='h-24 w-full' />
						<Skeleton className='h-24 w-full' />
					</>
				)}

				{RecentTransaction?.length ?
					<>
						{RecentTransaction.length > 5 && (
							<>
								{RecentTransaction.slice(0, 5).map(
									(item: TransactionsWithUsers, i: any) => (
										<TransactionCard txn={item} key={i} />
									),
								)}
								<div
									onClick={() => router.push('/transactions')}
									className=' cursor-pointer text-center text-muted-foreground flex justify-center'
								>
									<ChevronsDown strokeWidth={3} />
								</div>
							</>
						)}

						{RecentTransaction.length < 5 && (
							<>
								{RecentTransaction.map((item: TransactionsWithUsers, i) => (
									<TransactionCard txn={item} key={i} />
								))}
							</>
						)}
					</>
				:	<div className=''>No transactions to show</div>}
			</CardContent>
		</Card>
	);
};
