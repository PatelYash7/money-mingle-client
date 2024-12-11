'use client';

import { useEffect, useState } from 'react';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog';
import { Skeleton } from '@/components/ui/skeleton';
import { Label } from '@/components/ui/label';
import { useDedounce } from '@/hooks/use-debounce';
import { User } from '@prisma/client';
import { searchUser } from '@/action/search-user';
import Image from 'next/image';
export function WalletTransfer() {
	const [balance, setBalance] = useState(1000); // Mock balance
	const [isOpen, setIsOpen] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const closeModal = () => {
		setIsModalOpen(false);
	};
	const [searchValue, setSearchValue] = useState('');
	const debouncedValue = useDedounce({ value: searchValue, timer: 1000 });
	const [userData, setUserData] = useState<User[]>();
	const [selectedUser, setSelectedUser] = useState<User>();
	useEffect(() => {
		const search = async () => {
			setIsOpen(true);
			const result = await searchUser({ value: debouncedValue });
			if (result.code == 1 && result.data?.length) {
				setUserData(result.data);
			}
		};
		if (debouncedValue) {
			search();
		} else {
			setIsOpen(false);
		}
	}, [debouncedValue]);
	return (
		<div className='w-full py-4'>
			<h1 className='text-4xl py-4 font-bold'>Wallet Transfer</h1>

			{selectedUser ?
				<div className='w-1/3 flex justify-start'>
					{<TransferForm User={selectedUser} setIsModalOpen={closeModal} />}
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
									onChange={(e) => setSearchValue(e.target.value)}
								/>
							</div>
							<div className={`${isOpen ? 'block' : 'hidden'} space-y-2`}>
								{userData?.length ?
									userData.map((item: User, key) => (
										<div
											key={key}
											className='flex justify-between border-2 px-2 py-2 items-center rounded-md'
										>
											<div className='flex items-center gap-4'>
												<div>
													{item.picture ?
														<Image
															src={item.picture}
															width={48}
															height={48}
															className='h-12 w-16 rounded-full'
															alt='Profile'
														/>
													:	<div></div>}
												</div>
												<div className='w-full space-y-4'>
													{/* <Skeleton className='w-48 h-4' /> */}
													<div className=' text-xl font-semibold w-48 h-4'>
														{item.Name}
													</div>
													<div className='text-sm'>{item.MobileNumber}</div>
												</div>
											</div>
											<div>
												<Button
													onClick={() => {
														setIsOpen(false);
														setIsModalOpen(true);
														setSelectedUser(item);
													}}
													className=' bg-green-500 rounded-2xl font-bold'
												>
													Pay Now
												</Button>
											</div>
										</div>
									))
								:	<>
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
									</>
								}
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
function TransferForm({
	setIsModalOpen,
	User,
}: {
	User: User;
	setIsModalOpen: () => void;
}) {
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
				<CardContent className='pt-4'>
					<div>
						Paying to{' '}
						<span className='underline font-bold text-lg'>{User.Name}</span>
					</div>
					<div className='font-bold'>9943576410</div>
				</CardContent>
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
