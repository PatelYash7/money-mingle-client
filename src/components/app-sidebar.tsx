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
	SidebarMenuSub,
	SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import {
	ArrowRightLeft,
	Calendar,
	ChevronDown,
	Dot,
	Landmark,
	LayoutDashboard,
	List,
	User,
} from 'lucide-react';
import Link from 'next/link';
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from './ui/collapsible';

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
		<Sidebar className='  '>
			<SidebarContent className=' -mr-2 pl-4  border-primary backdrop-blur-sm bg-slate-100 dark:bg-[#00000060] text-gray-800 font-bold dark:text-white py-8 '>
				<SidebarGroup>
					<Link href={'/'}>
						<SidebarGroupLabel className='font-bold text-primary text-2xl'>
							Money Mingle
						</SidebarGroupLabel>
					</Link>
					<SidebarGroupContent className='mt-4'>
						<SidebarMenu className=' space-y-3'>
							{items.map((item) => {
								if (item.title == 'Transactions') {
									return (
										<Collapsible key={948491} className='group/collapsible'>
											<SidebarMenuItem>
												<CollapsibleTrigger
													asChild
													className='text-sm flex justify-between w-full text-white  font-bold'
												>
													<SidebarMenuButton>
														<div className='flex gap-2 items-center'>
															<List className='text-sm h-5 w-5 font-light' />
															Transactions
														</div>
														<ChevronDown className='ml-auto font-bold transition-transform group-data-[state=open]/collapsible:rotate-180' />
													</SidebarMenuButton>
												</CollapsibleTrigger>
											</SidebarMenuItem>
											<CollapsibleContent className=' py-2'>
												<SidebarMenuSub className=' space-y-2'>
													<SidebarMenuSubItem>
														<a
															href={'/transactions/bank'}
															className=''
														>
															<span>Bank Transactions</span>
														</a>
													</SidebarMenuSubItem>
													<SidebarMenuSubItem>
														<a
															href={'/transactions/wallet'}
															className=''
														>
															<span>Wallet Transactions</span>
														</a>
													</SidebarMenuSubItem>
												</SidebarMenuSub>
											</CollapsibleContent>
										</Collapsible>
									);
								}
								return (
									<SidebarMenuItem className='' key={item.title}>
										<SidebarMenuButton asChild>
											<a href={item.url}>
												<item.icon />
												<span>{item.title}</span>
											</a>
										</SidebarMenuButton>
									</SidebarMenuItem>
								);
							})}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}
