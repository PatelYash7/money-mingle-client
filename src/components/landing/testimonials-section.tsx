import { Card, CardContent } from '@/components/ui/card';

export function TestimonialsSection() {
	return (
		<section className='relative py-16   rounded-3xl'>
			<div className='absolute inset-0 rounded-3xl -z-10 h-full w-full items-center [background:radial-gradient(125%_125%_at_50%_50%,#fff_30%,#63e_100%)] dark:[background:radial-gradient(125%_125%_at_50%_50%,#000_20%,#63e_100%)]'></div>

			<div className='container px-4 md:px-6'>
				<h2 className='text-3xl sm:text-4xl md:text-6xl  text-primary  font-bold tracking-tighter text-center mb-12'>
					Customer Stories
				</h2>
				<div className='grid gap-8 md:grid-cols-2 lg:gap-12 max-w-4xl mx-auto mb-12'>
					<Card className='bg-white/20 rounded-3xl border-gray-300   backdrop-blur-md dark:bg-[#ffffff0c] dark:border-[#ffffff3a] dark:border-[0.01px] border-[0.01px]'>
						<CardContent className='p-6 space-y-4'>
							<p className='text-sm text-muted-foreground'>Tirth Bhavani</p>
							<p className='text-lg font-medium'>
								"The best payment solution I've ever used. Secure, efficient,
								and integrates perfectly with all my financial tools. Highly
								recommend!"
							</p>
							<div className='flex items-center space-x-4'>
								<div className='rounded-full bg-black text-white flex justify-center items-center w-10 h-10'>TB</div>
								<div>
									<p className='text-sm font-medium'>Finance Executive</p>
									<p className='text-sm text-muted-foreground'>TechTOnions</p>
								</div>
							</div>
						</CardContent>
					</Card>
					<div className='flex flex-col justify-center space-y-4'>
						<div className='space-y-2'>
							<p className='text-4xl font-bold'>100%</p>
							<p className='text-sm text-muted-foreground'>
								Customer satisfaction rate
							</p>
						</div>
						<div className='space-y-2'>
							<p className='text-4xl font-bold'>98%</p>
							<p className='text-sm text-muted-foreground'>
								Transaction success rate
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
