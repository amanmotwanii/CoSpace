"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarGroup,
  // SidebarGroupLabel, // Not used, can be removed or kept if planning to use
  useSidebar,
} from '@/components/ui/sidebar';
import { Logo } from '@/components/shared/Logo';
// import { Button } from '@/components/ui/button'; // Not used
import { Bell, Home, Users, Settings, BriefcaseBusiness, LayoutDashboard, Building, CalendarCheck, LifeBuoy, LogOut } from 'lucide-react';
// import type { NavItem } from '@/lib/types'; // Removed
import { cn } from '@/lib/utils';

/**
 * @typedef {object} NavItem
 * @property {string} title
 * @property {string} href
 * @property {import('lucide-react').LucideIcon} [icon]
 * @property {boolean} [external]
 * @property {boolean} [active]
 * @property {NavItem[]} [items]
 */

/** @type {NavItem[]} */
const adminNavItems = [
  { title: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { title: 'Spaces', href: '/admin/spaces', icon: Building },
  { title: 'Bookings', href: '/admin/bookings', icon: CalendarCheck },
  { title: 'Users', href: '/admin/users', icon: Users },
];

/** @type {NavItem[]} */
const settingsNavItems = [
 { title: 'General Settings', href: '/admin/settings/general', icon: Settings },
 { title: 'Pricing Rules', href: '/admin/settings/pricing', icon: BriefcaseBusiness },
]

export function AdminAppSidebar() {
  const pathname = usePathname();
  const { state: sidebarState } = useSidebar(); 

  const isActive = (href) => pathname === href;
  const isSubActive = (items) => items?.some(item => isActive(item.href)) ?? false;


  return (
    <Sidebar side="left" variant="sidebar" collapsible="icon">
      <SidebarHeader className="border-b">
        {sidebarState === 'expanded' && <Logo />}
        {sidebarState === 'collapsed' && (
          <Link href="/admin" className="flex justify-center items-center h-full">
            <BriefcaseBusiness className="h-6 w-6 text-primary" />
          </Link>
        )}
      </SidebarHeader>
      <SidebarContent className="flex-grow">
        <SidebarMenu>
          {adminNavItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                isActive={isActive(item.href)}
                tooltip={{ children: item.title, className: "group-data-[collapsible=icon]:block hidden" }}
              >
                <Link href={item.href}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
           <SidebarGroup className="p-0">
              <SidebarMenuButton 
                isSub /* This prop seems to be missing in the SidebarMenuButton definition based on shadcn, might need to check custom component */
                isActive={isSubActive(settingsNavItems)} 
                tooltip={{ children: "Settings", className: "group-data-[collapsible=icon]:block hidden" }}
                >
                <Settings />
                <span>Settings</span>
              </SidebarMenuButton>
              <SidebarMenuSub>
                {settingsNavItems.map((subItem) => (
                   <SidebarMenuSubItem key={subItem.title}>
                     <SidebarMenuSubButton asChild isActive={isActive(subItem.href)}>
                       <Link href={subItem.href}>{subItem.title}</Link>
                     </SidebarMenuSubButton>
                   </SidebarMenuSubItem>
                ))}
              </SidebarMenuSub>
           </SidebarGroup>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="mt-auto border-t p-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton 
              asChild
              tooltip={{ children: "Help", className: "group-data-[collapsible=icon]:block hidden"}}
            >
              <Link href="/admin/help">
                <LifeBuoy />
                <span>Help</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton 
              className="text-destructive hover:bg-destructive/10 hover:text-destructive focus-visible:ring-destructive"
              tooltip={{ children: "Log Out", className: "group-data-[collapsible=icon]:block hidden"}}
            >
              <LogOut />
              <span>Log Out</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
