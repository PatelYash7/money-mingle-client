import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from '@/components/ui/sidebar';
import {
	ArrowRightLeft,
	Calendar,
	Landmark,
	LayoutDashboard,
	List,
	User,
} from 'lucide-react';
import Link from 'next/link';

const items = [
	{
		title: 'Dashboard',
		url: '/dashboard',
		icon: LayoutDashboard,
	},
	{
		title: 'Wallet Transfers',
		url: '/wallet-transfers',
		icon: ArrowRightLeft,
	},
	{
		title: 'Bank Tranfers',
		url: '/bank-transfers',
		icon: Calendar,
	},
	{
		title: 'Transactions',
		url: '/transactions',
		icon: List,
	},
	{
		title: 'Profile',
		url: '/profile',
		icon: User,
	},
	{
		title: 'Go to Bank',
		url: '/bank-account',
		icon: Landmark,
	},
];
export function AppSidebar() {
	return (
		<Sidebar className=' '>
			<SidebarContent className=' pl-4 bg-gray-400 dark:bg-gray-900 text-gray-800 font-bold dark:text-white py-8 '>
				<SidebarGroup>
					<Link href={'/'}>
						<SidebarGroupLabel className='font-bold text-black dark:text-white text-xl'>
							Money Mingle
						</SidebarGroupLabel>
					</Link>
					<SidebarGroupContent className='mt-4'>
						<SidebarMenu className=' space-y-4'>
							{items.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild>
										<a href={item.url}>
											<item.icon />
											<span>{item.title}</span>
										</a>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}
