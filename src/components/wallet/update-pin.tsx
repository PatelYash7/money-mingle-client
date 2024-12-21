'use client';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { addBankPin, addWalletPin } from '@/action/add-pin';
import { handleToast } from '../handle-toast';
import { Loader } from '../ui/Loader';

export const UpdatePin = ({ id }: { id: string }) => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [Pin, setPin] = useState(0);
	const [cPin, setcPin] = useState(0);
	const [error, setError] = useState('');

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (Pin && cPin) {
			setIsSubmitting(true);
			const response = await addWalletPin(Number(Pin), id);
			if (response.code == 1) {
				window.location.reload();
				setIsSubmitting(false);
				handleToast({
					title: 'Pin Updated',
					description: 'Your Pin has been Updated!!!',
					className: 'bg-green-600 text-white font-bold',
				});
			}
		} else {
			setError('Pin is not Same');
		}
	};
	return (
		<div className=' flex justify-center'>
			<form
				onSubmit={handleSubmit}
				className='space-y-4 border-2 px-8 py-6 rounded-xl w-full max-w-md'
			>
				<div className='text-center font-bold text-xl text-primary'>
					Update Pin
				</div>
				<div className='space-y-2'>
					<Label htmlFor='newPin'>New PIN</Label>
					<Input
						id='newPin'
						type='password'
						inputMode='numeric'
						pattern='[0-9]*'
						maxLength={6}
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
						onChange={(e) => setcPin(Number(e.target.value))}
						placeholder='Confirm new PIN'
					/>
				</div>
				{error && <div className='text-base text-red-600'>{error}</div>}
				{isSubmitting ?
					<div className=' flex justify-center'>
						<Loader />
					</div>
				:	<Button type='submit' className=' text-white w-full'>
						Update PIN
					</Button>
				}
			</form>
		</div>
	);
};
