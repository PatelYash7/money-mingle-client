import { VerifyWallet } from '@/action/verify-wallet';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default async function Page({ params }: { params: { token: string } }) {
	const result = await VerifyWallet({ token: params.token });
	if (result?.code == 1 && result.id) {
		return (
			<div className='h-screen flex justify-center items-center bg-primary'>
				<Card className='bg-primary-foreground'>
					<CardHeader>
						<CardTitle>Account Verification Done !</CardTitle>
					</CardHeader>
					<CardContent>
						Your Account has been verified!
						<div className='flex justify-center py-4'>
							<Link
								href={'/wallet-transfers'}
								className='bg-blue-500 px-2 py-1 rounded-3xl'
							>
								Wallet Transfer
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
					<CardTitle>Account Verification Done !</CardTitle>
				</CardHeader>
				<CardContent>
					Your Account has been verified!
					<div className='flex justify-center py-4'>
						<Link
							href={'/wallet-transfers'}
							className='bg-blue-500 px-2 py-1 rounded-3xl'
						>
							Wallet Transfer
						</Link>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}