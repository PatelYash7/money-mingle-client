import { CTASection } from '@/components/landing/cta-section';
import { FAQSection } from '@/components/landing/faq-section';
import { FeaturesSection } from '@/components/landing/features-section';
import { Footer } from '@/components/landing/footer';
import { HeroSection } from '@/components/landing/hero-section';
import { HowItWorks } from '@/components/landing/how-it-works';
import { TestimonialsSection } from '@/components/landing/testimonials-section';
import { FloatingNav } from '@/components/ui/floating-navbar';
import { IconHome } from '@tabler/icons-react';
import { LayoutDashboard } from 'lucide-react';

export default function Home() {
	const navItems = [
		{
			name: 'Home',
			link: '/',
			icon: <IconHome className='h-4 w-4 text-primary' />,
		},
		{
			name: 'Dashboard',
			link: '/dashboard',
			icon: <LayoutDashboard className='h-4 w-4 text-primary' />,
		},
	];
	return (
		<>
			<FloatingNav navItems={navItems} />
			<main className='min-h-screen '>
				<div className=''>
					<HeroSection />
					<FeaturesSection />
					<TestimonialsSection />
					<HowItWorks />
					<CTASection />
					<FAQSection />
				</div>
			</main>
			<Footer />
		</>
	);
}

// import Image from 'next/image';
// import Link from 'next/link';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import {
// 	ArrowRight,
// 	Shield,
// 	Zap,
// 	DollarSign,
// 	Smartphone,
// 	Star,
// } from 'lucide-react';
// import { FloatingNav } from './ui/floating-navbar';
// import { IconHome } from '@tabler/icons-react';

