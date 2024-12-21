import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { ButtonPrimary } from '../Button';

export function CTASection() {
	return (
		<section className='py-16 relative rounded-3xl '>
			<div className='absolute inset-0 rounded-3xl -z-10 h-full w-full items-center [background:radial-gradient(125%_125%_at_50%_50%,#fff_35%,#63e_100%)] dark:[background:radial-gradient(125%_125%_at_50%_50%,#000_35%,#63e_100%)]'></div>

			<div className='container px-4 md:px-6'>
				<div className='grid gap-6 lg:grid-cols-2 items-center'>
					<div className='space-y-4'>
						<h2 className='text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl'>
							Ready to simplify your Wallet transactions?
						</h2>
						<p className='text-slate-400 md:text-xl'>
							Create an Bank account and start managing your finances with ease.
						</p>
						<ButtonPrimary url='/bank-account' title='Get Started Now' />
					</div>
					<div className='relative h-[300px] lg:h-[400px]'>
						<Image
							src='/wallet.png'
							alt='Credit card illustration'
							fill
							className='object-contain'
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
