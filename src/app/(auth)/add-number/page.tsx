'use client';
import { addNumber } from '@/action/add-number';
import { handleToast } from '@/components/handle-toast';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Page() {
	const router = useRouter();
	const session = useSession();
	const [mobile, setMobileNumber] = useState('');
	const handleSubmit = async () => {
		if (session.data?.user.id) {
			const response = await addNumber({
				id: session.data?.user.id,
				MobileNumber: mobile,
			});
			if (response) {
				router.push('/');
				handleToast({
					title: 'Success',
					description: response.message,
					className: 'bg-green-700',
				});
			}
		}
	};
	return (
		<div className='min-h-screen flex items-center justify-center bg-black bg-[linear-gradient(rgba(0,0,0,.5)_2px,transparent_2px),linear-gradient(90deg,rgba(0,0,0,.5)_2px,transparent_2px)] bg-[size:50px_50px]'>
			<Card className='w-full max-w-md bg-[#111] text-white border-none shadow-2xl'>
				<CardHeader className='space-y-1 text-center'>
					<h1
						onClick={() => {
							router.push('/');
						}}
						className='text-3xl cursor-pointer font-bold tracking-tight mb-2'
					>
						Moeny Mingle
					</h1>
					<p className='text-sm text-gray-400'>
						Mobile Number is required for Wallet Transfer.
						<br /> Please Add Mobile Number
					</p>
				</CardHeader>
				<CardContent className='space-y-4'>
					<div className='space-y-4'>
						<div className='space-y-2'>
							<label
								htmlFor='number'
								className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
							>
								Mobile Number
							</label>
							<div className='relative'>
								<Input
									onChange={(e) => {
										setMobileNumber(e.target.value);
									}}
									id='email'
									placeholder='+91 940XXXXXX0 '
									className='bg-[#222] border-gray-700 text-white'
								/>{' '}
							</div>
						</div>
						<Button
							type='submit'
							onClick={handleSubmit}
							className='w-full bg-blue-600 hover:bg-blue-700 text-white'
						>
							Add Number
						</Button>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
