'use client';

import { userSelector } from '@/store/user';
import { useRecoilValueLoadable } from 'recoil';
import { Skeleton } from '../ui/skeleton';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import Link from 'next/link';
import { ArrowDownFromLine, ArrowUpFromLine } from 'lucide-react';
import { useEffect, useState } from 'react';
import { UserType } from '@/types/type';

export const Hero = () => {
    const [loading,setLoading]=useState(false)
    const [User,setUser]=useState<UserType>()
    const user = useRecoilValueLoadable(userSelector);
    useEffect(()=>{
        if(user.state=='loading'){
            setLoading(true)
        }
        if(user.state=='hasValue' && user.contents){
            setLoading(false)
            setUser(user.contents)
        }
    },[user.state])
	if (loading) {
		return <Skeleton className='h-[200px] w-full rounded-xl' />;
	}
	if (User) {
		return (
			<Card className='w-full'>
				<CardHeader>
					<CardTitle className='text-2xl font-bold'>
						Hi,{User.Name}
					</CardTitle>
				</CardHeader>
				<CardContent>
					<div className='flex-col'>
						<div className='text-base text-gray-400'> Wallet Balance</div>
						<div className='text-4xl font-bold tracking-wider'>
							${String(Number(User.Wallet.Balance) / 100)}
						</div>
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
		);
	}
};
