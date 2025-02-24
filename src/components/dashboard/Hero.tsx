'use client';

import { userNumber, userSelector } from '@/store/user';
import { useRecoilState, useRecoilValueLoadable } from 'recoil';
import { Skeleton } from '../ui/skeleton';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import Link from 'next/link';
import { ArrowDownFromLine, ArrowUpFromLine } from 'lucide-react';
import { useEffect, useState } from 'react';
import { UserType } from '@/types/type';
import { useRouter } from 'next/navigation';

export const Hero = () => {
	const [loading, setLoading] = useState(false);
	const [User, setUser] = useState<UserType>();
	const user = useRecoilValueLoadable(userSelector);
	const router = useRouter();
	const [usernumber, setuserNumber] = useRecoilState(userNumber);

	useEffect(() => {
		if (user.state == 'loading') {
			setLoading(true);
		}
		if (user.state == 'hasValue' && user.contents) {
			setLoading(false);
			setuserNumber(user.contents.MobileNumber);
			setUser(user.contents);
			if (!usernumber && !user.contents.MobileNumber) {
				router.push('/add-number');
			}
		}
	}, [user.state]);
	if (loading) {
		return <Skeleton className='h-[200px] w-full rounded-xl' />;
	}
	if (User) {
		return (
			<Card className='w-full'>
				<CardHeader>
					<CardTitle className='text-2xl text-primary font-bold'>
						Hi,{User.Name}
					</CardTitle>
				</CardHeader>
				<CardContent>
					{User.Wallet ?
						<>
							<div className='flex-col'>
								<div className='text-base text-gray-400'> Wallet Balance</div>
								<div className='text-4xl font-bold tracking-wider'>
									₹{String(Number(User.Wallet.Balance) / 100)}
								</div>
							</div>
							{!User.Wallet.pin && (
								<div>
									<div className='text-base text-gray-400 py-4'>
										{' '}
										(Please Update Pin)
									</div>
								</div>
							)}
							<div className=' flex gap-4 w-full items-center justify-center py-4'>
								<Link
									href={'/wallet-transfers'}
									className='bg-red-600 flex gap-2 justify-center items-center font-bold px-4 py-2 rounded-2xl text-center'
								>
									<ArrowUpFromLine className='sm:block hidden' /> Send Money
								</Link>
								<Link
									href={'/bank-transfers'}
									className='bg-green-600 flex font-bold px-4 py-2 rounded-2xl justify-center items-center text-center'
								>
									<ArrowDownFromLine className='sm:block hidden' /> Add Money
								</Link>
							</div>
						</>
					:	<div className='flex gap-2'>
							<div className='py-4 font-bold text-lg'>
								To get Started Please verify your account
							</div>
							<Link
								href={'/wallet-transfers'}
								className='py-4 underline font-bold text-lg'
							>
								Verify
							</Link>
						</div>
					}
				</CardContent>
			</Card>
		);
	}
};
