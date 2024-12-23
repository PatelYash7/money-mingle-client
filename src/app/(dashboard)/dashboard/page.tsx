import { Hero } from '@/components/dashboard/Hero';
import { PayAgain } from '@/components/dashboard/PayAgain';
import { RecentTransaction } from '@/components/dashboard/RecentTransaction';

export default function Page() {
	return (
		<div className='py-4 w-full'>
			<div className=' grid grid-cols-1 sm:grid-cols-5 space-y-4  sm:space-x-8 '>
				<div className=' col-span-1 sm:col-span-3 w-full flex flex-col gap-4'>
					<Hero />
					<PayAgain />
				</div>
				<div className='col-span-1 sm:col-span-2'>
					<RecentTransaction />
				</div>
			</div>
		</div>
	);
}
