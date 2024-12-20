import Image from 'next/image';

export function HowItWorks() {
	return (
		<section className='py-16 dark:bg-background bg-slate-50'>
			<div className='container px-4 md:px-6'>
				<h2 className='text-3xl sm:text-4xl md:text-6xl text-primary font-bold tracking-tighter text-center mb-12'>
					How It Works
				</h2>
				<div className='grid gap-8 md:grid-cols-3'>
					{[
						{
							title: 'Sign Up',
							description: 'Create an account and set up your profile',
							image: '/signup.png',
						},
						{
							title: 'Add Your Bank Account',
							description: 'Connect your bank account securely',
							image: '/signup.png',
						},
						{
							title: 'Start Transacting',
							description: 'Begin sending and receiving payments',
							image: '/signup.png',
						},
					].map((step, index) => (
						<div key={index} className=' backdrop-blur-sm border-primary border rounded-3xl px-4 py-4 text-center'>
							<div className='relative h-[200px] w-[200px] mb-4'>
								<Image
									src={step.image}
									alt={step.title}
									fill
									className='object-cover rounded-lg'
								/>
							</div>
							<h3 className='text-2xl font-bold mb-2 text-primary-foreground text-left'>
								{step.title}
							</h3>
							<p className='text-muted-foreground text-lg text-left'>
								{step.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
