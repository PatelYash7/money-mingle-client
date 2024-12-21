import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Navbar() {
	return (
		<header className='fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50'>
			<div className='container flex h-16 items-center justify-between'>
				<Link href='/' className='flex items-center space-x-2'>
					<span className='text-xl font-bold'>Zenpay</span>
				</Link>
				<nav className='hidden md:flex items-center space-x-6 text-sm font-medium'>
					<Link href='#' className='transition-colors hover:text-foreground/80'>
						About
					</Link>
					<Link href='#' className='transition-colors hover:text-foreground/80'>
						Products
					</Link>
					<Link href='#' className='transition-colors hover:text-foreground/80'>
						Resources
					</Link>
					<Link href='#' className='transition-colors hover:text-foreground/80'>
						Support
					</Link>
				</nav>
				<div className='flex items-center space-x-4'>
					<Button variant='ghost' size='sm'>
						Sign in
					</Button>
					<Button size='sm'>Sign up</Button>
				</div>
			</div>
		</header>
	);
}
