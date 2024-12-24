'use client';

import { BankTransactionCard } from '@/components/BankTransactions';
import { TransactionDetailsCard } from '@/components/TransactionDetailsCard';
import { Skeleton } from '@/components/ui/skeleton';
import {
	BankTransactionSelector,
	transactionsSelector,
} from '@/store/transaction';
import { BankTransactions, TransactionsWithUsers } from '@/types/type';
import { useEffect, useState } from 'react';
import { useRecoilValueLoadable } from 'recoil';

export default function Page() {
	const Transaction = useRecoilValueLoadable(BankTransactionSelector);
	const [loading, setLoading] = useState(false);
	const [transactions, setTransaction] = useState<BankTransactions[]>();
	useEffect(() => {
		if (Transaction.state == 'loading') {
			setLoading(true);
		}
		if (Transaction.state == 'hasValue') {
			setLoading(false);
			setTransaction(Transaction.contents);
		}
	}, [Transaction.state]);
	console.log(transactions);
	return (
		<div className='py-8'>
			<div className='text-2xl sm:text-4xl font-bold text-primary'>
				Bank Transfers
			</div>
			<div className='space-y-2 py-4 sm:w-1/2'>
				{loading &&
					Array.from({ length: 5 }).map((_, i) => (
						<div
							key={i}
							className='flex items-start border-2 p-3 rounded-3xl justify-between gap-4'
						>
							<div className='flex items-start gap-4'>
								<Skeleton className='h-10 w-10 rounded-full bg-slate-800' />
								<div className='space-y-3'>
									<Skeleton className='h-5 w-32 bg-slate-800' />
									<Skeleton className='h-4 w-48 bg-slate-800/50' />
									<div className='flex items-center gap-2'>
										<Skeleton className='h-4 w-8 bg-slate-800/50' />
										<Skeleton className='h-4 w-16 bg-slate-800/50' />
									</div>
									<Skeleton className='h-3 w-56 bg-slate-800/50' />
								</div>
							</div>
							<div className='flex flex-col items-end gap-2'>
								<div className='flex items-center gap-1'>
									<Skeleton className='h-8 w-20 bg-slate-800' />
									<Skeleton className='h-5 w-5 bg-slate-800' />
								</div>
								<Skeleton className='h-4 w-24 bg-slate-800/50' />
							</div>
						</div>
					))}

				{transactions && transactions?.length > 0 ?
					transactions.map((item, i) => (
						<BankTransactionCard key={i} transaction={item} />
					))
				:	<div>No Transactions to show</div>}
			</div>
		</div>
	);
}
