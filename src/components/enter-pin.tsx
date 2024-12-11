'use client';
import { useState } from 'react';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { addBankPin, addWalletPin } from '@/action/add-pin';
import { handleToast } from './handle-toast';
import Link from 'next/link';

export const EnterPin = ({
	id,
	type,
}: {
	id: string;
	type: 'Wallet' | 'Bank';
}) => {
	const [pin, setpin] = useState('');
	const [showModal, setShowModal] = useState(false);

	const submit = async () => {
		if (Number(pin) > 99999) {
			if (type == 'Bank') {
				const response = await addBankPin(Number(pin), id);
				if (response.code == 1) {
					setShowModal(true);
				}
			}
			if(type=='Wallet'){
				const response = await addWalletPin(Number(pin), id);
				if (response.code == 1) {
					setShowModal(true);
				}
			}
		} else {
			handleToast({
				title: 'Cannot Update Pin',
				description: 'Pin must be of 6 digits',
				className: 'bg-red-600',
			});
		}
	};
	if (!showModal) {
		return (
			<div className='my-4 space-y-2'>
				<Label className='text-xl font-bold'>Enter Pin To Continue</Label>
				<div className='flex gap-2'>
					<Input
						placeholder='6-digit Integer'
						value={pin}
						onChange={(e) => {
							if (
								/^\d*$/.test(e.target.value) &&
								Number(e.target.value) < 1000000
							) {
								setpin(e.target.value);
							}
						}}
					/>
					{pin && <Button onClick={submit}>Submit</Button>}
				</div>
			</div>
		);
	} else {
		return (
			<div className='text-center py-4 font-bold text-lg'>
				Pin Updated Successfully!
				<div className='flex justify-center py-4'>
					{type == 'Bank' && (
						<Link
							href={'/bank-login'}
							className='bg-blue-500 px-3 py-2 text-sm font-semibold rounded-3xl'
						>
							Click to Dashboard
						</Link>
					)}
					{type == 'Wallet' && (
						<Link
							href={'/wallet-transfers'}
							className='bg-blue-500 px-3 py-2 text-sm font-semibold rounded-3xl'
						>
							Go to Wallet Transfer
						</Link>
					)}
				</div>
			</div>
		);
	}
};
