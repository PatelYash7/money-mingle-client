'use client';

import { useRouter } from 'next/navigation';
import { Button } from './ui/button';

export const ProfileFooter = () => {
	const router = useRouter();
	return (
		<div className='grid grid-cols-2 gap-2'>
			<Button
				onClick={() => {
					router.push('/change-pin');
				}}
				className='text-white'
			>
				Change Pin
			</Button>
			<Button
				className='text-white'
				onClick={async () => {
					router.push('/change-password');
				}}
			>
				Forgot Password
			</Button>
		</div>
	);
};
