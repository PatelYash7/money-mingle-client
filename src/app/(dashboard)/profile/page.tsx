import { getUser } from '@/action/get-user';
import { ProfileFooter } from '@/components/ProfileFooter';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';

export default async function Page() {
	const User = await getUser();
	return (
		<div className='sm:h-screen flex justify-center items-center'>
			<Card>
				<CardHeader>
					<CardTitle className='text-center font-bold'>USER PROFILE</CardTitle>
				</CardHeader>
				<CardContent className='space-y-4'>
					<div className='flex items-center gap-2 text-lg'>
						<Label className=' font-bold text-lg'>Name:</Label>
						<div>{User?.Name}</div>
					</div>
					<div className='flex items-center gap-2 text-lg'>
						<Label className=' font-bold text-lg'>Email:</Label>
						<div>{User?.Email}</div>
					</div>
					<div className='flex items-center gap-2 text-lg'>
						<Label className=' font-bold text-lg'>Mobile Number:</Label>
						<div>{User?.MobileNumber}</div>
					</div>
					<div className='flex items-center gap-2 text-lg'>
						<Label className=' font-bold text-lg'>Verified:</Label>
						<div
							className={`px-2 rounded-lg ${User?.isVerified ? 'bg-green-500' : 'bg-red-500'}`}
						>
							{String(User?.isVerified).toUpperCase()}
						</div>
					</div>
					<div className='flex items-center gap-2 text-lg'>
						<Label className=' font-bold text-lg'>Account Type:</Label>
						<div>{User?.AccountType}</div>
					</div>
				</CardContent>
				<CardFooter>
					<ProfileFooter />
				</CardFooter>
			</Card>
		</div>
	);
}
