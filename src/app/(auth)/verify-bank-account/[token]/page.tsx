import { VerifyBankAccount } from '@/action/verify-bank-account';
import { EnterPin } from '@/components/enter-pin';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default async function Page({ params }: { params: { token: string } }) {
	const result = await VerifyBankAccount({ token: params.token });
	if (result?.code == 1 && result.data) {
		return (
			<div className='h-screen flex justify-center items-center bg-background'>
				<Card className='bg-white/5 backdrop-blur-sm'>
					<CardHeader>
						<CardTitle className='text-primary'>
							Account Verification Done !
						</CardTitle>
					</CardHeader>
					<CardContent>
						Your Account has been verified!
						<div className='font-bold'>
							Account Number is{' '}
							<span className='text-primary-foreground text-lg tracking-wider'>
								{result.data?.AccountNumber}
							</span>
						</div>{' '}
						<div className='flex justify-center py-4'>
							<Link
								href={'/bank-login'}
								className='bg-primary px-3 py-2 text-sm font-semibold rounded-3xl'
							>
								Login Now!
							</Link>
						</div>
					</CardContent>
				</Card>
			</div>
		);
	}
	return (
		<div className='h-screen flex justify-center items-center bg-primary'>
			<Card className='bg-primary-foreground'>
				<CardHeader>
					<CardTitle>Invalid Url</CardTitle>
				</CardHeader>
				<CardContent>
					Verification URL is wrong please try again
					<div className='flex justify-center py-4'>
						<Link
							href={'/bank-account'}
							className='bg-blue-500 px-2 py-1 rounded-3xl'
						>
							Bank Account
						</Link>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
