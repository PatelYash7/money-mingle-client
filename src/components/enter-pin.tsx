'use client';

import { useState } from 'react';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { addPin } from '@/action/add-pin';

export const EnterPin = ({ id }: { id: string }) => {
	const [pin, setpin] = useState('');

	const submit = async () => {
		const response = await addPin(Number(pin), id);
	};

	return (
		<div className='my-4 space-y-2'>
			<Label className='text-xl font-bold'>Enter Pin To Continue</Label>
			<div className='flex gap-2'>
				<Input
					placeholder='4-digit Integer'
					onChange={(e) => {
						setpin(e.target.value);
					}}
				/>
				{pin && <Button>Submit</Button>}
			</div>
		</div>
	);
};
