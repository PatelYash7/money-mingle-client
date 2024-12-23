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
		<div
			onClick={handlePayNow}
			className='flex cursor-pointer justify-between border-2 px-2 py-2 w-full items-center rounded-md'
		>
			<div className='flex items-center gap-4'>
				<div>
					{item.picture ?
						<Image
							src={item.picture}
							width={56}
							height={56}
							className='h-10 w-10 sm:h-16 sm:w-20 font-bold text-base sm:text-3xl flex justify-center items-center rounded-full bg-primary-foreground'
							alt={item.Name.charAt(0)}
						/>
					:	<div className='px-5 py-3 rounded-full bg-primary-foreground text-base sm:text-3xl font-bold'>
							{item.Name.charAt(0)}
						</div>
					}
				</div>
				<div className='w-full space-y-4'>
					<div className=' text-base  sm:text-xl font-semibold sm:w-48 sm:h-4'>
						{item.Name}
					</div>
					<div className='text-sm'>{item.MobileNumber}</div>
				</div>
			</div>
			<div className='sm:block hidden '>
				<Button
					onClick={handlePayNow}
					className=' bg-primary text-white rounded-3xl font-bold'
				>
					Pay Now
				</Button>
			</div>
		</div>
	);
};