// export default function LandingPage() {
// 	const navItems = [
// 		{
// 			name: 'Home',
// 			link: '/',
// 			icon: <IconHome className='h-4 w-4 text-neutral-500 dark:text-white' />,
// 		},
// 		{
// 			name: 'Dashboard',
// 			link: '/dashboard',
// 			icon: <IconHome className='h-4 w-4 text-neutral-500 dark:text-white' />,
// 		},
// 	];
// 	return (
// 		<>
// 			<FloatingNav navItems={navItems} />
// 			<div className='flex flex-col bg-background text-foreground'>
// 				<main className='flex-1'>
// 					<section className='w-full py-12 md:py-24 lg:py-32 xl:py-36 bg-gradient-to-r from-purple-100 via-pink-100 to-orange-100'>
// 						<div className='container px-4 md:px-6'>
// 							<div className='flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 lg:space-x-12'>
// 								<div className='space-y-8 text-center lg:text-left lg:w-1/2'>
// 									<h1 className='text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none'>
// 										Mingle Your Money,{' '}
// 										<span className='text-primary'>
// 											Simplify Your Transfers
// 										</span>
// 									</h1>
// 									<p className='mx-auto max-w-[700px] text-muted-foreground md:text-xl'>
// 										MoneyMingle: The user-friendly and secure P2P wallet for
// 										seamless money transfers between individuals.
// 									</p>
// 									<div className='space-x-4'>
// 										<Button
// 											className='inline-flex items-center justify-center'
// 											size='lg'
// 										>
// 											Start Mingling
// 											<ArrowRight className='ml-2 h-4 w-4' />
// 										</Button>
// 										<Button variant='outline' size='lg'>
// 											Learn More
// 										</Button>
// 									</div>
// 								</div>
// 								<div className='lg:w-1/2'>
// 									<Image
// 										src='/placeholder.svg?height=400&width=600'
// 										alt='MoneyMingle App Interface'
// 										width={600}
// 										height={400}
// 										className='rounded-lg shadow-xl'
// 									/>
// 								</div>
// 							</div>
// 						</div>
// 					</section>
// 					<section
// 						id='features'
// 						className='w-full py-12 md:py-24 lg:py-32 bg-secondary'
// 					>
// 						<div className='container px-4 md:px-6'>
// 							<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-primary'>
// 								Core Features
// 							</h2>
// 							<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
// 								<Card className='bg-white dark:bg-gray-800'>
// 									<CardHeader>
// 										<Zap className='h-12 w-12 mb-4 text-primary' />
// 										<CardTitle>Instant Transfers</CardTitle>
// 									</CardHeader>
// 									<CardContent>
// 										<p>Send money in seconds, with no delays.</p>
// 									</CardContent>
// 								</Card>
// 								<Card className='bg-white dark:bg-gray-800'>
// 									<CardHeader>
// 										<DollarSign className='h-12 w-12 mb-4 text-primary' />
// 										<CardTitle>Low/No Fees</CardTitle>
// 									</CardHeader>
// 									<CardContent>
// 										<p>Enjoy zero transaction fees for domestic transfers.</p>
// 									</CardContent>
// 								</Card>
// 								<Card className='bg-white dark:bg-gray-800'>
// 									<CardHeader>
// 										<Shield className='h-12 w-12 mb-4 text-primary' />
// 										<CardTitle>Top-Notch Security</CardTitle>
// 									</CardHeader>
// 									<CardContent>
// 										<p>
// 											Your transactions are protected with industry-leading
// 											encryption and two-factor authentication.
// 										</p>
// 									</CardContent>
// 								</Card>
// 								<Card className='bg-white dark:bg-gray-800'>
// 									<CardHeader>
// 										<Smartphone className='h-12 w-12 mb-4 text-primary' />
// 										<CardTitle>Intuitive Interface</CardTitle>
// 									</CardHeader>
// 									<CardContent>
// 										<p>Simple design for a smooth, hassle-free experience.</p>
// 									</CardContent>
// 								</Card>
// 								<Card className='bg-white dark:bg-gray-800'>
// 									<CardHeader>
// 										<Star className='h-12 w-12 mb-4 text-primary' />
// 										<CardTitle>Cross-Platform Access</CardTitle>
// 									</CardHeader>
// 									<CardContent>
// 										<p>
// 											Available on web, iOS, and Android—transfer anytime,
// 											anywhere.
// 										</p>
// 									</CardContent>
// 								</Card>
// 							</div>
// 						</div>
// 					</section>
// 					<section
// 						id='how-it-works'
// 						className='w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-orange-100 via-pink-100 to-purple-100'
// 					>
// 						<div className='container px-4 md:px-6'>
// 							<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-primary'>
// 								How It Works
// 							</h2>
// 							<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
// 								<Card className='bg-white dark:bg-gray-800'>
// 									<CardHeader>
// 										<div className='w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4'>
// 											1
// 										</div>
// 										<CardTitle>Sign Up</CardTitle>
// 									</CardHeader>
// 									<CardContent>
// 										<p>Create a secure account in minutes.</p>
// 										<Image
// 											src='/placeholder.svg?height=150&width=150'
// 											alt='Sign Up Illustration'
// 											width={150}
// 											height={150}
// 											className='mt-4 mx-auto'
// 										/>
// 									</CardContent>
// 								</Card>
// 								<Card className='bg-white dark:bg-gray-800'>
// 									<CardHeader>
// 										<div className='w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4'>
// 											2
// 										</div>
// 										<CardTitle>Connect</CardTitle>
// 									</CardHeader>
// 									<CardContent>
// 										<p>Link your bank account or card effortlessly.</p>
// 										<Image
// 											src='/placeholder.svg?height=150&width=150'
// 											alt='Connect Illustration'
// 											width={150}
// 											height={150}
// 											className='mt-4 mx-auto'
// 										/>
// 									</CardContent>
// 								</Card>
// 								<Card className='bg-white dark:bg-gray-800'>
// 									<CardHeader>
// 										<div className='w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4'>
// 											3
// 										</div>
// 										<CardTitle>Send & Receive</CardTitle>
// 									</CardHeader>
// 									<CardContent>
// 										<p>
// 											Choose your recipient, enter the amount, and transfer with
// 											one tap.
// 										</p>
// 										<Image
// 											src='/placeholder.svg?height=150&width=150'
// 											alt='Send & Receive Illustration'
// 											width={150}
// 											height={150}
// 											className='mt-4 mx-auto'
// 										/>
// 									</CardContent>
// 								</Card>
// 							</div>
// 						</div>
// 					</section>
// 					<section
// 						id='testimonials'
// 						className='w-full py-12 md:py-24 lg:py-32 bg-secondary'
// 					>
// 						<div className='container px-4 md:px-6'>
// 							<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-primary'>
// 								What Our Users Say
// 							</h2>
// 							<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
// 								<Card className='bg-white dark:bg-gray-800'>
// 									<CardContent className='p-6 flex items-start space-x-4'>
// 										<Image
// 											src='/placeholder.svg?height=60&width=60'
// 											alt='Sarah T.'
// 											width={60}
// 											height={60}
// 											className='rounded-full'
// 										/>
// 										<div>
// 											<p className='mb-2 italic'>
// 												"MoneyMingle has revolutionized how I send money to
// 												friends and family. It's so easy and quick!"
// 											</p>
// 											<p className='font-bold text-primary'>- Sarah T.</p>
// 										</div>
// 									</CardContent>
// 								</Card>
// 								<Card className='bg-white dark:bg-gray-800'>
// 									<CardContent className='p-6 flex items-start space-x-4'>
// 										<Image
// 											src='/placeholder.svg?height=60&width=60'
// 											alt='Michael R.'
// 											width={60}
// 											height={60}
// 											className='rounded-full'
// 										/>
// 										<div>
// 											<p className='mb-2 italic'>
// 												"I love the security features. I feel confident using
// 												MoneyMingle for all my transfers."
// 											</p>
// 											<p className='font-bold text-primary'>- Michael R.</p>
// 										</div>
// 									</CardContent>
// 								</Card>
// 							</div>
// 						</div>
// 					</section>
// 					<section className='w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white'>
// 						<div className='container px-4 md:px-6'>
// 							<div className='flex flex-col items-center space-y-4 text-center'>
// 								<div className='space-y-2'>
// 									<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
// 										Ready to Start Mingling?
// 									</h2>
// 									<p className='mx-auto max-w-[700px] md:text-xl'>
// 										Join thousands of satisfied users and experience the easiest
// 										way to transfer money.
// 									</p>
// 								</div>
// 								<div className='space-x-4'>
// 									<Button
// 										className='inline-flex items-center justify-center bg-white text-primary hover:bg-gray-100'
// 										size='lg'
// 									>
// 										Download MoneyMingle Now
// 										<ArrowRight className='ml-2 h-4 w-4' />
// 									</Button>
// 								</div>
// 							</div>
// 						</div>
// 					</section>
// 				</main>
// 				<footer className='flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t'>
// 					<p className='text-xs text-muted-foreground'>
// 						© 2024 MoneyMingle. All rights reserved.
// 					</p>
// 					<nav className='sm:ml-auto flex gap-4 sm:gap-6'>
// 						<Link
// 							className='text-xs hover:underline underline-offset-4'
// 							href='#'
// 						>
// 							Terms of Service
// 						</Link>
// 						<Link
// 							className='text-xs hover:underline underline-offset-4'
// 							href='#'
// 						>
// 							Privacy
// 						</Link>
// 						<Link
// 							className='text-xs hover:underline underline-offset-4'
// 							href='#'
// 						>
// 							Support
// 						</Link>
// 					</nav>
// 					<div className='flex items-center space-x-4'>
// 						<Image
// 							src='/placeholder.svg?height=32&width=100'
// 							alt='PCI DSS Compliant'
// 							width={100}
// 							height={32}
// 							className='mr-2'
// 						/>
// 						<Image
// 							src='/placeholder.svg?height=32&width=100'
// 							alt='SSL Secure'
// 							width={100}
// 							height={32}
// 						/>
// 					</div>
// 				</footer>
// 			</div>
// 		</>
// 	);
// }
