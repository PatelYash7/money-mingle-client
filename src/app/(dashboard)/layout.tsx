import { AppSidebar } from '@/components/app-sidebar';
import { FloatingNav } from '@/components/ui/floating-navbar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { IconHome } from '@tabler/icons-react';

export default function Layout({ children }: { children: React.ReactNode }) {
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
		];
	return (
		<>
			<FloatingNav navItems={navItems}/>
			<SidebarProvider className=''>
				<AppSidebar />
				<main className='text-white  w-full '>
					<SidebarTrigger className='absolute top-4 z-10 dark:text-white  text-gray-400 hover:text-black' />
					<div className='px-10 min-h-screen py-10  '>{children}</div>
				</main>
			</SidebarProvider>
		</>
	);
}
