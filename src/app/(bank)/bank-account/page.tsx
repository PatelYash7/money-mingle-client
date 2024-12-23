import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Smartphone, CreditCard, Shield, Zap, CheckCircle } from 'lucide-react';

const features = [
	{
		title: 'Mobile Banking',
		description: 'Bank on-the-go with our user-friendly mobile app',
		icon: Smartphone,
	},
	{
		title: 'Secure Payments',
		description: 'Make safe and secure transactions anytime, anywhere',
		icon: CreditCard,
	},
	{
		title: 'Data Protection',
		description:
			'Your financial data is protected with state-of-the-art encryption',
		icon: Shield,
	},
	{
		title: 'Instant Transfers',
		description: 'Transfer money instantly to any bank account',
		icon: Zap,
	},
];

const steps = [
	'Create an account on Money Mingle Bank',
	'Verify your account with Email',
	'Transfer Money to your Wallet',
	'Start making payments to your friends and family',
];

const testimonials = [
	{
		name: 'John Doe',
		role: 'Small Business Owner',
		content:
			"Money Mingle has revolutionized how I manage my business finances. It's fast, secure, and incredibly user-friendly.",
	},
	{
		name: 'Jane Smith',
		role: 'Freelance Designer',
		content:
			"As a freelancer, I need a reliable payment system. Money Mingle delivers that and more. I couldn't be happier!",
	},
	{
		name: 'Mike Johnson',
		role: 'Tech Entrepreneur',
		content:
			"The instant transfers and robust security features of Money Mingle give me peace of mind. It's a game-changer.",
	},
];

export default function Home() {
	return (
		<div className='min-h-screen relative '>
			<div className='fixed inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]'></div>
			<div className='relative h-full w-full bg-slate-950'>
				<div className='fixed bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]'></div>
				<div className='fixed bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]'></div>
			</div>
			<main>
				{/* Hero Section */}
				<section className='py-20 px-6'>
					<div className='container mx-auto text-center'>
						<h1 className='text-5xl font-bold mb-6 text-primary'>
							Welcome to Money Mingle's Bank
						</h1>
						<p className='text-xl mb-8 text-slate-100'>
							Your trusted partner for seamless digital banking.
						</p>
						<div className='flex justify-center gap-4'>
							<Link
								className='bg-green-500 hover:bg-green-600 z-0 text-white py-2 px-4 rounded-2xl'
								href={'/bank-account/create-account'}
							>
								Get Started
							</Link>
							<Link href={'/'} className='bg-primary px-4 py-2 z-0 rounded-2xl'>
								Wallets
							</Link>
						</div>
					</div>
				</section>

				{/* Features Section */}
				<section id='features' className='py-20 px-6 '>
					<div className='container mx-auto'>
						<h2 className='text-3xl font-bold mb-12 text-center text-primary'>
							Our Features
						</h2>
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
							{features.map((feature, index) => (
								<Card key={index} className='bg-white/5 backdrop-blur-sm'>
									<CardHeader>
										<feature.icon className='w-10 h-10 text-white mb-4' />
										<CardTitle className='text-primary-foreground'>
											{feature.title}
										</CardTitle>
									</CardHeader>
									<CardContent>
										<p className='text-white'>{feature.description}</p>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</section>

				{/* How It Works Section */}
				<section id='how-it-works' className='py-20 px-6'>
					<div className='container mx-auto'>
						<h2 className='text-3xl font-bold mb-12 text-center text-primary'>
							How It Works
						</h2>
						<div className='flex justify-center'>
							<div className='max-w-2xl mx-auto '>
								{steps.map((step, index) => (
									<div key={index} className='flex items-center mb-8'>
										<CheckCircle className='w-6 h-6 text-white mr-4 flex-shrink-0 mt-1' />
										<p className='text-lg text-white/20'>{step}</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>

				{/* Testimonials Section */}
				<section id='testimonials' className='py-20 px-6 '>
					<div className='container mx-auto'>
						<h2 className='text-3xl font-bold mb-12 text-center text-primary'>
							What Our Customers Say
						</h2>
						<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
							{testimonials.map((testimonial, index) => (
								<Card key={index} className='bg-white/5 backdrop-blur-sm'>
									<CardHeader>
										<Avatar className='w-12 h-12 mb-4'>
											<AvatarImage
												src={`/placeholder.svg?height=50&width=50`}
												alt={testimonial.name}
											/>
											<AvatarFallback>
												{testimonial.name
													.split(' ')
													.map((n) => n[0])
													.join('')}
											</AvatarFallback>
										</Avatar>
										<CardTitle className='text-primary'>
											{testimonial.name}
										</CardTitle>
										<p className='text-sm text-gray-200'>{testimonial.role}</p>
									</CardHeader>
									<CardContent className=''>
										<p className='text-white/50'>{testimonial.content}</p>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section className='py-20 px-6  text-white'>
					<div className='container mx-auto text-center'>
						<h2 className='text-3xl font-bold mb-6'>
							Ready to Simplify Your Finances?
						</h2>
						<p className='text-xl mb-8'>
							Join Money Mingle today and experience the future of banking.
						</p>
						<Link
							href={'/bank-account/create-account'}
							className='px-4 py-2 bg-green-600 text-white rounded-3xl'
						>
							Sign Up Now
						</Link>
					</div>
				</section>
			</main>

			{/* Footer Section */}
			<footer className='text-white py-12 px-6'>
				<div className='container mx-auto  text-center gap-8'>
					<div>
						<h3 className='text-2xl text-primary font-semibold mb-4'>
							Money Mingle
						</h3>
						<p className='text-sm text-gray-400'>
							Your trusted partner for seamless digital banking and payments.
						</p>
					</div>
				</div>
				<div className='container mx-auto mt-8 pt-8 border-t border-gray-700 text-center'>
					<p className='text-sm text-gray-400'>
						&copy; 2024 Money Mingle. All rights reserved.
					</p>
				</div>
			</footer>
		</div>
	);
}
