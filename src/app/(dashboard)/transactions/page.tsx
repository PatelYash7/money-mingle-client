'use client';

import { TransactionDetailsCard } from '@/components/TransactionDetailsCard';
import { transactionsSelector } from '@/store/transaction';
import { TransactionsWithUsers } from '@/types/type';
import { useRecoilValueLoadable } from 'recoil';

export default function Page() {
	const Transaction = useRecoilValueLoadable(transactionsSelector);
	return (
		<div className='py-8'>
			<div className='text-4xl font-bold text-primary'>Transaction Details</div>
			<div className='space-y-2 py-4 w-1/2'>
				{Transaction.state == 'hasValue' &&
					Transaction.contents &&
					Transaction.contents.map((item: TransactionsWithUsers, i) => (
						<TransactionDetailsCard key={i} Txn={item} />
					))}
			</div>
		</div>
	);
}
