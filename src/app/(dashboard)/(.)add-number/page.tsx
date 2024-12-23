'use client';
import { addNumber } from '@/action/add-number';
import { handleToast } from '@/components/handle-toast';
import { Modal } from '@/components/modal';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Loader } from '@/components/ui/Loader';
import { userNumber } from '@/store/user';
import { IconCancel } from '@tabler/icons-react';
import { Cross } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

export default function Page() {
	const router = useRouter();
	const session = useSession();
	const [mobile, setMobileNumber] = useState('');
	const [UserNumber, setUserNumber] = useRecoilState(userNumber);
	const [loading, setLoading] = useState(false);
	const handleSubmit = async () => {
		if (session.data?.user.id) {
			setLoading(true);
			const response = await addNumber({
				id: session.data?.user.id,
				MobileNumber: mobile,
			});
			if (response) {
				setLoading(false);
				router.push('/dashboard');
				setUserNumber(mobile);
			}
		}
	};
	return (
		<Modal>
			<Card className='w-full max-w-md  text-white '>
				<CardHeader className='space-y-1 text-center relative'>
					<h1
						onClick={() => {
							router.push('/');
						}}
						className='text-3xl cursor-pointer font-bold tracking-tight mb-2'
					>
						Money Mingle
					</h1>
					<p className='text-sm text-gray-400'>
						Mobile Number is required for Wallet Transfer.
						<br /> Please Add Mobile Number
					</p>
				</CardHeader>
				<CardContent className='space-y-4'>
					<div className='space-y-4'>
						{UserNumber ?
							<div className='text-green-500 text-center text-base'>
								Mobile Number Added
							</div>
						:	null}
						<div className={`space-y-2 ${UserNumber ? 'hidden' : 'block'}`}>
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
						{loading ?
							<div className='flex justify-center items-center'>
								<Loader />{' '}
							</div>
						:	<Button
								type='submit'
								onClick={handleSubmit}
								className='w-full bg-blue-600 hover:bg-blue-700 text-white'
							>
								Add Number
							</Button>
						}
					</div>
				</CardContent>
			</Card>
		</Modal>
	);
}
