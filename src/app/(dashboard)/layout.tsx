import { AppSidebar } from '@/components/app-sidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<SidebarProvider className=''>
			<AppSidebar />
			<main className='text-white  w-full '>
				<SidebarTrigger className='absolute top-4 z-10' />
				<div className='px-10 min-h-screen py-10  '>{children}</div>
			</main>
		</SidebarProvider>
	);
}
