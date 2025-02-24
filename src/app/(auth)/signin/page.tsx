'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Mail, Eye } from 'lucide-react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { UserSchemaSignin, UserSchemaSigninType } from '@/zod/authentication';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FcGoogle } from 'react-icons/fc';
export default function Component() {
	const [error, setError] = useState('');
	const [visible, setVisible] = useState(false);
	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<UserSchemaSigninType>({
		mode: 'onChange',
		resolver: zodResolver(UserSchemaSignin),
	});
	const onSubmit = async (e: UserSchemaSigninType) => {
		const res = await signIn('credentials', {
			email: e.Email,
			password: e.Password,
			redirect: false,
		});
		if (res?.ok) {
			router.push('/dashboard');
		} else {
			setError('Invalid email or password. Please try again.');
		}
	};
	return (
		<div className='min-h-screen flex items-center justify-center mx-4 '>
			<div className='absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]'></div>
			<Card className='w-full max-w-md  text-white border-none shadow-2xl bg-white/5 backdrop-blur-sm'>
				<CardHeader className='space-y-1 text-center'>
					<h1
						onClick={() => {
							router.push('/');
						}}
						className='text-3xl cursor-pointer font-bold text-primary tracking-tight mb-2'
					>
						Money Mingle
					</h1>
					<p className='text-sm text-gray-400'>
						Don&apos;t have an account?{' '}
						<Link href='signup' className='text-primary hover:underline'>
							Create one.
						</Link>
					</p>
				</CardHeader>
				<CardContent className='space-y-4'>
					<Button
						className='w-full bg-[#222] hover:bg-[#333] text-white'
						variant='outline'
						onClick={() => {
							signIn('google', { callbackUrl: `/dashboard` });
						}}
					>
						<FcGoogle className='mr-2 h-4 w-4' />
						Sign in with Google
					</Button>
					<div className='relative'>
						<div className='absolute inset-0 flex items-center'>
							<span className='w-full border-t border-gray-700' />
						</div>
						<div className='relative flex justify-center text-xs uppercase'>
							<span className='bg-[#111] px-2 text-gray-400'>OR</span>
						</div>
					</div>
					<form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
						<div className='space-y-2'>
							<label
								htmlFor='email'
								className='text-lg font-bold leading-none peer-disabled:cursor-not-allowed text-primary peer-disabled:opacity-70'
							>
								Email
							</label>
							<div className='relative'>
								<Input
									{...register('Email', {
										required: true,
									})}
									id='email'
									placeholder='your.email@provider.com'
									className='bg-[#222] border-gray-700 text-white pl-10'
								/>
								<Mail className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5' />
							</div>
							{errors.Email && (
								<p className='text-sm text-red-600 text-left'>
									{errors.Email?.message}
								</p>
							)}
						</div>
						<div className='space-y-2'>
							<label
								htmlFor='password'
								className='text-lg text-primary  font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
							>
								Password
							</label>
							<div className='relative'>
								<Input
									{...register('Password', {
										required: true,
									})}
									id='password'
									type={visible ? 'text' : 'password'}
									placeholder='Enter Password'
									className='bg-[#222] border-gray-700 text-white pr-10'
								/>
								<Eye
									onClick={() => {
										setVisible((prev) => !prev);
									}}
									className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 cursor-pointer'
								/>
							</div>
							{errors.Password && (
								<p className='text-sm text-red-600 text-left'>
									{errors.Password?.message}
								</p>
							)}
							{error && (
								<div className='text-sm text-red-700 text-center py-4 font-semibold'>
									{error}
								</div>
							)}
						</div>
						<Button
							type='submit'
							className='w-full bg-primary font-bold text-lg hover:bg-blue-700 text-white'
						>
							Sign in
						</Button>
					</form>
					<div className='text-center'>
						<Link
							href='/forgot-password'
							className='text-sm text-primary-foreground hover:underline'
						>
							Forgot Your Password?
						</Link>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
