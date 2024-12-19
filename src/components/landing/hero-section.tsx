import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
	ArrowRightIcon,
	ShieldCheckIcon,
	ZapIcon,
	GlobeIcon,
} from 'lucide-react';
import { ButtonPrimary } from '../Button';

export function HeroSection() {
	return (
		<section className='relative py-28 min-h-screen w-screen'>
			<div className="absolute inset-0 -z-10 h-full  w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
			<div className='container px-4  md:px-6 '>
				<div className='flex flex-col items-center space-y-8 text-center'>
					<div className='space-y-4 max-w-3xl'>
						<h1 className='text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-black dark:text-white'>
							Revolutionize Your
							<span className='block bg-gradient-to-r text-transparent bg-clip-text from-[#6633ee] py-4 to-[#83f]'>Payments Experience</span>
						</h1>
						<p className='mx-auto max-w-[700px] text-gray-800 dark:text-slate-400 md:text-xl'>
							Unlock seamless, secure, and efficient financial transactions.
							Manage, track, and collect money effortlessly with the ability to
							send and integrate multiple financial services.
						</p>
					</div>
					<div className='space-x-4'>
						<ButtonPrimary className='px-6 text-lg' title='Get Started'/>
						
					</div>
					<div className='grid gap-6 md:grid-cols-3 lg:gap-8 pt-8 w-full'>
						{[
							{
								title: 'Secure Transfer',
								description:
									'Send money fast and safely with our advanced security protocols',
								icon: ShieldCheckIcon,
							},
							{
								title: 'Seamless Integration',
								description:
									'Easy to implement financial technology from multiple providers',
								icon: ZapIcon,
							},
							{
								title: 'Multi-Currency Support',
								description:
									'Effortlessly manage multiple currencies across your transactions',
								icon: GlobeIcon,
							},
						].map((feature, index) => (
							<Card key={index} className='bg-[#0000000c] rounded-3xl border-gray-300 dark:backdrop-blur-md   dark:bg-[#ffffff0c] dark:border-[#ffffff3a] dark:border-[0.01px] border-[0.01px]'>
								<CardContent className='p-6'>
									<feature.icon className='h-12 w-12 text-primary-foreground mb-4' />
									<h3 className='text-2xl font-bold text-left text-primary mb-2'>
										{feature.title}
									</h3>
									<p className='dark:text-white text-left text-black'>{feature.description}</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
