'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';
import { BankDetailsSchema, BankDetailsSchemaType } from '@/zod/authentication';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { handleToast } from '@/components/handle-toast';
import { Loader } from '@/components/ui/Loader';

export default function CreateAccountPage() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<BankDetailsSchemaType>({
		mode: 'onChange',
		resolver: zodResolver(BankDetailsSchema),
	});
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();
	const onSubmit = async (e: BankDetailsSchemaType) => {
		setIsLoading(true);
		const response = await axios.post('/api/create-bankAccount', e);
		if (response.data.code == 1) {
			setIsLoading(false);
			handleToast({
				title: 'Account Created',
				description: 'Please Verify your Account by Email',
				className: 'bg-green-600',
			});
			router.push('/bank-account');
		} else {
			setIsLoading(false);
			handleToast({
				title: 'Please try Again Later',
				description: 'Cannot Create Bank Account',
				className: 'bg-red-600',
			});
		}
	};
	return (
		<div className='flex justify-center items-center min-h-screen py-8'>
			<div className='absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]'></div>
			<div className='container mx-auto max-w-2xl py-10 border-2 rounded-lg bg-white/5 backdrop-blur-sm'>
				<h1 className='text-3xl font-bold text-center'>Create Bank Account</h1>
				<div className='flex justify-center items-center flex-col pb-4 '>
					<div
						className='text-lg mb-3 pt-4 text-primary font-bold cursor-pointer'
						onClick={() => {
							router.push('/bank-account');
						}}
					>
						Money Mingle Payments Bank
					</div>
					<div
						onClick={() => {
							router.push('/bank-login');
						}}
						className='text-center text-sm cursor-pointer'
					>
						If your Already have an Account,{' '}
						<span className='underline'> Login</span>
					</div>
				</div>
				<form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
					<div className='grid grid-cols-2 gap-4'>
						<div className='space-y-2 col-span-1'>
							<Label
								htmlFor='mobileNumber'
								className='text-primary font-bold text-lg'
							>
								Mobile Number
							</Label>
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
						<div className='space-y-2 col-span-1'>
							<Label htmlFor=' Name' className='text-primary font-bold text-lg'>
								Name
							</Label>
							<Input
								{...register('Name')}
								id='name'
								placeholder='Enter your full name'
							/>
							{errors.Name?.message && (
								<p className='text-xs text-red-700'>{errors.Name.message}</p>
							)}
						</div>
					</div>
					<div className='space-y-2'>
						<Label htmlFor='email' className='text-primary font-bold text-lg '>
							Email
						</Label>
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
						<Label
							htmlFor='password'
							className='text-primary font-bold text-lg'
						>
							Password
						</Label>
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
						<Label
							htmlFor='Confirmpassword'
							className='text-primary font-bold text-lg'
						>
							Confirm Password
						</Label>
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
					{isLoading ?
						<div className=' flex justify-center'>
							<Loader />
						</div>
					:	<Button type='submit' className='text-white'>
							Create Account
						</Button>
					}
				</form>
			</div>
		</div>
	);
}
