import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
	ArrowDownToLine,
	ArrowUpFromLine,
	Banknote,
	Wallet2,
} from 'lucide-react';
import { BankTransactions } from '@/types/type';
import { formatDistanceToNow } from 'date-fns';

export function BankTransactionCard({
	transaction,
}: {
	transaction: BankTransactions;
}) {
	const { Amount, TxnType, timestamp, Bank, Wallet } = transaction;
	const isDebit = TxnType === 'DEBIT';

	return (
		<Card
			className={`w-full max-w-md bg-gradient-to-t from-transparent  ${isDebit ? 'to-green-500/20' : 'to-red-500/20'} `}
		>
			<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
				<CardTitle className='text-2xl text-primary font-bold'>
					{isDebit ?
						'Bank to Wallet Transactions'
					:	'Wallet to Bank Transactions'}
				</CardTitle>
				<div className='flex items-center space-x-2'>
					<Badge
						className='text-green-50'
						variant={isDebit ? 'default' : 'destructive'}
					>
						{isDebit ? 'Credit' : 'Debit'}
					</Badge>
				</div>
			</CardHeader>
			<CardContent>
				<div className='flex justify-end items-center mb-4'>
					<div className='flex items-center  space-x-1'>
						{isDebit ?
							<ArrowDownToLine className='h-6 w-6 text-green-500' />
						:	<ArrowUpFromLine className='h-6 w-6 text-red-500' />}
						<span
							className={`text-2xl font-bold ${isDebit ? 'text-green-500' : 'text-red-500'}`}
						>
							₹{(Amount / 100).toLocaleString()}
						</span>
					</div>
				</div>
				<div className='space-y-2'>
					<div className='flex justify-between'>
						<div className='flex items-center space-x-2'>
							<Banknote className='h-4 w-4 text-muted-foreground' />
							<span className='text-sm text-muted-foreground'>Bank Name</span>
						</div>
						<span className='text-sm font-medium'>{Bank.Name}</span>
					</div>
					<div className='flex justify-between'>
						<div className='flex items-center space-x-2'>
							<Wallet2 className='h-4 w-4 text-muted-foreground' />
							<span className='text-sm text-muted-foreground'>
								Account Number
							</span>
						</div>
						<span className='text-sm font-medium'>{Bank.AccountNumber}</span>
					</div>
					<div className='flex justify-between'>
						<span className='text-sm text-muted-foreground'>
							Transaction Date
						</span>
						<span className='text-sm font-medium'>
							{formatDistanceToNow(timestamp)}
						</span>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
