import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { getBankDetails } from '@/action/get-bank-details';
export default async function Page({ params }: { params: { token: string } }) {
	const { code, message, data } = await getBankDetails({ token: params.token });
	if (data) {
		return (
			<div className='min-h-screen bg-primary-foreground'>
				<main className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
					<div className='px-4 py-6 sm:px-0'>
						<Card className='max-w-3xl bg-slate-200 mx-auto'>
							<CardHeader>
								<CardTitle className='text-black font-bold text-3xl'>
									Account Information
								</CardTitle>
								<CardDescription className='text-gray-800 text-lg'>
									Your personal and account details
								</CardDescription>
							</CardHeader>
							<CardContent>
								<dl className='grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2'>
									<div className='sm:col-span-1'>
										<dt className='text-sm font-medium text-gray-500'>Name</dt>
										<dd className='mt-1 text-sm text-gray-900'>{data.Name}</dd>
									</div>
									<div className='sm:col-span-1'>
										<dt className='text-sm font-medium text-gray-500'>
											Account Number
										</dt>
										<dd className='mt-1 text-sm text-gray-900'>
											{data.AccountNumber}
										</dd>
									</div>
									<div className='sm:col-span-1'>
										<dt className='text-sm font-medium text-gray-500'>
											Mobile Number
										</dt>
										<dd className='mt-1 text-sm text-gray-900'>
											{data.MobileNumber}
										</dd>
									</div>
									<div className='sm:col-span-1'>
										<dt className='text-sm font-medium text-gray-500'>Email</dt>
										<dd className='mt-1 text-sm text-gray-900'>{data.Email}</dd>
									</div>
									<div className='sm:col-span-1'>
										<dt className='text-sm font-medium text-gray-500'>
											Balance
										</dt>
										<dd className='mt-1 text-sm text-gray-900'>
											₹ {(Number(data.Balance) / 100).toString()}
										</dd>
									</div>
									<div className='sm:col-span-1'>
										<dt className='text-sm font-medium text-gray-500'>
											Verification Status
										</dt>
										<dd className='mt-1 text-sm text-gray-900'>
											<Badge
												variant={data.isVerified ? 'default' : 'destructive'}
											>
												{data.isVerified ? 'Verified' : 'Not Verified'}
											</Badge>
										</dd>
									</div>
									<div className='sm:col-span-2'>
										<dt className='text-sm font-medium text-gray-500'>
											User ID
										</dt>
										<dd className='mt-1 text-sm text-gray-900'>{data.id}</dd>
									</div>
								</dl>
							</CardContent>
						</Card>
					</div>
				</main>
			</div>
		);
	}
	return (
		<div className='flex min-h-screen justify-center items-center text-2xl font-bold'>
			Cannot Find Account Associated with this token.
		</div>
	);
}
