'use client';
import { UpdatePassword } from '@/action/update-password';
import { handleToast } from '@/components/handle-toast';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { WalletPassword, WalletPasswordType } from '@/zod/authentication';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

export const ForgotPassword = ({ email }: { email: string }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<WalletPasswordType>({
		mode: 'onChange',
		resolver: zodResolver(WalletPassword),
	});
	const router = useRouter();
	const onSubmit = async (e: WalletPasswordType) => {
		const response = await UpdatePassword(e.Password, email);
		if (response.code == 1) {
			handleToast({
				title: 'Password Updated',
				description: response.message,
				className: 'bg-green-600 text-white',
			});
			router.push('/dashboard');
		} else {
			handleToast({
				title: 'Cannot Update Password',
				description: response.message,
				className: 'bg-red-600 text-white',
			});
		}
	};
	return (
		<div className='flex justify-center items-center min-h-screen relative px-4'>
			<div className='absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]'></div>
			<Card className=' min-w-96 backdrop-blur-sm bg-white/5'>
				<CardHeader>
					<CardTitle
						className=' cursor-pointer'
						onClick={() => {
							router.push('/dashboard');
						}}
					>
						Change Pin
					</CardTitle>
				</CardHeader>
				<CardContent>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className='space-y-4   py-2 rounded-xl w-full'
					>
						<div className='space-y-2'>
							<Label htmlFor='newPin'>New password</Label>
							<Input
								id='newPin'
								type='password'
								{...register('Password')}
								placeholder='Enter new password'
							/>
						</div>
						{errors.Password && (
							<div className='text-base text-red-600 w-44'>
								{errors.Password.message}
							</div>
						)}
						<div className='space-y-2'>
							<Label htmlFor='confirmPin'>Confirm Password</Label>
							<Input
								id='confirmPin'
								type='password'
								{...register('confirmPassword')}
								placeholder='Confirm new password'
							/>
							{errors.confirmPassword && (
								<div className='text-base text-red-600'>
									{errors.confirmPassword.message}
								</div>
							)}
						</div>
						<Button type='submit' className='w-full'>
							Change Password
						</Button>
					</form>
				</CardContent>
			</Card>
		</div>
	);
};
