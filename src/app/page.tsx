import LandingPage from '@/components/Landing';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { FloatingNav } from '@/components/ui/floating-navbar';
import { IconHome, IconMessage, IconUser } from '@tabler/icons-react';
import { FcDocument } from 'react-icons/fc';
export default async function Home() {
	const navItems = [
		{
			name: 'Home',
			link: '/',
			icon: <IconHome className='h-4 w-4 text-neutral-500 dark:text-white' />,
		},
		{
			name: 'Dashboard',
			link: '/dashboard',
			icon: <IconHome className='h-4 w-4 text-neutral-500 dark:text-white' />,
		},
		{
			name: 'Docs',
			link: 'https://github.com/PatelYash7/saas-template',
			icon: <FcDocument className='h-4 w-4 text-neutral-500 dark:text-white' />,
		},
	];
	return (
		<>
			<FloatingNav navItems={navItems} />
			<LandingPage />
		</>
	);
}
