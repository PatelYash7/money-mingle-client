import { VerifyWallet } from '@/action/verify-wallet';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default async function Page({ params }: { params: { token: string } }) {
	const result = await VerifyWallet({ token: params.token });
	if (result?.code == 1 && result.id) {
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
		<div className='h-screen flex justify-center items-center bg-background'>
			<Card className='bg-white/5 backdrop-blur-sm'>
				<CardHeader>
					<CardTitle className='text-primary'>Invalid Token!</CardTitle>
				</CardHeader>
				<CardContent>
					Your Verification Token is Expired or Invalid!
				</CardContent>
			</Card>
		</div>
	);
}
