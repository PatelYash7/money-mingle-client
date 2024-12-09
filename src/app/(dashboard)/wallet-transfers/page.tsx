'use client';

import { useState } from 'react';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog';
import { Skeleton } from '@/components/ui/skeleton';
import Link from 'next/link';
import { Label } from '@/components/ui/label';
export default function Page() {
	const [selectedUser, setSelectedUser] = useState(null);
	const [balance, setBalance] = useState(1000); // Mock balance
	const [isOpen, setIsOpen] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const handleTransfer = (amount: number, note: string) => {
		// Mock transfer logic
		if (amount <= balance) {
			setBalance(balance - amount);
			// Here you would typically call an API to process the transfer
		} else {
			alert('Insufficient funds!');
		}
	};
	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<div className='w-full py-4'>
			<h1 className='text-4xl py-4 font-bold'>Wallet Transfer</h1>

			{isModalOpen ?
				<div className='w-1/3 flex justify-start'>
					{<TransferForm setIsModalOpen={closeModal} />}
				</div>
			:	<div className='grid grid-cols-3  space-x-4 '>
					<Card className='col-span-2'>
						<CardHeader>
							<CardTitle>Send Money </CardTitle>
						</CardHeader>
						<CardContent>
							<div className='flex space-x-2 mb-6'>
								<Input
									type='text'
									placeholder='Search by name or email'
									// value={searchTerm}
									onChange={(e) => setIsOpen(true)}
								/>
							</div>
							<div className={`${isOpen ? 'block' : 'hidden'} space-y-2`}>
								<div className='flex justify-between'>
									<div className='flex items-center gap-4'>
										<div>
											<Skeleton className='h-12 w-12 rounded-full' />
										</div>
										<div className='w-full space-y-2'>
											<Skeleton className='w-48 h-4' />
											<Skeleton className='w-20 h-2' />
										</div>
									</div>
									<div>
										<Button
											onClick={() => {
												setIsOpen(false);
												setIsModalOpen(true);
											}}
											className=' bg-green-500 rounded-2xl font-bold'
										>
											Pay Now
										</Button>
									</div>
								</div>
								<div className='flex justify-between'>
									<div className='flex items-center gap-4'>
										<div>
											<Skeleton className='h-12 w-12 rounded-full' />
										</div>
										<div className='w-full space-y-2'>
											<Skeleton className='w-48 h-4' />
											<Skeleton className='w-20 h-2' />
										</div>
									</div>
									<div>
										<Button
											onClick={() => {
												setIsOpen(false);
												setIsModalOpen(true);
											}}
											className='px-4 py-1 bg-green-500 rounded-2xl font-bold'
										>
											Pay Now
										</Button>
									</div>
								</div>
								<div className='flex justify-between'>
									<div className='flex items-center gap-4'>
										<div>
											<Skeleton className='h-12 w-12 rounded-full' />
										</div>
										<div className='w-full space-y-2'>
											<Skeleton className='w-48 h-4' />
											<Skeleton className='w-20 h-2' />
										</div>
									</div>
									<div>
										<Button
											onClick={() => {
												setIsOpen(false);
												setIsModalOpen(true);
											}}
											className='px-4 py-1 bg-green-500 rounded-2xl font-bold'
										>
											Pay Now
										</Button>
									</div>
								</div>
								<div className='flex justify-between'>
									<div className='flex items-center gap-4'>
										<div>
											<Skeleton className='h-12 w-12 rounded-full' />
										</div>
										<div className='w-full space-y-2'>
											<Skeleton className='w-48 h-4' />
											<Skeleton className='w-20 h-2' />
										</div>
									</div>
									<div>
										<Button
											onClick={() => {
												setIsOpen(false);
												setIsModalOpen(true);
											}}
											className='px-4 py-1 bg-green-500 rounded-2xl font-bold'
										>
											Pay Now
										</Button>
									</div>
								</div>
								<div className='flex justify-between'>
									<div className='flex items-center gap-4'>
										<div>
											<Skeleton className='h-12 w-12 rounded-full' />
										</div>
										<div className='w-full space-y-2'>
											<Skeleton className='w-48 h-4' />
											<Skeleton className='w-20 h-2' />
										</div>
									</div>
									<div>
										<Button
											onClick={() => {
												setIsOpen(false);
												setIsModalOpen(true);
											}}
											className='px-4 py-1 bg-green-500 rounded-2xl font-bold'
										>
											Pay Now
										</Button>
									</div>
								</div>
							</div>
						</CardContent>
					</Card>
					<Card className='h-fit col-span-1'>
						<CardContent className='py-4'>
							<div className='flex flex-col gap-2'>
								<div className='text-xl font-bold'>Total Balance</div>
								<div className='text-2xl'>$0.00</div>
							</div>
						</CardContent>
					</Card>
				</div>
			}
		</div>
	);
}
function TransferForm({ setIsModalOpen }: { setIsModalOpen: () => void }) {
	const [amount, setAmount] = useState('');
	const [note, setNote] = useState('');
	const [isConfirmOpen, setIsConfirmOpen] = useState(false);

	const handleSubmit = (e: any) => {
		e.preventDefault();
		setIsConfirmOpen(true);
	};

	return (
		<Card className=''>
			<CardHeader>
				<CardTitle>Transfer Details</CardTitle>
				<CardDescription className='pt-4'>
					<div>
						Paying to <span className='underline'>Tirath Bhavani</span>
					</div>
					<div>9943576410</div>
				</CardDescription>
			</CardHeader>
			<CardContent>
				<form onSubmit={handleSubmit} className='space-y-4'>
					<div>
						<Label
							htmlFor='amount'
							className='block text-sm font-medium text-gray-700'
						>
							Amount
						</Label>
						<Input id='amount' placeholder='Enter amount' required />
					</div>
					<div>
						<Label
							htmlFor='note'
							className='block text-sm font-medium text-gray-700'
						>
							Note (optional)
						</Label>
						<Input placeholder='Add a note' />
					</div>
					<div className='flex gap-2'>
						<Button type='submit'>Send Transfer</Button>
						<Button onClick={setIsModalOpen}>Cancel Transfer</Button>
					</div>
				</form>
				<Dialog open={isConfirmOpen} onOpenChange={setIsConfirmOpen}>
					<DialogContent>
						<DialogHeader className='space-y-4'>
							<DialogTitle>Enter Your Pin</DialogTitle>
							<Input placeholder='4-digit Pin' />
							{/* <DialogDescription>
								Are you sure you want to send ${amount}?
							</DialogDescription> */}
						</DialogHeader>
						<DialogFooter>
							<Button variant='outline' onClick={() => setIsConfirmOpen(false)}>
								Cancel
							</Button>
							<Button>Confirm</Button>
						</DialogFooter>
					</DialogContent>
				</Dialog>
			</CardContent>
		</Card>
	);
}
