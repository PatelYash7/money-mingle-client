'use client';
import { BankWalletTxn, WalletBankTxn } from '@/action/Bank-Wallet-txn';
import { handleToast } from '@/components/handle-toast';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader } from '@/components/ui/Loader';
import {
	Select,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { SelectContent } from '@radix-ui/react-select';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Page() {
	const [transfer, setTransfer] = useState<'BanktoWallet' | 'WallettoBank'>();
	const [bankAccount, setBankAccount] = useState('');
	const [bankPassword, setBankPassword] = useState('');
	const [amount, setAmount] = useState('');
	const [loading, setLoading] = useState(false);
	const handleSubmit = async (e: any) => {
		e.preventDefault();
		setLoading(true);
		if (transfer == 'BanktoWallet') {
			const response = await BankWalletTxn({
				amount: Number(amount),
				bankAccount: Number(bankAccount),
				bankPassword: bankPassword,
			});
			if (response.code == 1) {
				handleToast({
					title: 'Success',
					description: response.message,
					className: 'bg-green-600',
				});
				setLoading(false);
				router.push('/dashboard');
				window.location.reload();
			} else {
				setLoading(false);
				handleToast({
					title: 'Failed',
					description: response.message,
					className: 'bg-red-600',
				});
			}
		}
		if (transfer == 'WallettoBank') {
			const response = await WalletBankTxn({
				amount: Number(amount),
				bankAccount: Number(bankAccount),
				bankPassword: bankPassword,
			});
			if (response.code == 1) {
				handleToast({
					title: 'Success',
					description: response.message,
					className: 'bg-green-600',
				});
				setLoading(false);
				router.push('/dashboard');
				window.location.reload();
			} else {
				handleToast({
					title: 'Failed',
					description: response.message,
					className: 'bg-red-600',
				});
				setLoading(false);
			}
		}
	};
	const router = useRouter();
	return (
		<div className='py-4 sm:py-8 grid sm:grid-cols-5  w-full sm:max-w-7xl'>
			<Card className='col-span-3 border-primary border'>
				<CardHeader>
					<CardTitle className='text-primary'>
						Transfer Money with Bank
					</CardTitle>
					<CardContent className=' flex flex-col sm:flex sm:gap-0 gap-4  sm:flex-row justify-between items-center pb-0 pt-4 pl-0'>
						<div className='space-y-2 '>
							<div>If you dont have bank account?</div>
							<Button
								onClick={() => {
									router.push('/bank-account/create-account');
								}}
								className='text-white'
							>
								Create Bank Account
							</Button>
						</div>
						<div className='border p-3 rounded-3xl'>
							<h2>Test Account Credentials</h2>
							<div>Account Number : 11111111</div>
							<div>password: Test@12345</div>
						</div>
					</CardContent>
				</CardHeader>
				<CardContent>
					<form className='space-y-6 mt-4'>
						<div className='grid grid-cols-1 items-center sm:grid-cols-3 space-y-4'>
							<div className=' col-span-1 sm:col-span-2 space-y-4'>
								<div className='space-y-2 sm:w-1/2'>
									<Label className='text-lg'>Enter Your Bank Account</Label>
									<Input
										onChange={(e) => {
											setBankAccount(e.target.value);
										}}
										inputMode='numeric'
										pattern='[0-9]*'
										required
										maxLength={8}
										minLength={8}
										placeholder='Enter 8-digit account number'
									/>
								</div>
								<div className='space-y-2 sm:w-1/2'>
									<Label className='text-lg'>Enter Your Bank Password</Label>
									<Input
										required
										onChange={(e) => setBankPassword(e.target.value)}
										placeholder='password'
										type='password'
									/>
								</div>
							</div>
							<div className=' col-span-1 sm:col-span-1  space-y-2 '>
								<Label className='text-lg '>Enter Type of transfer</Label>
								<Select
									onValueChange={(value: 'BanktoWallet' | 'WallettoBank') => {
										setTransfer(value);
									}}
									required
									defaultValue={transfer}
								>
									<SelectTrigger className=''>
										<SelectValue placeholder='Transfer Type' />
									</SelectTrigger>
									<SelectContent className='dark:bg-background  bg-slate-50 border-primary border rounded-xl mx-0 pl-0 py-2 my-0'>
										<SelectGroup className='mx-0   top-0 w-[180px]'>
											<SelectItem
												className='text-center pl-2 flex justify-center '
												value='BanktoWallet'
											>
												Bank to Wallet
											</SelectItem>
											<SelectItem
												className='text-center pl-2 flex justify-center'
												value='WallettoBank'
											>
												Wallet to Bank
											</SelectItem>
										</SelectGroup>
									</SelectContent>
								</Select>

								<div className='space-y-2 '>
									<Label className='text-lg'>Enter Amount</Label>
									<Input
										onChange={(e) => setAmount(e.target.value)}
										placeholder='Amount'
										required
										pattern='[0-9]*'
										inputMode='numeric'
									/>
								</div>
							</div>
						</div>

						<div className='py-4'>
							{loading ?
								<Loader />
							:	<Button
									onClick={handleSubmit}
									type='submit'
									disabled={loading}
									className='px-4 font-bold text-lg text-white'
								>
									Submit
								</Button>
							}
						</div>
					</form>
				</CardContent>
			</Card>
			<div className='col-span-2'></div>
		</div>
	);
}
