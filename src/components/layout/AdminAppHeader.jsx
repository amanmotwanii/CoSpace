"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, UserCircle, Bell, Search } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/shared/Logo";
import { Input } from "@/components/ui/input";
import { useSidebar, SidebarTrigger } from "@/components/ui/sidebar"; 

export function AdminAppHeader() {
  const { isMobile } = useSidebar(); 

  return (
    <header className="flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 sticky top-0 z-30">
      {isMobile && <SidebarTrigger className="md:hidden" />} 
      
      {!isMobile && (
         <div className="hidden md:block">
           <Logo size="sm" />
         </div>
      )}

      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form className="ml-auto flex-1 sm:flex-initial">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
            />
          </div>
        </form>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Bell className="h-5 w-5" />
          <span className="sr-only">Toggle notifications</span>
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full">
          <UserCircle className="h-6 w-6" />
          <span className="sr-only">User menu</span>
        </Button>
      </div>
    </header>
  );
}
