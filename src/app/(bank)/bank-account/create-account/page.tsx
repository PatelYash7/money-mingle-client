'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';
import { BankDetailsSchema, BankDetailsSchemaType } from '@/zod/authentication';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';

export default function CreateAccountPage() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<BankDetailsSchemaType>({
		mode: 'onChange',
		resolver: zodResolver(BankDetailsSchema),
	});
	const [isLoading, setIsLoading] = useState(false);
	const onSubmit = async (e: BankDetailsSchemaType) => {
		setIsLoading(true);
		const response = await axios.post('/api/create-bankAccount', e);
		if (response.data.code == 1) {
			setIsLoading(false);
			alert(response.data.message);
		}
	};
	return (
		<div className='flex justify-center items-center h-screen'>
			<div className='container mx-auto max-w-lg py-10 border-2 rounded-lg'>
				<h1 className='text-3xl font-bold mb-6'>Create Bank Account</h1>
				<form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
					<div className='space-y-2'>
						<Label htmlFor='mobileNumber'>Mobile Number</Label>
						<Input
							{...register('MobileNumber')}
							id='mobileNumber'
							placeholder='Enter your 10-digit mobile number (+91)'
						/>
						{errors.MobileNumber?.message && (
							<p className='text-xs text-red-700'>
								{errors.MobileNumber.message}
							</p>
						)}
					</div>
					<div className='space-y-2'>
						<Label htmlFor=' Name'>Name</Label>
						<Input
							{...register('Name')}
							id='name'
							placeholder='Enter your full name'
						/>
						{errors.Name?.message && (
							<p className='text-xs text-red-700'>{errors.Name.message}</p>
						)}
					</div>
					<div className='space-y-2'>
						<Label htmlFor='email'>Email</Label>
						<Input
							id='email'
							{...register('Email')}
							type='email'
							placeholder='Enter your email address'
						/>
						{errors.Email?.message && (
							<p className='text-xs text-red-700'>{errors.Email.message}</p>
						)}
					</div>
					<div className='space-y-2'>
						<Label htmlFor='password'>Password</Label>
						<Input
							{...register('Password')}
							id='password'
							type='password'
							required
							placeholder='Enter a Strong Password'
						/>
						{errors.Password?.message && (
							<p className='text-xs text-red-700'>{errors.Password.message}</p>
						)}
					</div>
					<div className='space-y-2'>
						<Label htmlFor='Confirmpassword'>Password</Label>
						<Input
							{...register('confirmPassword')}
							id='Confirmpassword'
							type='password'
							required
							placeholder='Confirm Password'
						/>
						{errors.confirmPassword?.message && (
							<p className='text-xs text-red-700'>
								{errors.confirmPassword.message}
							</p>
						)}
					</div>
					<Button type='submit' disabled={isLoading}>
						{isLoading ? 'Creating Account...' : 'Create Account'}
					</Button>
				</form>
			</div>
		</div>
	);
}
