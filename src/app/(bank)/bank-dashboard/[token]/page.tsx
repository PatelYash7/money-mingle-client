import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getBankDetails } from '@/action/get-bank-details';
import Link from 'next/link';
export default async function Page({ params }: { params: { token: string } }) {
	const { code, message, data } = await getBankDetails({ token: params.token });
	if (data) {
		return (
			<div className='min-h-screen flex justify-center items-center'>
				<div className='fixed inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]'></div>
				<main className='sm:max-w-7xl mx-auto  py-6 sm:px-6 lg:px-8'>
					<div className='px-4 py-6 sm:px-0 w-full'>
						<Card className='bg-white/5 backdrop-blur-sm sm:w-[40rem] border-primary border-2 mx-auto'>
							<CardHeader>
								<CardTitle className='text-primary font-bold text-3xl'>
									Account Information
								</CardTitle>
								<CardDescription className='text-slate-200 text-lg'>
									Your personal and account details
								</CardDescription>
								<Link
									href={'/bank-account'}
									className='bg-primary px-4 py2 rounded-3xl w-24'
								>
									Go Back
								</Link>
							</CardHeader>
							<CardContent>
								<dl className='grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2'>
									<div className='sm:col-span-1'>
										<dt className='text-sm font-medium text-slate-200'>
											Name:
										</dt>
										<dd className='mt-1 text-lg font-bold text-primary'>
											{data.Name}
										</dd>
									</div>
									<div className='sm:col-span-1'>
										<dt className='text-sm font-medium text-slate-200'>
											Account Number
										</dt>
										<dd className='mt-1 text-lg font-bold text-primary'>
											{data.AccountNumber}
										</dd>
									</div>
									<div className='sm:col-span-1'>
										<dt className='text-sm font-medium text-slate-200'>
											Mobile Number:
										</dt>
										<dd className='mt-1 text-lg font-bold text-primary'>
											{data.MobileNumber}
										</dd>
									</div>
									<div className='sm:col-span-1'>
										<dt className='text-sm font-medium text-slate-200'>
											Email:
										</dt>
										<dd className='mt-1 text-lg font-bold text-primary'>
											{data.Email}
										</dd>
									</div>
									<div className='sm:col-span-1'>
										<dt className='text-sm font-medium text-slate-200'>
											Balance:
										</dt>
										<dd className='mt-1 text-lg font-bold text-primary'>
											₹ {(Number(data.Balance) / 100).toString()}
										</dd>
									</div>
									<div className='sm:col-span-1'>
										<dt className='text-sm font-medium text-slate-200'>
											Verification Status
										</dt>
										<dd className='mt-1 text-sm text-white'>
											<Badge
												className='text-white'
												variant={data.isVerified ? 'default' : 'destructive'}
											>
												{data.isVerified ? 'Verified' : 'Not Verified'}
											</Badge>
										</dd>
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
