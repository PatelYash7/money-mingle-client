'use client';

import { Button } from './ui/button';

export const ProfileFooter = () => {
	return (
		<div className='grid grid-cols-2 gap-2'>
			<Button>Change Pin</Button>
			<Button onClick={() => {}}>Forgot Password</Button>
		</div>
	);
};
