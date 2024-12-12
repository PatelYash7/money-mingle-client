'use client';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { AlertCircle } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { handleToast } from '../handle-toast';
export const WalletVerification = () => {
	const session = useSession();
	const [close, setClose] = useState(false);
	const [loading, setLoading] = useState(false);
	const handleVerify = async () => {
		setLoading(true);
		const data = {
			id: session.data?.user.id,
			email: session.data?.user.email,
		};
		const response = await axios.post('/api/verify-wallet', data);
		if (response.data.code == 1) {
			handleToast({
				title: 'Verification Mail Sent to your Email',
				description: 'Please check your email and verify your Email',
				className: 'bg-green-600',
			});
			setClose(true);
			setLoading(false);
		} else {
			setLoading(false);
		}
	};
	console.log(close);
	return (
		<div>
			<Alert variant={'destructive'} className='max-w-md bg-white mx-auto'>
				<AlertCircle className='h-4 w-4' />
				<AlertTitle>Account Not Verified</AlertTitle>
				<AlertDescription className='mt-2 flex items-center justify-between'>
					<span>Your account is not verified.</span>
					<Button
						variant='outline'
						className='bg-red-600 text-white'
						size='sm'
						disabled={close}
						onClick={handleVerify}
					>
						{loading ? 'Loading....' : 'Verify Account'}
					</Button>
				</AlertDescription>
			</Alert>
		</div>
	);
};
