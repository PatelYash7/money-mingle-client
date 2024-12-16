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
			>
				Change Pin
			</Button>
			<Button
				onClick={async () => {
					router.push('/change-password');
				}}
			>
				Forgot Password
			</Button>
		</div>
	);
};
