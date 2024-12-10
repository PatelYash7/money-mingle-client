import { updateBankAccount } from '@/action/update-bank-account';
import { EnterPin } from '@/components/enter-pin';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default async function Page({ params }: { params: { token: string } }) {
	const result = await updateBankAccount({ token: params.token });
	if (result?.code == 1 && result.data) {
		return (
			<div className='h-screen flex justify-center items-center bg-primary'>
				<Card className='bg-primary-foreground'>
					<CardHeader>
						<CardTitle>Account Verification Done !</CardTitle>
					</CardHeader>
					<CardContent>
						Your Account has been verified!
						<div className='font-bold'>
							Account Number is{' '}
							<span className='text-blue-400'>
								{result.data?.AccountNumber}
							</span>
						</div>
						<EnterPin id={result.data.id} />
					</CardContent>
				</Card>
			</div>
		);
	}
	return (
		<div className='h-screen flex justify-center items-center bg-primary'>
			<Card className='bg-primary-foreground'>
				<CardHeader>
					<CardTitle>Account Verification</CardTitle>
				</CardHeader>
				<CardContent>
					Your Account has been verified!
					<div className='flex justify-center py-4'>
						<Link
							href={'/bank-dashboard'}
							className='bg-blue-500 px-2 py-1 rounded-3xl'
						>
							Login Now
						</Link>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
