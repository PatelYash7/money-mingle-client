'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { bankTokenAtom } from '@/store/bankToken';

export default function CreateAccountPage() {
	const [isLoading, setIsLoading] = useState(false);
	const [mobileNumber, setMobileNumber] = useState('');
	const [password, setPassword] = useState('');
	const router = useRouter();
	const setBankToken = useSetRecoilState(bankTokenAtom);
	const handleSubmit = async (e: any) => {
		e.preventDefault();
		setIsLoading(true);
		const response = await axios.post<{
			code: number;
			message: string;
			token: string | null;
		}>('/api/handle-bank-login', {
			mobileNumber: mobileNumber,
			password: password,
		});
		if (response.data.token) {
			setIsLoading(false);
			setBankToken(response.data.token);
			router.push(`/bank-dashboard/${response.data.token}`);
		}
	};
	return (
		<div className='flex justify-center items-center h-screen'>
			<div className='container mx-auto max-w-lg py-10 border-2 rounded-lg'>
				<h1 className='text-3xl font-bold mb-6'>Create Bank Account</h1>
				<form onSubmit={handleSubmit} className='space-y-6'>
					<div className='space-y-2'>
						<Label htmlFor='mobileNumber'>Mobile Number</Label>
						<Input
							onChange={(e) => {
								setMobileNumber(e.target.value);
							}}
							id='mobileNumber'
							placeholder='Enter your mobile number'
						/>
					</div>

					<div className='space-y-2'>
						<Label htmlFor='password'>Password</Label>
						<Input
							onChange={(e) => {
								setPassword(e.target.value);
							}}
							id='password'
							type='password'
							required
							placeholder='Enter your password'
						/>
					</div>

					<div className='flex justify-center'>
						<Button type='submit' disabled={isLoading}>
							{isLoading ? 'Logging In' : 'Login'}
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
}
