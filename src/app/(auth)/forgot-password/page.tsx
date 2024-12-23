'use client';
import { FindUser } from '@/action/find-user';
import { handleToast } from '@/components/handle-toast';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-label';
import { useRouter } from 'next/navigation';
import { title } from 'process';
import { useState } from 'react';

export default function Page() {
	const router = useRouter();
	const [email, setEmail] = useState('');
	const handleSubmit = async () => {
		if (email) {
			const User = await FindUser(email);
			if (User?.iSGoogle) {
				handleToast({
					title: 'Password Updated',
					description: 'response.message',
					className: 'bg-green-600 text-white',
				});
				alert('Account Linked with Google');
				router.push(`/signin`);
			} else {
				if (User) {
					router.push(`/forgot-password/${User.id}`);
				} else {
					handleToast({
						title: 'Please Try Again',
						description: 'Error Finding Your Account.Enter Correct Email',
						className: 'bg-red-500',
					});
				}
			}
		}
	};
	return (
		<div className=' relative flex justify-center items-center min-h-screen px-4'>
			<div className='fixed top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]'></div>
			<Card className=' min-w-96 backdrop-blur-sm bg-white/5'>
				<CardHeader>
					<CardTitle
						className=' cursor-pointer'
						onClick={() => {
							router.push('/dashboard');
						}}
					>
						Enter Your Email
					</CardTitle>
				</CardHeader>
				<CardContent className='space-y-4'>
					<div className='space-y-2'>
						<Label htmlFor='email'>Enter Your Email</Label>
						<Input
							onChange={(e) => {
								setEmail(e.target.value);
							}}
							id='email'
							type='email'
							placeholder='john@gmail.com'
						/>
					</div>

					<Button type='submit' onClick={handleSubmit} className='w-full'>
						Submit
					</Button>
				</CardContent>
			</Card>
		</div>
	);
}
