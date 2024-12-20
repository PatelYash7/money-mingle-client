import Image from 'next/image';

export function FeaturesSection() {
	return (
		<section className='pt-12 pb-20 dark:bg-background bg-slate-50 rounded-t-3xl -mt-8'>
			<div className='container px-4 md:px-6'>
				<div className='text-center mb-12'>
					<h2 className='text-3xl font-bold text-primary  tracking-tighter sm:text-4xl md:text-5xl'>
						Empower Your Money Transfer Journey
					</h2>
					<p className='text-lg text-muted-foreground mt-4'>
						with Seamless Solutions
					</p>
					<p className='text-muted-foreground mt-2'>
						Explore our powerful features for seamless payments experience.
					</p>
				</div>
				<div className='grid gap-8 md:grid-cols-2 lg:gap-12'>
					{[
						{
							title: 'Real-time Transaction',
							image: '/transaction.png',
						},
						{
							title: 'Seamless Verification',
							image: '/verification.png',
						},
						{
							title: 'Secure Payments',
							image: '/securepayments.png',
						},
						{
							title: 'User-Friendly Interface',
							image: '/userfriendly.png',
						},
					].map((feature, index) => (
						<div key={index} className='relative '>
							<div className='overflow-hidden rounded-lg py-2 items-center justify-center flex flex-col backdrop-blur-sm bg-transparent border-primary border-2'>
								<Image
									src={feature.image}
									alt={feature.title}
									width={200}
									height={200}
									className='object-cover h-56 w-80 transition-transform duration-300 group-hover:scale-105'
								/>
								<h3 className='mt-4 text-3xl text-primary font-bold'>
									{feature.title}
								</h3>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
