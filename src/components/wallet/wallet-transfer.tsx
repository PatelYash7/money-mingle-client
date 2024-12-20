'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Label } from '@/components/ui/label';
import { useDedounce } from '@/hooks/use-debounce';
import { User } from '@prisma/client';
import { searchUser } from '@/action/search-user';
import Image from 'next/image';
import { UserWithWallet } from '@/types/type';
import { p2pTransfer } from '@/action/p2pTransfer';
import { handleToast } from '../handle-toast';
import { useRouter } from 'next/navigation';
import { SearchCard } from '../SearchCard';
import { useRecoilValue } from 'recoil';
import { PaymentUser } from '@/store/PaymentUser';
export function WalletTransfer({ User }: { User: UserWithWallet }) {
	const [isOpen, setIsOpen] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [error, setError] = useState('');
	const [searchValue, setSearchValue] = useState('');
	const [userData, setUserData] = useState<User[]>();
	const PaymentUserValue = useRecoilValue(PaymentUser);
	const [selectedUser, setSelectedUser] = useState<User>();
	const debouncedValue = useDedounce({ value: searchValue, timer: 1000 });
	useEffect(() => {
		if (PaymentUser) {
			setIsOpen(false);
			setIsModalOpen(true);
			setSelectedUser(PaymentUserValue);
		}
		const search = async () => {
			const result = await searchUser({ value: debouncedValue });
			if (result.code == 1 && result.data?.length) {
				setUserData(result.data);
				setError('');
			} else {
				setUserData(undefined);
				setError('Error finding verified users with this value');
			}
		};
		if (debouncedValue) {
			search();
		} else {
			setIsOpen(false);
		}
		// @ts-ignore
	}, [searchValue]);
	return (
		<div className='w-full py-4'>
			<h1 className='text-4xl py-4 font-bold text-primary'>Wallet Transfer</h1>

			{selectedUser ?
				<div className='w-1/3 flex justify-start'>
					{
						<TransferForm
							User={selectedUser}
							SetUser={() => {
								setSelectedUser(undefined);
							}}
						/>
					}
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
									onChange={(e) => {
										setError('');
										setSearchValue(e.target.value);
										setIsOpen(true);
									}}
								/>
							</div>

							<div className={`${isOpen ? 'block' : 'hidden'} space-y-2`}>
								{userData?.length ?
									userData.map((item: User, key) => (
										<SearchCard
											item={item}
											handlePayNow={() => {
												setIsOpen(false);
												setIsModalOpen(true);
												setSelectedUser(item);
											}}
											key={key}
										/>
									))
								: error ?
									<div className='text-center'>{error}</div>
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
								<div className='text-xl font-bold'>Wallet Balance</div>
								<div className='text-2xl'>
									${Number(User.Wallet?.Balance) / 100}
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			}
		</div>
	);
}
function TransferForm({ User, SetUser }: { SetUser: () => void; User: User }) {
	const [amount, setAmount] = useState('');
	const [note, setNote] = useState('');
	const [pin, setPin] = useState('');
	const [loading, setLoading] = useState(false);
	const router = useRouter();
	const handleSubmit = async (e: any) => {
		e.preventDefault();
		setLoading(true);
		const response = await p2pTransfer({
			receiverId: User.id,
			amount: Number(amount),
			note: note,
			Pin: pin,
		});
		if (response.code == 1) {
			handleToast({
				title: 'Success',
				description: response.message,
				className: 'bg-green-600',
			});
			setLoading(false);
			router.push('/dashboard');
		} else {
			handleToast({
				title: 'Failed',
				description: response.message,
				className: 'bg-red-600',
			});
			setLoading(false);
			SetUser();
		}
	};
	return (
		<Card className=''>
			<CardHeader className=' pb-0'>
				<CardContent className='pt-4 pb-0 flex justify-center flex-col items-center'>
					{User.picture ?
						<Image
							src={User.picture}
							alt='img'
							height={56}
							width={56}
							className='rounded-full justify-center flex items-center'
						/>
					:	<div className='bg-blue-600 px-6 py-4 rounded-full font-bold  text-3xl'>
							{User.Name.charAt(0)}
						</div>
					}
					<div className='pt-4 px-2 text-center'>
						<span className='font-bold text-2xl tracking-wider'>
							{User.Name}
						</span>
						<div className='font-bold py-2 tracking-wide'>
							{User.MobileNumber}
						</div>
					</div>
				</CardContent>
			</CardHeader>
			<CardContent className=''>
				<form onSubmit={handleSubmit} className='space-y-4'>
					<div className='space-y-2'>
						<Label
							htmlFor='amount'
							className='block text-sm font-medium text-white'
						>
							Amount
						</Label>
						<Input
							id='amount'
							inputMode='numeric'
							pattern='[0-9]*'
							placeholder='Enter amount'
							required
							onChange={(e) => setAmount(e.target.value)}
						/>
					</div>
					<div className='space-y-2'>
						<Label
							htmlFor='note'
							className='block text-sm font-medium text-white'
						>
							Note (optional)
						</Label>
						<Input
							required
							placeholder='Add a note'
							onChange={(e) => setNote(e.target.value)}
						/>
					</div>
					<div className='space-y-2'>
						<Label
							htmlFor='note'
							className='block text-sm font-medium text-white'
						>
							PIN
						</Label>
						<Input
							placeholder='6-digit Pin'
							minLength={6}
							maxLength={6}
							inputMode='text'
							pattern='[0-9]*'
							required
							onChange={(e) => {
								setPin(e.target.value);
							}}
						/>
					</div>
					<div className='flex gap-2'>
						<Button
							type='submit'
							disabled={loading}
							className='px-8 font-bold text-white'
						>
							PAY
						</Button>
						<Button
							type='button'
							disabled={loading}
							className='font-bold text-white'
							onClick={SetUser}
						>
							Cancel Transfer
						</Button>
					</div>
				</form>
			</CardContent>
		</Card>
	);
}
