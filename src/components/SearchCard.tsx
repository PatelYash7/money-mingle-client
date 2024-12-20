import { User } from '@prisma/client';
import Image from 'next/image';
import { Button } from './ui/button';

export const SearchCard = ({
	item,
	handlePayNow,
}: {
	item: User;
	handlePayNow: () => void;
}) => {
	return (
		<div className='flex justify-between border-2 px-2 py-2 items-center rounded-md'>
			<div className='flex items-center gap-4'>
				<div>
					{item.picture ?
						<Image
							src={item.picture}
							width={48}
							height={48}
							className='h-12 w-16 flex justify-center items-center rounded-full'
							alt='img'
						/>
					:	<div className='px-5 py-3 rounded-full bg-blue-600 text-3xl font-bold'>
							{item.Name.charAt(0)}
						</div>
					}
				</div>
				<div className='w-full space-y-4'>
					{/* <Skeleton className='w-48 h-4' /> */}
					<div className=' text-xl font-semibold w-48 h-4'>{item.Name}</div>
					<div className='text-sm'>{item.MobileNumber}</div>
				</div>
			</div>
			<div>
				<Button
					onClick={handlePayNow}
					className=' bg-green-500 rounded-2xl font-bold'
				>
					Pay Now
				</Button>
			</div>
		</div>
	);
};
