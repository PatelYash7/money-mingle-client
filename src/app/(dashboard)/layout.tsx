import { AppSidebar } from '@/components/app-sidebar';
import { FloatingNav } from '@/components/ui/floating-navbar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { IconHome } from '@tabler/icons-react';
import { LayoutDashboard } from 'lucide-react';

export default function Layout({ children }: { children: React.ReactNode }) {
	const navItems = [
		{
			name: 'Home',
			link: '/',
			icon: <IconHome className='h-4 w-4 text-primary' />,
		},
		{
			name: 'Dashboard',
			link: '/dashboard',
			icon: (
				<LayoutDashboard className='h-4 w-4 text-primary dark:text-primary' />
			),
		},
	];
	return (
		<>
			<FloatingNav navItems={navItems} />
			<SidebarProvider className=''>
				<AppSidebar />
				<main className='text-white  w-full '>
					<SidebarTrigger className='absolute top-4 z-10 ml-4 text-xl text-primary hover:bg-transparent hover:text-2xl  hover:text-primary-foreground' />
					<div className='px-4 sm:px-10 min-h-screen py-20 dark:bg-background bg-slate-50  '>
						{children}
					</div>
				</main>
			</SidebarProvider>
		</>
	);
}
