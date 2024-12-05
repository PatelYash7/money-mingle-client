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
  } from "@/components/ui/sidebar"
  import { ArrowRightLeft, Calendar, Home, Inbox, LayoutDashboard, Search, Settings } from "lucide-react"
 
  const items = [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard ,
    },
    {
      title: "Wallet Transfers",
      url: "/wallet-transfers",
      icon: ArrowRightLeft ,
    },
    {
      title: "Bank Tranfers",
      url: "/bank-transfers",
      icon: Calendar,
    },
    {
      title: "Profile",
      url: "/profile",
      icon: Search,
    },
    {
      title: "Bank",
      url: "#",
      icon: Settings,
    },
  ]
  export function AppSidebar() {
    return (
        <Sidebar className="">
        <SidebarContent className=" pl-4 bg-gray-900 text-white py-8 ">
          <SidebarGroup>
            <SidebarGroupLabel className="font-bold text-white text-xl">Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
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
    )
  }
  