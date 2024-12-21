'use client';
import { addWalletPin } from '@/action/add-pin';
import { handleToast } from '@/components/handle-toast';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { userSelector } from '@/store/user';
import { UserType, UserWithWallet } from '@/types/type';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useRecoilValueLoadable } from 'recoil';

export default function Page() {
	const session = useSession();
	const user = useRecoilValueLoadable(userSelector);
	const [User, setUser] = useState<UserType>();
	useEffect(() => {
		if (user.state == 'hasValue' && user.contents) {
			setUser(user.contents);
		}
	}, [user.state]);
	const [pin, setPin] = useState(0);
	const [cpin, setcPin] = useState(0);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [error, setError] = useState('');
	const router = useRouter();
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (pin == cpin && User?.Wallet.id) {
			setIsSubmitting(true);
			const response = await addWalletPin(Number(pin), String(User.Wallet.id));
			if (response.code == 1) {
				setError(response.message);
				setIsSubmitting(false);
				handleToast({
					title: 'Pin Updated',
					description: 'Your Pin has been Updated!!!',
					className: 'bg-green-600 text-white font-bold',
				});
				router.push('/dashboard');
			} else {
				handleToast({
					title: 'Failed',
					description: response.message,
					className: 'bg-red-600 text-white font-bold',
				});
			}
		} else {
			setError('Pin is not Same');
		}
	};

	if (session.data?.user.id) {
		return (
			<div className='flex justify-center items-center min-h-screen'>
				<Card className=' min-w-96'>
					<CardHeader>
						<CardTitle>Change Pin</CardTitle>
					</CardHeader>
					<CardContent>
						<form
							onSubmit={handleSubmit}
							className='space-y-4   py-2 rounded-xl w-full'
						>
							<div className='space-y-2'>
								<Label htmlFor='newPin'>New PIN</Label>
								<Input
									id='newPin'
									type='password'
									inputMode='numeric'
									pattern='[0-9]*'
									maxLength={6}
									minLength={6}
									onChange={(e) => setPin(Number(e.target.value))}
									placeholder='Enter new PIN'
								/>
							</div>
							<div className='space-y-2'>
								<Label htmlFor='confirmPin'>Confirm PIN</Label>
								<Input
									id='confirmPin'
									type='password'
									inputMode='numeric'
									pattern='[0-9]*'
									maxLength={6}
									minLength={6}
									onChange={(e) => setcPin(Number(e.target.value))}
									placeholder='Confirm new PIN'
								/>
							</div>
							{error && <div className='text-base text-red-600'>{error}</div>}
							<Button type='submit' className='w-full' disabled={isSubmitting}>
								{isSubmitting ? 'Updating...' : 'Update PIN'}
							</Button>
						</form>
					</CardContent>
				</Card>
			</div>
		);
	}
}
