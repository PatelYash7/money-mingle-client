'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
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
	const [transfer, setTransfer] = useState('');
	const router = useRouter();
	return (
		<div className='grid grid-cols-5 justify-between space-x-6 max-w-7xl'>
			<div className=' col-span-3'>
				<Card>
					<CardHeader >
						<CardTitle>Transfer Money with Bank</CardTitle>
						<CardContent className=' space-y-2 pb-0 pt-4 pl-0'>
							<div>If you dont have bank account?</div>
							<Button onClick={()=>{router.push('/bank-account')}}>Create Bank Account</Button>
						</CardContent>
					</CardHeader>
					<CardContent>
						<div className='space-y-6 mt-4'>
							<div className='grid grid-cols-3 '>
								<div className=' col-span-2'>
									<div className='space-y-2 w-1/2'>
										<Label className='text-lg'>Enter Your Bank Account</Label>
										<Input placeholder='Enter 8-digit account number' />
									</div>
									<div className='space-y-2 w-1/2'>
										<Label className='text-lg'>Enter Your Bank Pin</Label>
										<Input placeholder='Enter Bank Pin' />
									</div>
								</div>

								<div className=' col-span-1 space-y-2 '>
									<Label className='text-lg '>Enter Type of transfer</Label>
									<Select
										onValueChange={(value) => {
											setTransfer(value);
										}}
										defaultValue={transfer}
									>
										<SelectTrigger className='w-[180px]'>
											<SelectValue placeholder='Transfer Type' />
										</SelectTrigger>
										<SelectContent className='bg-slate-900 rounded-xl mx-0 pl-0 py-2 my-0'>
											<SelectGroup className='mx-0   top-0 w-[180px]'>
												<SelectItem
													className='text-center pl-2 flex justify-center '
													value='Bank to Wallet'
												>
													Bank to Wallet
												</SelectItem>
												<SelectItem
													className='text-center pl-2 flex justify-center'
													value='Wallet to Bank'
												>
													Wallet to Bank
												</SelectItem>
											</SelectGroup>
										</SelectContent>
									</Select>
								</div>
							</div>

							<div className='py-4'>
								<Button className='px-4 font-bold text-lg text-white'>
									Submit
								</Button>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
			<div className='col-span-2'>
				<Card>
					<CardTitle>Hello 2</CardTitle>
				</Card>
			</div>
		</div>
	);
}
