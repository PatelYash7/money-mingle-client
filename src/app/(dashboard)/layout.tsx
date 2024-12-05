import { AppSidebar } from '@/components/app-sidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className='py-8 bg-black text-white'>
			<SidebarProvider className=''>
				<AppSidebar />
				<main className=''>
					<SidebarTrigger />
					{children}
				</main>
			</SidebarProvider>
		</div>
	);
}
