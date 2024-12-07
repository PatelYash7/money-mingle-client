'use client';
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { userAtom } from '@/store/user';
import { ArrowDownFromLine, ArrowUp, ArrowUpFromLine } from 'lucide-react';
import Link from 'next/link';
import { useRecoilValueLoadable } from 'recoil';

export default function Page() {
	const user = useRecoilValueLoadable(userAtom);
	return (
		<div className='py-4 w-full '>
			<div className=' grid grid-cols-5 space-x-8 '>
				<div className=' col-span-3 w-full flex flex-col gap-4'>
					{user.state == 'hasValue' ?
						<Card className='w-full'>
							<CardHeader>
								<CardTitle className='text-2xl font-bold'>
									Hi,{user.contents.Name}
								</CardTitle>
							</CardHeader>
							<CardContent>
								<div className='flex-col'>
									<div className='text-base text-gray-400'> Wallet Balance</div>
									<div className='text-4xl font-bold tracking-wider'>$0.00</div>
								</div>
								<div className=' flex gap-4 w-full items-center justify-center'>
									<Link
										href={'/wallet-transfers'}
										className='bg-red-600 flex gap-2 font-bold px-4 py-2 rounded-2xl text-center'
									>
										<ArrowUpFromLine /> Send Money
									</Link>
									<Link
										href={'/bank-transfers'}
										className='bg-green-600 flex font-bold px-4 py-2 rounded-2xl text-center'
									>
										<ArrowDownFromLine /> Add Money
									</Link>
								</div>
							</CardContent>
						</Card>
					:	<Skeleton className='h-[200px] w-[600px] rounded-xl' />}

					<Card>
						<CardHeader>
							<CardTitle className='underline text-2xl'>Pay Again</CardTitle>
						</CardHeader>
						<CardContent className='space-y-4'>
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
                                    <Link href={'/wallet-transfer'} className='px-4 py-2 bg-green-500 rounded-2xl font-bold'>Pay Now</Link>
                                </div>
							</div>
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
                                    <Link href={'/wallet-transfer'} className='px-4 py-2 bg-green-500 rounded-2xl font-bold'>Pay Now</Link>
                                </div>
							</div>
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
                                    <Link href={'/wallet-transfer'} className='px-4 py-2 bg-green-500 rounded-2xl font-bold'>Pay Now</Link>
                                </div>
							</div>
						</CardContent>
					</Card>
				</div>
				<div className='col-span-2'>
					<Card className='  '>
						<CardHeader>
							<CardTitle className='underline'>Recent Transaction</CardTitle>
						</CardHeader>
						<CardContent className='space-y-2'>
							<Skeleton className='h-14 w-full' />
							<Skeleton className='h-14 w-full' />
							<Skeleton className='h-14 w-full' />
							<Skeleton className='h-14 w-full' />
							<Skeleton className='h-14 w-full' />
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}
